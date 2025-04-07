import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { instructorEmail, courseTitle, studentEmail, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sowmikavadivel5@gmail.com",
        pass: "fpsaclewxykvytws",
      },
    });

    await transporter.sendMail({
      from: `"Course App" <sowmikavadivel5@gmail.com>`,
      to: instructorEmail,
      subject: `Message from a Student - ${courseTitle}`,
      text: `${message}\n\nStudent Email: ${studentEmail}`,
    });

    return NextResponse.json(
      { message: "Mail sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Mail Error:", err);
    return NextResponse.json(
      { message: "Failed to send mail", error: err.message },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { message: "GET method not allowed" },
    { status: 405 }
  );
}
