// app/api/instructor/route.js
import { NextResponse } from "next/server";
import Instructor from "@/app/models/Instructor";
import connectDB from "@/app/utils/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, password, role, gender, educationDetails, shortBio } =
      body;

    if (
      !name ||
      !email ||
      !password ||
      !role ||
      !gender ||
      !educationDetails ||
      !shortBio
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await Instructor.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newInstructor = await Instructor.create({
      name,
      email,
      password: hashedPassword,
      role,
      gender,
      educationDetails,
      shortBio,
    });

    return NextResponse.json(
      {
        message: "Instructor created successfully",
        instructorId: newInstructor._id,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to create instructor", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    await connectDB();

    const user = await Instructor.findById(id).select("-password");
    if (!user) {
      return NextResponse.json(
        { success: false, message: "No IDs provided" },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error fetching students", error: err.message },
      { status: 500 }
    );
  }
}
