"use client";

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import CourseCard from "../components/CourseCard";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Footer from "../components/footer";

export default function Page() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/course");
        const data = await res.json();
        console.log("Courses data:", data.data);
        setCourses(data.data || []);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const enrollCourse = async (courseId) => {
    if (!session) {
      alert("Please login to enroll in a course.");
      router.push("/login");
      return;
    }

    const userId = session.user._id;

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, courseId }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Enrolled successfully!");
      } else {
        alert(data.message || "Failed to enroll.");
      }
    } catch (error) {
      console.error("Enroll error:", error);
      alert("Something went wrong while enrolling.");
    }
  };

  return (
    <div className="course bg-bg-primary overflow-y-scroll min-h-screen">
      <Nav />
      <div className="flex flex-col items-center justify-center mt-40 w-full text-white px-6 py-[10rem] gap-5">
        <h1 className="text-5xl md:text-7xl font-bold uppercase text-center">
          Explore the Course
        </h1>
      </div>

      <div className="bg-gray-200 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 px-6">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              key={course._id}
              _id={course._id}
              name={course.title}
              author={course.instructorName}
              price={course.price}
              handlerFunction={() => enrollCourse(course._id)} // ✅ FIXED!
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No courses available
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
