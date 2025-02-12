import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate required fields
    if (!body.email || !body.creatorType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'justin@getsumu.xyz',     
      subject: 'New SUMU Waitlist Submission',
      html: `
        <h2>New Waitlist Submission</h2>
        <p><strong>Name:</strong> ${body.name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Creator Type:</strong> ${body.creatorType}</p>
        <p><strong>Social Handle:</strong> ${body.socialHandle || 'Not provided'}</p>
        <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error submitting form' },
      { status: 500 }
    );
  }
}