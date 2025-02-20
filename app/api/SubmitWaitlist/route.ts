// app/api/SubmitWaitlist/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Get referral data from the request headers
    const referralData = req.headers.get('x-referral-data');
    let referralInfo = null;
    if (referralData) {
      try {
        referralInfo = JSON.parse(referralData);
      } catch (e) {
        console.error('Error parsing referral data:', e);
      }
    }

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

    // Build referral information string if it exists
    const referralSection = referralInfo 
      ? `**Referral Code:** ${referralInfo.referrer}
**First Visit Time:** ${new Date(referralInfo.timestamp).toLocaleString()}`
      : '';

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'justin@getsumu.xyz',     
      subject: 'New SUMU Waitlist Submission',
      text: `**Name:** ${body.name || 'Not provided'}
**Email:** ${body.email}
**Creator Type:** ${body.creatorType}
**Social Handle:** ${body.socialHandle || 'Not provided'}
${referralSection}
**Submission Time:** ${new Date().toLocaleString()}`
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