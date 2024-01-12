import nodemailer from "nodemailer";
import { emailTamplet } from "./emailTamplet.js";

export async function sendVirfiyEmail(option) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "cookteleltayb@gmail.com",
      pass: "cktgluqpjsgnfpop",
    },
  });

  const info = await transporter.sendMail({
    from: '"cooktel El- Tayb" <cookteleltayb@gmail.com>', // sender address
    to: 'faresamrr@gmail.com', // list of receivers // 'faresamrr@icloud.com'
    subject: "new Client", // Subject line
    // text: "Hello world?", // plain text body
    html: emailTamplet(option) // html body
  });

  console.log("Message sent: %s", info.messageId);

}
