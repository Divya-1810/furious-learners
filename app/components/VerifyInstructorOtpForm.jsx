"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyInstructorOtpForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const emailFromURL = searchParams.get("email");
    if (emailFromURL) setEmail(emailFromURL);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    setMessage("");

    console.log("📤 Submitting OTP:", { email, otp });

    try {
      const res = await fetch("/api/auth/verify-otp-instructor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Verification failed");
      } else {
        setMessage(data.message || "Email verified! Redirecting to login...");
        setTimeout(() => router.push("/auth/signin"), 2000);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-16 bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
         Verify Instructor Email
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-600"
            value={email}
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={otp}
            onChange={(e) => setOtp(e.target.value.trim())}
            maxLength={6}
            required
            placeholder="Enter 6-digit code"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-xl font-medium hover:bg-teal-700 transition-all duration-300"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      {message && (
        <p className="mt-6 text-teal-600 text-center font-medium">{message}</p>
      )}
      {error && (
        <p className="mt-6 text-red-600 text-center font-medium">{error}</p>
      )}
    </div>
  );
}
