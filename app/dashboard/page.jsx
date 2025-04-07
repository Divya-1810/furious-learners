"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import BtnSginOut from "../components/BtnSginOut";
import { useSession } from "next-auth/react";

const UserEnrolledCourses = dynamic(
  () => import("../components/UserCourseCard"),
  {
    loading: () => (
      <div className="p-4 bg-white rounded shadow animate-pulse h-40">
        Loading course...
      </div>
    ),
    ssr: false,
  }
);

export default function Page() {
  const { data: session, status } = useSession();
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  const fetchCourses = async (userId) => {
    try {
      const res = await fetch(`/api/user/enrolled-course?id=${userId}`, {
        cache: "no-store",
      });

      const data = await res.json();
      if (res.ok) {
        setCourses(data.enrolledCourses || []);
      } else {
        console.error("Failed to fetch courses:", data.message);
      }
    } catch (error) {
      console.error("Error fetching courses:", error.message);
    } finally {
      setLoadingCourses(false);
    }
  };

  useEffect(() => {
    if (session?.user?._id) {
      fetchCourses(session.user._id);
    }
  }, [session?.user?._id]);

  if (status === "loading" || loadingCourses) {
    return (
      <section className="flex flex-col items-center justify-center p-6 text-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <p className="mt-4 text-gray-600 text-lg">Loading your dashboard...</p>
      </section>
    );
  }

  return (
    <main className="p-4 container mx-auto flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-[35%] lg:w-[25%]">
        <div className="flex flex-col gap-6 p-4 rounded-xl bg-teal-200 shadow-md h-full">
          <BtnSginOut />
        </div>
      </aside>

      <section className="w-full md:w-[65%] lg:w-[75%]">
        <div className="bg-blue-100 rounded-xl p-4 shadow-md max-h-[80vh] overflow-y-auto">
          {courses.length === 0 ? (
            <p className="text-gray-600 text-center text-lg font-medium">
              You're not enrolled in any courses yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {courses.map((course) => (
                <UserEnrolledCourses
                  key={course._id}
                  _id={course._id}
                  title={course.title}
                  description={course.description}
                  modules={course.modules}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
