import { config, sendMail } from '../../../lib/mail'
import type { NextApiRequest, NextApiResponse } from 'next'
import requestIp from 'request-ip'
import geoip from 'geoip-country'

type Data = {
  status: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    config()

    const detectedIp = requestIp.getClientIp(req)

    console.log(detectedIp)
    // const fromCountry = geoip.lookup(detectedIp)
    const searchTerm = req.body.searchTerm
    // console.log('Search term: ' + searchTerm + '\n' + 'From: ' + fromCountry)
    const fromCountry = detectedIp

    const mailData = {
      sender: 'NordInsight',
      senderMail: 'form@nordinsight.com',
      recipients: ['msixten@nordinsight.com'],
      subject: `There has been a search on nordinsight.com`,
      body: 'Search term: ' + searchTerm + '\n' + 'From: ' + fromCountry,
    }
    const info = await sendMail(mailData)
  }
  res.json({ status: 200 })
}
