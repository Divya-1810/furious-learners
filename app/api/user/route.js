import User from "@/app/models/User";
import connectDB from "@/app/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    await connectDB();

    const user = await User.findById(id).select("-password");
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

export async function PUT(req) {
  try {
    await connectDB();

    const { userId, courseId } = await req.json();

    if (!userId || !courseId) {
      return NextResponse.json(
        { message: "Missing userId or courseId" },
        { status: 400 }
      );
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { enrolledCourses: courseId } },
      { new: true }
    ).populate("enrolledCourses");

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Course enrolled successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Update Error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
