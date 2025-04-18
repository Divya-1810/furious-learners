// app/api/auth/verify-otp/route.js

import connectDB from "@/app/utils/db";
import OtpVerification from "@/app/models/OtpVerification";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    console.time("verify-otp");
    await connectDB();
    console.timeLog("verify-otp", "✅ Connected to DB");

    const body = await req.json();
    const { email, otp } = body;

    if (!email || !otp) {
      return new Response(JSON.stringify({ message: "Email and OTP are required" }), {
        status: 400,
      });
    }

    const otpRecord = await OtpVerification.findOne({ email });
    console.timeLog("verify-otp", "🔍 Fetched OTP record");

    if (
      !otpRecord ||
      otpRecord.otp !== otp ||
      !otpRecord.expiresAt ||
      new Date() > new Date(otpRecord.expiresAt)
    ) {
      return new Response(JSON.stringify({ message: "Invalid or expired OTP" }), {
        status: 400,
      });
    }

    // Check if user already exists (safety check)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      await OtpVerification.deleteOne({ email });
      return new Response(JSON.stringify({ message: "User already verified" }), {
        status: 200,
      });
    }

    // ✅ Hash the password before saving
    const hashedPassword = await bcrypt.hash(otpRecord.userData.password, 10);
    const userDataToSave = {
      ...otpRecord.userData,
      password: hashedPassword,
    };

    const newUser = new User(userDataToSave);
    await newUser.save();
    console.timeLog("verify-otp", "💾 User saved");

    // Delete the OTP record after success
    await OtpVerification.deleteOne({ email });
    console.timeLog("verify-otp", "🗑️ OTP record deleted");

    console.timeEnd("verify-otp");

    return new Response(JSON.stringify({ message: "Email verified and account created" }), {
      status: 200,
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    return new Response(JSON.stringify({ message: "Verification failed" }), {
      status: 500,
    });
  }
}
