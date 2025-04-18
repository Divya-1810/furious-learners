// app/api/auth/signup-instructor/route.js

import connectDB from 'app/utils/db';
import OtpVerification from 'app/models/OtpVerification';
import Instructor from 'app/models/Instructor';
import { generateOTP } from 'app/utils/otpStore';
import { sendVerificationEmail } from 'app/utils/email';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { email, name, password, gender, educationDetails, shortBio } = body;

    if (!email || !name || !password || !gender || !educationDetails || !shortBio) {
      return new Response(JSON.stringify({ message: "All fields are required." }), { status: 400 });
    }

    const existing = await Instructor.findOne({ email });
    if (existing) {
      return new Response(
        JSON.stringify({ message: "Instructor already exists" }),
        { status: 400 }
      );
    }

    // 🔐 Hash password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const generatedOtp = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await OtpVerification.findOneAndUpdate(
      { email },
      {
        email,
        otp: generatedOtp,
        expiresAt,
        userData: {
          name,
          email,
          password: hashedPassword,
          gender,
          educationDetails,
          shortBio,
          role: 'instructor',
        },
      },
      { upsert: true, new: true }
    );

    await sendVerificationEmail(email, generatedOtp);

    console.log("✅ OTP sent to", email);

    return new Response(
      JSON.stringify({ message: "Verification email sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ signup-instructor error:", error);
    return new Response(
      JSON.stringify({ message: "Signup failed" }),
      { status: 500 }
    );
  }
}
