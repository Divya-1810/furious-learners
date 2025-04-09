"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function CoursePage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [newModule, setNewModule] = useState({
    title: "",
    content: "",
    youtubeUrl: "",
    order: "",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/course/${id}`);
        const data = await res.json();
        setCourse(data.course || data);
      } catch (err) {
        console.error("Failed to fetch course:", err);
      }
    };

    fetchCourse();
  }, [id]);

  const handleAddModule = async () => {
    try {
      const res = await fetch(`/api/course/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newModule), // ✅ Fix: send directly as newModule
      });

      const data = await res.json();

      if (res.ok) {
        setCourse(data.course);
        setNewModule({
          title: "",
          content: "",
          youtubeUrl: "",
          order: "",
        });
      } else {
        alert(data.error || "Failed to add module");
      }
    } catch (err) {
      console.error("Error adding module:", err);
      alert("Something went wrong");
    }
  };

  if (!course)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl h-full bg-teal-400 mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-6">{course.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Modules</h2>
      <ul className="space-y-4 mb-8">
        {course.modules?.map((mod, index) => (
          <li
            key={mod._id || index}
            className="p-4 border rounded-lg bg-white shadow-sm"
          >
            <h3 className="text-lg font-semibold">{mod.title}</h3>
            <p className="text-sm text-gray-700">{mod.content}</p>
            {mod.youtubeUrl && (
              <a
                href={mod.youtubeUrl}
                className="text-blue-500 text-sm underline mt-1 inline-block"
                target="_blank"
              >
                Watch Video
              </a>
            )}
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-4">Add New Module</h3>
      <div className="space-y-4 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Title"
          value={newModule.title}
          onChange={(e) =>
            setNewModule({ ...newModule, title: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Content"
          value={newModule.content}
          onChange={(e) =>
            setNewModule({ ...newModule, content: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="YouTube URL"
          value={newModule.youtubeUrl}
          onChange={(e) =>
            setNewModule({ ...newModule, youtubeUrl: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Order"
          value={newModule.order}
          onChange={(e) =>
            setNewModule({
              ...newModule,
              order: parseInt(e.target.value, 10),
            })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddModule}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Module
        </button>
      </div>
    </div>
  );
}
