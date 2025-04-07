"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    dob: "",
    gender: "",
    phoneNumber: "",
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

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
    } else {
      setSuccess("Registered successfully! Redirecting to login...");
      setTimeout(() => router.push("/"), 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#8fddd7] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">Signup</h1>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md w-full px-3 py-2"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md w-full px-3 py-2"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md w-full px-3 py-2"
        />

        <input
          name="dob"
          type="date"
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md w-full px-3 py-2"
        />

        <select
          name="gender"
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md w-full px-3 py-2"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          name="phoneNumber"
          type="tel"
          pattern="[0-9]{10}"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md w-full px-3 py-2"
        />

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md w-full py-2 transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-sm">
          Already have an account?
          <Link href="/auth/signin" className="text-blue-600 font-bold ml-1">
            Login
          </Link>
        </p>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && (
          <p className="text-green-600 text-sm text-center">{success}</p>
        )}
      </form>
    </div>
  );
}
