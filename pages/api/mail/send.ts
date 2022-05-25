import {config, sendMail} from '../../../lib/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: number
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        config();
      const info = await sendMail(req.body);
      console.log(info);
    } 
    res.json({status: 200})
  }