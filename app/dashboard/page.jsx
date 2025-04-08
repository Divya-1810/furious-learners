"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import BtnSginOut from "../components/BtnSginOut";
import { useSession } from "next-auth/react";

const UserEnrolledCourses = dynamic(
  () => import("../components/UserCourseCard"),
  {
    loading: () => (
      <div className="p-4 bg-white rounded-lg border shadow animate-pulse h-40">
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
      <section className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-gray-700"></div>
        <p className="mt-4 text-gray-500 text-base">
          Loading your dashboard...
        </p>
      </section>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-[30%]">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Welcome 👋
          </h2>
          <BtnSginOut />
        </div>
      </aside>
      <section className="w-full md:w-[70%]">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800 mb-6">
            My Courses
          </h1>

          {courses.length === 0 ? (
            <div className="text-center text-gray-500 text-base mt-8">
              <p>No courses enrolled yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
