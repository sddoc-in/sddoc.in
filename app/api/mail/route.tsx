// pages/api/sendEmail.js

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
  // console.log('BREVO_API_KEY:', process.env.BREVO_API_KEY);  

  try {
    const { name, email, mess } = await req.json();
    // console.log('Received data:', { name, email, mess });  
    if (!name || !email || !mess) {
      // console.error('Missing required fields:', { name, email, mess });
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const brevoResponse = await axios.post('https://api.brevo.com/v3/smtp/email', {
      sender: {
        name: name,
        email: email,
      },
      to: [
        {
          name: 'SDDoc IT Solutions',
          email: 'singhshahab2001@gmail.com',
        },
      ],
      subject: 'New Contact Form Submission',
      htmlContent: `<html><head></head><body><p>Hello,</p><p>${mess}</p></body></html>`,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY, 
      },
    });

    // console.log('Brevo API Response:', brevoResponse.data);  

    if (brevoResponse.status === 200 || brevoResponse.status === 201) {
      // console.log('Email sent successfully!');
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      // console.error('Error sending email:', brevoResponse.statusText);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', {
        message: error.message,
        code: error.code,
        response: error.response ? {
          status: error.response.status,
          headers: error.response.headers,
          data: error.response.data
        } : null,
        config: error.config
      });
      return NextResponse.json({ error: error.response ? error.response.data : 'Internal Server Error' }, { status: error.response ? error.response.status : 500 });
    } else {
      // console.error('Unexpected error:', error);
      return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
  }
}
