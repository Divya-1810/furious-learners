// app\utils\email.js

import nodemailer from "nodemailer";

export async function sendVerificationEmail(email, otp) {
  // Create a transporter using your email provider
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can switch to SendGrid, Mailgun, etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Furious Learners" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP for Email Verification",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Email Verification</h2>
        <p>Your OTP code is:</p>
        <h3 style="background: #f0f0f0; padding: 10px; display: inline-block;">${otp}</h3>
        <p>This OTP will expire in 10 minutes.</p>
        <br />
        <p>If you did not request this, please ignore this email.</p>
        <hr />
        <p>Thanks,<br/>The YourApp Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to ${email}`);
  } catch (error) {
    console.error("Failed to send verification email:", error);
    throw new Error("Email sending failed");
  }
}

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}