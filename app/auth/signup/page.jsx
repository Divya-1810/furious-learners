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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-[#8fddd7] items-center justify-center h-[100vh] gap-4 "
    >
      <h1 className="font-bold text-2xl">Signup</h1>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
        className="border-2 w-[300px] px-3 py-2"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="border-2 w-[300px] px-3 py-2"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="border-2 w-[300px] px-3 py-2"
      />

      <input
        name="dob"
        type="date"
        onChange={handleChange}
        required
        className="border-2 w-[300px] px-3 py-2"
      />

      <select
        name="gender"
        onChange={handleChange}
        required
        className="border-2 w-[300px] px-3 py-2"
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
        className="border-2 w-[300px] px-3 py-2"
      />

      <button type="submit" className="border-2 w-[300px] px-3 py-2">
        Sign Up
      </button>

      <p className="font-bold tracking-wider text-xl">
        Already have an account?
        <Link href="/auth/signin" className="text-blue-400 font-extrabold ml-2">
          Login
        </Link>
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
}
