import User from "@/app/models/User";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, password, role, dob, gender, phoneNumber } = body;
    if (
      !name ||
      !email ||
      !password ||
      !role ||
      !dob ||
      !gender ||
      !phoneNumber
    ) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }
    const hashedPassword = await hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      dob,
      gender,
      phoneNumber,
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ message: "Error creating user" }), {
      status: 500,
    });
  }
}
