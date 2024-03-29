import nodemailer, { Transporter } from 'nodemailer';
import dotenv from 'dotenv'

let transporter: Transporter;

export const config = () => {
    dotenv.config();
  
    transporter = nodemailer.createTransport({
        host: process.env.MAIL_SERVER,
        port: parseInt(process.env.MAIL_SERVER),
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.MAIL_USER, 
          pass: process.env.MAIL_PASS,
        },
      });
}

interface MailInfo {
    sender: string;
    senderMail: string;
    recipients: string[];
    subject: string;
    body: string;
}

// async..await is not allowed in global scope, must use a wrapper
export const sendMail = async(mailInfo: MailInfo): Promise<any> => {
  let info = await transporter.sendMail({
    from: `"${mailInfo.sender}" <${'form@nordinsight.com'}>`, // sender address
    to: mailInfo.recipients.map(r => r + ','), // list of receivers
    subject: `${mailInfo.subject} (${mailInfo.senderMail})`, // Subject line
    text: mailInfo.body, // html body
    html: mailInfo.body, // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  return info;
}