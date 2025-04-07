"use client";

import React, { useEffect, useState } from "react";
import BtnSginOut from "../components/BtnSginOut";
import UserEnrolledCourses from "../components/UserCourseCard";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  const fetchCourses = async (userId) => {
    try {
      const res = await fetch(`/api/user/enrolled-course?id=${userId}`);
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

  if (status === "loading") return <p className="p-4">Loading session...</p>;
  if (loadingCourses) return <p className="p-4">Fetching your courses...</p>;

  return (
    <div className="p-4 flex gap-5 h-full">
      <div className="flex flex-col w-[23vw] gap-5 py-6 px-2 rounded bg-teal-200 h-[80vh]">
        <BtnSginOut />
      </div>

      <div className="bg-blue-100 w-full h-[80vh] rounded p-4 overflow-y-scroll grid grid-cols-4 gap-4">
        {courses.length === 0 ? (
          <p className="text-gray-600 col-span-2 text-center">
            You're not enrolled in any courses yet.
          </p>
        ) : (
          courses.map((course) => (
            <UserEnrolledCourses
              key={course._id}
              _id={course._id}
              title={course.title}
              description={course.description}
              modules={course.modules}
            />
          ))
        )}
      </div>
    </div>
  );
}
