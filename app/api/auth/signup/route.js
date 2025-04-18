// app/api/auth/signup/route.js

import { generateOTP, sendVerificationEmail } from "@/app/utils/email"; // ✅ Correct

// Assumes you have an OTP utility
import connectDB from "@/app/utils/db";
import OtpVerification from "@/app/models/OtpVerification";


export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, password, role, dob, gender, phoneNumber } = body;

    if (!email || !password || !name || !role || !dob || !gender || !phoneNumber) {
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
      });
    }

    const existingOtpDoc = await OtpVerification.findOne({ email });

    const otp = generateOTP(); // E.g., 6-digit random code

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    const userData = { name, email, password, role, dob, gender, phoneNumber };

    if (existingOtpDoc) {
      existingOtpDoc.otp = otp;
      existingOtpDoc.expiresAt = expiresAt;
      existingOtpDoc.userData = userData;
      await existingOtpDoc.save();
    } else {
      await OtpVerification.create({
        email,
        otp,
        expiresAt,
        userData,
      });
    }

    await sendVerificationEmail(email, otp); // Your email sending logic

    return new Response(JSON.stringify({ message: "OTP sent to your email" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Signup OTP error:", err);
    return new Response(JSON.stringify({ message: "Signup failed" }), {
      status: 500,
    });
  }
}
