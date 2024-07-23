import { config, sendMail } from '../../../lib/mail'
import type { NextApiRequest, NextApiResponse } from 'next'
import requestIp from 'request-ip'
import geoip from 'geoip-lite'

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
    const geo = geoip.lookup(detectedIp)
    const searchTerm = req.body.searchTerm

    const geoString = geo
      ? `Country: ${geo.country ? geo.country : detectedIp}, Region: ${
          geo.region ? geo.region : detectedIp
        }, City: ${geo.city ? geo.city : detectedIp}`
      : detectedIp

    const mailData = {
      sender: 'NordInsight',
      senderMail: 'form@nordinsight.com',
      recipients: ['msixten@nordinsight.com'],
      subject: `There has been a search on nordinsight.com`,
      body: 'Search term: ' + searchTerm + '\n' + 'From: ' + geoString,
    }
    const info = await sendMail(mailData)
  }
  res.json({ status: 200 })
}
