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
      <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mb-4"></div>
        <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white">
          Loading...
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 text-center">
          Your profile is being loaded.
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center text-red-500 mt-6 px-4 sm:px-6">
        <h2 className="text-lg font-bold">User data not found.</h2>
        <p className="text-sm">Please make sure you are logged in properly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        My Profile
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-lg shadow-md p-6">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-700">
            Name:
          </h3>
          <p className="text-sm sm:text-base text-gray-900">{user.name}</p>
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-700">
            Email:
          </h3>
          <p className="text-sm sm:text-base text-gray-900">{user.email}</p>
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-700">
            Date of Birth:
          </h3>
          <p className="text-sm sm:text-base text-gray-900">
            {user.dob || "N/A"}
          </p>
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-700">
            Gender:
          </h3>
          <p className="text-sm sm:text-base text-gray-900">
            {user.gender || "N/A"}
          </p>
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-700">
            Phone Number:
          </h3>
          <p className="text-sm sm:text-base text-gray-900">
            {user.phoneNumber || "N/A"}
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition duration-300 w-full sm:w-auto"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
