import mailchimp from "@mailchimp/mailchimp_marketing";
import dotenv from "dotenv";

dotenv.config();

mailchimp.setConfig({
  apiKey: process.env.CHIMP_API_KEY,
  server: process.env.CHIMP_SERVER,
});

async function callPing() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

callPing();

export const addSubscriber = async (email: string) => {
  console.log(email);
  const res = await mailchimp.lists.addListMember(process.env.CHIMP_LIST_ID, {
    email_address: email,
    status: "subscribed",
  });
  return res.id;
};

export const updateSubscriber = async (
  subId: string,
  name: string,
  hospital: string
) => {
  const res = await mailchimp.lists.updateListMember(
    process.env.CHIMP_LIST_ID,
    subId,
    {
      merge_fields: {
        NAME: name,
        HOSP: hospital,
      },
    }
  );
  return res.id;
};
