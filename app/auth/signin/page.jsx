"use client";

import { signIn, getSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
    } else {
      const session = await getSession();
      const role = session?.user?.role;

      // Redirect to appropriate dashboard
      if (role === "instructor") {
        router.push("/dashboard/instructor");
      } else {
        router.push("/dashboard");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#8fddd7] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
<<<<<<< HEAD
=======
        suppressHydrationWarning
>>>>>>> 5fe4666 (Update project)
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
<<<<<<< HEAD
=======
          suppressHydrationWarning
>>>>>>> 5fe4666 (Update project)
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          className="border border-gray-300 rounded-md w-full px-3 py-2"
<<<<<<< HEAD
=======
          suppressHydrationWarning
>>>>>>> 5fe4666 (Update project)
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md w-full py-2 transition duration-300"
<<<<<<< HEAD
=======
          suppressHydrationWarning
>>>>>>> 5fe4666 (Update project)
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
