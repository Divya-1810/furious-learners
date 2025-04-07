"use client";

import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function InstructorDashboard() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const fetchInstructor = async () => {
    if (!session?.user?._id) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`/api/instructor/?id=${session.user._id}`);
      if (!res.ok) throw new Error("Failed to fetch user");
      const result = await res.json();
      setUser(result.data);
    } catch (err) {
      console.error("Error fetching instructor:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCourses = async () => {
    try {
      const res = await fetch("/api/course");
      const data = await res.json();
      if (res.ok) setCourses(data.data);
      else alert("Error: " + data.message);
    } catch (error) {
      alert("Failed to fetch courses: " + error.message);
    }
  };

  useEffect(() => {
    fetchInstructor();
    fetchCourses();
  }, [session]);

  const handleCreateCourse = async () => {
    const { title, description } = formState;
    if (!title || !description || !user?._id) {
      return alert("Please fill all fields.");
    }

    try {
      const res = await fetch("/api/course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          instructor: user._id,
          instructorName: user.name,
          modules: [],
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Course created successfully!");
        setFormState({ title: "", description: "" });
        setShowForm(false);
        fetchCourses();
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const CourseCard = ({ course }) => (
    <div className="bg-white h-auto p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">{course.title}</h2>
      <p className="mb-2 text-sm text-gray-700">{course.description}</p>
      <p className="text-sm text-gray-500">
        Modules: {course.modules?.length || 0}
      </p>
      <Link
        href={`/dashboard/instructor/${course._id}`}
        className="mt-3 inline-block px-3 py-1 bg-teal-600 text-white text-sm rounded"
      >
        View
      </Link>
    </div>
  );

  return (
    <div className="p-4 flex flex-col md:flex-row gap-6 h-full">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-teal-200 p-6 rounded-lg flex flex-col gap-4">
        <h1 className="text-xl font-semibold">My Profile</h1>

        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Name:</span> {user?.name || "Name"}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {user?.email || "Email"}
          </p>
          <p>
            <span className="font-semibold">Gender:</span>{" "}
            {user?.gender || "Gender"}
          </p>
          <p>
            <span className="font-semibold">Education:</span>{" "}
            {user?.educationDetails || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Bio:</span>{" "}
            {user?.shortBio || "N/A"}
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="mt-4 px-4 py-2 rounded bg-teal-700 text-white hover:bg-teal-800 transition"
        >
          + Create New Course
        </button>

        <button
          className="bg-teal-500 rounded py-3 px-4 text-lg font-semibold hover:bg-teal-600 transition"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign out
        </button>
      </div>

      <div className="w-full md:w-2/3 lg:w-3/4 bg-blue-100 rounded-lg p-4 max-h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>

      {showForm && (
        <Modal title="Create New Course" onClose={() => setShowForm(false)}>
          <input
            type="text"
            placeholder="Course Title"
            value={formState.title}
            onChange={(e) =>
              setFormState({ ...formState, title: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <textarea
            placeholder="Course Description"
            value={formState.description}
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded mb-3"
            rows={4}
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowForm(false)}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateCourse}
              className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
            >
              Create
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            className="text-gray-600 hover:text-red-500 text-lg"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
