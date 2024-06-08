import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import dbConnect from "@/lib/db";
import Subscriber from "../../../models/subscriber";

export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const { name, email } = await req.json();
    // console.log("Received Data:", { name, email });

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 });
    }

    const subscriber = new Subscriber({ id: uuidv4(), name, email });
    await subscriber.save();
    
    await mongoose.disconnect();

    return NextResponse.json({ body: 'Subscribed successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function GET(req: Request, response: Response) {
  return new Response("GET request not allowed", {
    status: 405,
    statusText: "Method Not Allowed",
  });
}
