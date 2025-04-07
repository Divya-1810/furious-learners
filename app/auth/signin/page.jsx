"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

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

    if (res.error) {
      setError(res.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center bg-[#8fddd7] h-[100vh] gap-4 "
    >
      <h1 className="font-bold text-2xl">Signin</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Eamil"
        required
        className="border-2 w-[300px] px-3 py-2 outline-none"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="password"
        className="border-2 w-[300px] px-3 py-2 outline-none"
      />
      {error && <p>{error}</p>}
      <button
        type="submit"
        className="border-2 w-[300px] px-3 py-2 font-semibold"
      >
        Sign In
      </button>
      <p className="font-bold tracking-wider text-xl">
        Create a new account{" "}
        <Link
          href="/auth/signup"
          className="text-blue-400 font-extrabold ml-2  "
        >
          Signup
        </Link>
      </p>
    </form>
  );
}
