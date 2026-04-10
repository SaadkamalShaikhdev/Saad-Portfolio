import { NextResponse } from 'next/server';
import nodemailer from "nodemailer"

export async function POST(request: Request) {

const {email, subject, message, name} = await request.json();

if (!email || !subject || !message || !name) {
  return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saadkamaldev@gmail.com",
    pass: process.env.GOOGLE_APP_MAIL_PASSWORD
  }
});

const mailOptions = {
  from: "saadkamaldev@gmail.com",
  to: "saadkamaldev@gmail.com",
  subject: subject,
  text: `From: ${email}\nSubject: ${subject  
  }\n\n${name} sent you a message:\n
  \n\n${message}`
};

try {
  const info = await transporter.sendMail(mailOptions);
  if( info.accepted.length > 0) {
    console.log("Email sent: " + info.response);
    return NextResponse.json({ message: "Email sent successfully" });
  }
  else {
    console.error("Email not accepted: " + info.response);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
} catch (error) {
  console.error("Error while sending email:", error);
  return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
}
}