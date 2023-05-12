import type { NextApiRequest, NextApiResponse } from "next";
import { addSubscriber, updateSubscriber } from "../../../lib/mailchimp";

type Data = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  if (req.method === "POST") {
    const id = await updateSubscriber(
      req.body.id,
      req.body.name,
      req.body.hospital
    );
    res.json({ id });
  }
}
