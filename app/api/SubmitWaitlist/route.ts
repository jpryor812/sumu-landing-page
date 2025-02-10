import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New SUMU Waitlist Submission',
      html: `
        <h2>New Waitlist Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Creator Type:</strong> ${body.creatorType}</p>
        <p><strong>Social Handle:</strong> ${body.socialHandle || 'Not provided'}</p>
        <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error submitting form' }, { status: 500 });
  }
}