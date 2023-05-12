import type { NextApiRequest, NextApiResponse } from "next";
import { addSubscriber } from "../../../lib/mailchimp";

type Data = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const id = await addSubscriber(req.body.email);
    res.json({ id });
  }
}
