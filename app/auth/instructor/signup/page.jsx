"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InstructorSignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    educationDetails: "",
    shortBio: "",
    role: "instructor",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/signup-instructor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong.");
      } else {
        setSuccess("OTP sent! Redirecting to verify...");
        setTimeout(() => {
          router.push(`/auth/verify-otp-instructor?email=${encodeURIComponent(form.email)}`);
        }, 1000);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e2f5f2] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Instructor Signup
        </h1>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="border rounded-md w-full px-3 py-2"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="border rounded-md w-full px-3 py-2"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="border rounded-md w-full px-3 py-2"
        />

        <select
          name="gender"
          onChange={handleChange}
          required
          className="border rounded-md w-full px-3 py-2"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <textarea
          name="educationDetails"
          placeholder="Education Details"
          onChange={handleChange}
          required
          className="border rounded-md w-full px-3 py-2"
          maxLength="200"
        />

        <textarea
          name="shortBio"
          placeholder="Short Bio"
          onChange={handleChange}
          required
          className="border rounded-md w-full px-3 py-2"
          maxLength="300"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold rounded-md w-full py-2 hover:bg-blue-700 transition duration-300"
        >
          Sign Up as Instructor
        </button>

        {error && <p className="text-red-600 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}
      </form>
    </div>
  );
}
