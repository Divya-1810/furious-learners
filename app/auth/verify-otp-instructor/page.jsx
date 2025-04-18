// app/auth/verify-otp-instructor/page.jsx

"use client";

import VerifyInstructorOtpForm from "@/app/components/VerifyInstructorOtpForm";

export default function VerifyOtpInstructorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <VerifyInstructorOtpForm />
    </div>
  );
}
