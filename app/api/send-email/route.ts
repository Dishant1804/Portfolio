import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const recipientEmail = process.env.RECIPIENT_EMAIL;

if (!emailUser || !emailPass || !recipientEmail) {
  throw new Error('Missing required environment variables for email');
}


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 465,
  secure: true, 
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

export async function POST(request: Request) {
  console.log('API route hit');
  const { name, email, subject, message } = await request.json();

  try {
  
    await transporter.sendMail({
      from: emailUser,
      to: recipientEmail,
      subject: "New Contact Form Submission",
      text: `
New contact form submission:
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
      html: `
<h2>New contact form submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}