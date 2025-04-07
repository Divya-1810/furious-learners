"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function BtnSginOut() {
  const { data: session } = useSession();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        if (!session?.user?._id) {
          console.warn("Session or user ID not available");
          setLoading(false);
          return;
        }
        const res = await fetch(`/api/user/?id=${session.user._id}`);
        if (!res.ok) {
          console.log("Failed to fetch user. Status:", res.status);
          setLoading(false);
          return;
        }

        const result = await res.json();
        setUser(result.data);
        console.log("Fetched user:", result.data);
      } catch (error) {
        console.log("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      getUser();
    } else {
      setLoading(false);
    }
  }, [session]);

  if (loading || !session) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto"></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Your profile is being loaded.
        </p>
      </div>
    );
  }
  if (!user) {
    return (
      <div className="text-center text-red-500 mt-4">
        <h2>User data not found.</h2>
        <p>Please make sure you are logged in properly.</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold tracking-widest font-sans mb-6">
        My Profile
      </h1>

      <div>
        <h3 className="text-xl font-semibold">Name :</h3>
        <p className="text-xl font-light ml-3">{user.name}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Email :</h3>
        <p className="text-xl font-light ml-3">{user.email}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Date of Birth :</h3>
        <p className="text-xl font-light ml-3">{user.dob || "N/A"}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Gender :</h3>
        <p className="text-xl font-light ml-3">{user.gender || "N/A"}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Phone Number :</h3>
        <p className="text-xl font-light ml-3">{user.phoneNumber || "N/A"}</p>
      </div>

      <button
        className="bg-teal-500 rounded py-4 px-6 mt-6 text-xl font-bold hover:bg-teal-600 transition"
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        Sign out
      </button>
    </>
  );
}
