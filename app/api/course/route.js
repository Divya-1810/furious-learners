import Course from "@/app/models/Course";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";

// CREATE COURSE
export async function POST(req) {
  await connectDB();
  const body = await req.json();

  try {
    const course = await Course.create({
      title: body.title,
      description: body.description,
      instructor: body.instructor,
      instructorName: body.instructorName,
      modules: body.modules || [],
    });
    return NextResponse.json({ course }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PATCH(req) {
  await connectDB();
  const body = await req.json();

  const { courseId, newModule } = body;

  if (
    !courseId ||
    !newModule?.title ||
    !newModule?.content ||
    !newModule?.youtubeUrl ||
    newModule?.order === undefined
  ) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      { $push: { modules: newModule } },
      { new: true }
    );

    if (!updatedCourse) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ course: updatedCourse }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req, res) {
  try {
    await connectDB();

    const course = await Course.find().select("-password");
    if (!course) {
      return NextResponse.json(
        { success: false, message: "No IDs provided" },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: true, data: course }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error fetching students", error: err.message },
      { status: 500 }
    );
  }
}
