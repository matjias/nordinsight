import { MongoClient } from 'mongodb'
import fs from 'fs'
import path from 'path'

export const getSlugFromImplant = (implant: any) => {
  const slug = implant.Model
    ? implant.Model.replace(/\s/g, '-')
        .replace(/\//g, '-')
        .replace(/\./g, '-')
        .replace('(', '')
        .replace(')', '')
        .replace('®', '')
        .replace('™', '')
        .replace('#', '')
        .toLowerCase()
    : 'failed-to-generate-slug'

  return slug
}

const mriStatusToString = (status: number) => {
  switch (status) {
    case 3:
      return 'Safe'
    case 2:
      return 'Conditional'
    case 1:
      return 'Unsafe'
    default:
      return 'Unknown'
  }
}

export const getImplantData = async () => {
  const uri = process.env.DB_URI

  const client = new MongoClient(uri as string)
  const ImpClient = client.db('startup').collection('Implant')
  const ManClient = client.db('startup').collection('Manufacturer')
  const ConClient = client.db('startup').collection('Conditionals')

  const manufacturers = await ManClient.find().toArray()
  const conditionals = await ConClient.find().toArray()

  const implants = await ImpClient.find({
    $and: [
      { Filename: { $exists: true } },
      { 'Edit-Status': { $nin: [0, 1] } },
    ],
  }).toArray()

  const trimmedImplants = implants.map((implant) => {
    const manufacturer = manufacturers.find(
      (manufacturer) =>
        manufacturer._id.toString() === implant.manufacturer_id.toString(),
    )
    const cond = conditionals.find(
      (c) => c.implant_id?.toString() === implant._id.toString(),
    )

    return {
      model: implant.Model,
      manufacturer: manufacturer?.name,
      type: implant.Type,
      status: mriStatusToString(implant['MRI-status']),
      desc: cond?.Precaution,
      slug: getSlugFromImplant(implant),
    }
  })

  client.close()

  return trimmedImplants
}

export const saveImplantsToFile = (implants: any[]) => {
  fs.writeFileSync(
    path.join(process.cwd(), 'implants.db'),
    JSON.stringify(implants),
  )
}

export const getImplantFromFile = (slug: string) => {
  const data = fs.readFileSync(path.join(process.cwd(), 'implants.db'), {
    encoding: 'utf8',
    flag: 'r',
  })
  const implants = JSON.parse(data)

  return implants.find((i) => i.slug === slug)
}

// 1 Write to JSON file
// 2 get from JSON file based on slug
