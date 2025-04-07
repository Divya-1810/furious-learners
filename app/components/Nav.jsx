"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Nav() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleClick = () => {
    const role = session?.user?.role;
    console.log(role);
    if (role === "student") {
      router.push("/dashboard");
    } else if (role === "instructor") {
      router.push("/dashboard/instructor");
    }
  };
  return (
    <header className="bg-[#b0d0d79c] px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-white font-extrabold text-3xl">FURIOUS LEARNERS</h1>
        <h3 className="text-white text-lg">ONLINE EDUCATION & LEARNING</h3>
      </div>
      <nav>
        <ul className="flex space-x-6 text-lg text-white font-medium ">
          <li className="cursor-pointer hover:text-[#09887D] transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-[#09887D] transition-all">
            <Link href="/course">All Courses</Link>
          </li>
          <li className="cursor-pointer hover:text-[#09887D] transition-all">
            Contact
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-6">
        <div className="flex space-x-3 text-white">
          <FaFacebook className="cursor-pointer hover:text-[#09887D] text-3xl" />
          <FaInstagram className="cursor-pointer hover:text-[#09887D] text-3xl" />
          <FaTwitter className="cursor-pointer hover:text-[#09887D] text-3xl" />
          <BsYoutube className="cursor-pointer hover:text-[#09887D] text-3xl" />
        </div>
        {session ? (
          <button
            className="bg-[#0AA89D] text-white px-6 py-2 rounded-md hover:bg-[#09887D]"
            onClick={handleClick}
          >
            Profile
          </button>
        ) : (
          <Link
            href="/auth/signin"
            className="bg-[#0AA89D] text-white px-6 py-2 rounded-md hover:bg-[#09887D]"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
