import Course from "@/app/models/Course";
import connectDB from "@/app/utils/db";
import { NextResponse } from "next/server";

// PATCH: Add a module to a course
export async function PATCH(req, { params }) {
  await connectDB();

  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "Missing course ID" }, { status: 400 });
  }

  const { title, content, youtubeUrl, order } = await req.json();

  // Construct new module object
  const newModule = {
    title,
    content,
    youtubeUrl,
    order,
  };

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { $push: { modules: newModule } },
      { new: true } // return the updated course
    );

    if (!updatedCourse) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Module added successfully", course: updatedCourse },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  await connectDB();
  const { id } = await params;

  try {
    const course = await Course.findById(id);
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ course }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
