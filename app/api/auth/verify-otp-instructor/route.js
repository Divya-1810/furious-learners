// app/api/auth/verify-otp-instructor/route.js

import connectDB from "@/app/utils/db";
import OtpVerification from "@/app/models/OtpVerification";
import Instructor from "@/app/models/Instructor";

export async function POST(req) {
  try {
    await connectDB();

    const { email, otp } = await req.json();

    if (!email || !otp) {
      return new Response(
        JSON.stringify({ message: "Email and OTP are required." }),
        { status: 400 }
      );
    }

    // Find the OTP entry
    const record = await OtpVerification.findOne({ email });

    if (!record) {
      return new Response(
        JSON.stringify({ message: "OTP not found or expired." }),
        { status: 400 }
      );
    }

    if (record.otp !== otp) {
      return new Response(
        JSON.stringify({ message: "Invalid OTP." }),
        { status: 400 }
      );
    }

    if (record.expiresAt < new Date()) {
      return new Response(
        JSON.stringify({ message: "OTP has expired." }),
        { status: 400 }
      );
    }

    const existing = await Instructor.findOne({ email });
    if (existing) {
      return new Response(
        JSON.stringify({ message: "Instructor already exists." }),
        { status: 400 }
      );
    }

    // Create instructor from temp userData
    const instructor = await Instructor.create(record.userData);

    // Delete OTP record after successful verification
    await OtpVerification.deleteOne({ email });

    return new Response(
      JSON.stringify({ message: "Instructor account verified and created successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ verify-otp-instructor error:", error);
    return new Response(
      JSON.stringify({ message: "Server error during verification." }),
      { status: 500 }
    );
  }
}
