import mongoose from "mongoose";

<<<<<<< HEAD
const MONGODB_URI = process.env.DATABASE;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
=======
const MONGODB_URI = process.env.DATABASE || process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the DATABASE or MONGODB_URI environment variable inside .env"
>>>>>>> 5fe4666 (Update project)
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
<<<<<<< HEAD
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
=======
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('MongoDB connected successfully');
      return mongoose;
    }).catch((error) => {
      console.error('MongoDB connection error:', error);
      throw error;
>>>>>>> 5fe4666 (Update project)
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
