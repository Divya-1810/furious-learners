"use client";
// hi
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
// dfyghujikoszfdxcgijokl;
// hgefsg
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
// jhdjhghdghgdhgchdvgvuygdhchgfsaidygciusdvkasvducgd
    if (res.error) {
      setError(res.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#8fddd7] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Sign In
        </h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border border-gray-300 rounded-md w-full px-3 py-2"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          className="border border-gray-300 rounded-md w-full px-3 py-2"
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md w-full py-2 transition duration-300"
        >
          Sign In
        </button>

        <p className="text-sm text-center text-gray-700">
          Don't have an account?
          <Link href="/auth/signup" className="text-blue-600 font-bold ml-1">
            Signup
          </Link>
        </p>
        <p className="text-sm text-center text-gray-700">
          <Link
            href="/auth/instructor/signup"
            className="text-blue-600 font-bold ml-1"
          >
            Create Instructor account
          </Link>
        </p>
      </form>
    </div>
  );
}
