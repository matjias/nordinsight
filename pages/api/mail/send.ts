import {config, sendMail} from '../../../lib/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: number
  }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        config();
      sendMail(req.body);
    } 
    res.json({status: 200})
  }