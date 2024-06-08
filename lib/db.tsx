// const {username, password} = process.env;
// export const connectionSrt="mongodb+srv://"+username+":"+password+"@website.oy4u0up.mongodb.net/leads?retryWrites=true&w=majority&appName=Website"
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI ?? '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  await mongoose.connect(MONGODB_URI, { bufferCommands: false }).then((mongoose) => { // yhi use krle acha chl raha hai ab brabr
    console.log("Connected to MongoDB");
  })
    .catch((err) => {
      console.log(err);
    });
  // if (cached.conn) {
  //   return cached.conn;
  // }

  // if (!cached.promise) {
  //   const opts = {
  //     bufferCommands: false,
  //   };

  //   cached.promise = await mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
  //     return mongoose;
  //   });
  // }
  // cached.conn = await cached.promise;
  // return cached.conn;
}

export default dbConnect;
