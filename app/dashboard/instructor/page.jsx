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
  const [showModuleForm, setShowModuleForm] = useState(false);

  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const [selectedCourseId, setSelectedCourseId] = useState(null);

  useEffect(() => {
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

    fetchInstructor();
  }, [session]);

  // Fetch all courses
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
    fetchCourses();
  }, []);

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
    <div className="bg-white h-[200px] p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">{course.title}</h2>
      <p className="mb-2 text-sm text-gray-700">{course.description}</p>
      <p className="text-sm text-gray-500">
        Modules: {course.modules?.length || 0}
      </p>
      <Link
        href={`/dashboard/instructor/${course._id}`}
        className="mt-3 px-3 py-1 bg-teal-600 text-white text-sm rounded"
      >
        View
      </Link>
    </div>
  );

  return (
    <div className="p-4 flex gap-5 h-full">
      {/* Left Panel */}
      <div className="flex flex-col w-[25vw] gap-5 py-6 px-4 rounded bg-teal-200 h-[80vh]">
        <h1 className="text-xl font-semibold">My Profile</h1>
        <div className="flex gap-3">
          <p className="font-semibold">Name:</p>
          <span className="font-light text-gray-700">
            {user?.name || "Name"}
          </span>
        </div>
        <div className="flex gap-3">
          <p className="font-semibold">Email:</p>
          <span className="font-light text-gray-700">
            {user?.email || "Email"}
          </span>
        </div>
        <div className="flex gap-3">
          <p className="font-semibold">Gender:</p>
          <span className="font-light text-gray-700">
            {user?.gender || "Gender"}
          </span>
        </div>
        <div>
          <p className="font-semibold">Education:</p>
          <span className="font-light text-gray-700">
            {user?.educationDetails || "N/A"}
          </span>
        </div>
        <div>
          <p className="font-semibold">Bio:</p>
          <span className="font-light text-gray-700">
            {user?.shortBio || "N/A"}
          </span>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="mt-4 px-4 py-2 rounded bg-teal-700 text-white hover:bg-teal-800 transition"
        >
          + Create New Course
        </button>

        <button
          className="bg-teal-500 rounded py-4 px-6 mt-6 text-xl font-bold hover:bg-teal-600 transition"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign out
        </button>
      </div>
      <div className="bg-blue-100 w-full h-[80vh] rounded p-4 overflow-y-scroll grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
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
          <ModalActions
            onClose={() => setShowForm(false)}
            onConfirm={handleCreateCourse}
          />
        </Modal>
      )}
    </div>
  );
}

// Reusable Modal Component
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}
