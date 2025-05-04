import { NextResponse } from "next/server";
import connectDB from "@/app/utils/db";
import Course from "@/app/models/Course";
import { uploadFile } from "@/app/utils/upload";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const courseId = params.id; // Get ID directly from URL params

    if (!courseId) {
      return NextResponse.json({ error: "Course ID is required" }, { status: 400 });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ course });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const courseId = params.id; // Get ID directly from URL params

    if (!courseId) {
      return NextResponse.json({ error: "Course ID is required" }, { status: 400 });
    }

    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const order = formData.get("order");
    const videoFile = formData.get("videoFile");
    const pdfFile = formData.get("pdfFile");

    const moduleData = {
      title,
      content,
      order: parseInt(order, 10),
    };

    if (videoFile) {
      console.log("Processing video file upload...");
      const videoResult = await uploadFile(videoFile, "video");
      moduleData.videoFile = videoResult;
    }

    if (pdfFile) {
      console.log("Processing PDF file upload...");
      const pdfResult = await uploadFile(pdfFile, "raw");
      moduleData.pdfFile = pdfResult;
    }

    const course = await Course.findByIdAndUpdate(
      courseId,
      { $push: { modules: moduleData } },
      { new: true }
    );

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ course });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const courseId = params.id; // Get ID directly from URL params

    if (!courseId) {
      return NextResponse.json({ error: "Course ID is required" }, { status: 400 });
    }

    const formData = await request.formData();
    const moduleId = formData.get("moduleId");
    const title = formData.get("title");
    const content = formData.get("content");
    const order = formData.get("order");
    const videoFile = formData.get("videoFile");
    const pdfFile = formData.get("pdfFile");

    if (!moduleId) {
      return NextResponse.json({ error: "Module ID is required" }, { status: 400 });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    const moduleIndex = course.modules.findIndex(
      (m) => m._id.toString() === moduleId
    );
    if (moduleIndex === -1) {
      return NextResponse.json({ error: "Module not found" }, { status: 404 });
    }

    const updatedModule = {
      ...course.modules[moduleIndex].toObject(),
      title: title || course.modules[moduleIndex].title,
      content: content || course.modules[moduleIndex].content,
      order: order ? parseInt(order, 10) : course.modules[moduleIndex].order,
    };

    if (videoFile) {
      const videoResult = await uploadFile(videoFile, "video");
      updatedModule.videoFile = videoResult;
    }

    if (pdfFile) {
      const pdfResult = await uploadFile(pdfFile, "raw");
      updatedModule.pdfFile = pdfResult;
    }

    course.modules[moduleIndex] = updatedModule;
    await course.save();

    return NextResponse.json({ course });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const courseId = params.id; // Get ID directly from URL params

    if (!courseId) {
      return NextResponse.json({ error: "Course ID is required" }, { status: 400 });
    }

    const { searchParams } = new URL(request.url);
    const moduleId = searchParams.get("moduleId");

    if (!moduleId) {
      return NextResponse.json({ error: "Module ID is required" }, { status: 400 });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    course.modules = course.modules.filter(
      (m) => m._id.toString() !== moduleId
    );
    await course.save();

    return NextResponse.json({ course });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
