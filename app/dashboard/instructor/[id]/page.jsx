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
      const res = await fetch(`/api/course/${id}`);
      const data = await res.json();
      setCourse(data.course || data);
    };
    fetchCourse();
  }, [id]);

  const handleAddModule = async () => {
    const res = await fetch(`/api/course/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ module: newModule }),
    });

    const data = await res.json();

    if (res.ok) {
      setCourse(data.updatedCourse);
      setNewModule({ title: "", content: "", youtubeUrl: "", order: "" });
    } else {
      alert(data.error || "Failed to add module");
    }
  };

  if (!course)
    return (
      <p className="text-center mt-10 text-gray-500 text-base sm:text-lg">
        Loading...
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-teal-400 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {course.title}
        </h1>
        <p className="text-gray-700 text-sm sm:text-base">
          {course.description}
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
          Modules
        </h2>
        {course.modules?.length > 0 ? (
          <ul className="space-y-4">
            {course.modules.map((mod, index) => (
              <li
                key={mod._id || index}
                className="p-4 bg-white rounded-xl shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {mod.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1">{mod.content}</p>
                {mod.youtubeUrl && (
                  <a
                    href={mod.youtubeUrl}
                    className="text-blue-600 text-sm underline mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-sm">No modules added yet.</p>
        )}
      </section>

      <section className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
        <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
          Add New Module
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newModule.title}
            onChange={(e) =>
              setNewModule({ ...newModule, title: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Content"
            value={newModule.content}
            onChange={(e) =>
              setNewModule({ ...newModule, content: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-24 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="YouTube URL"
            value={newModule.youtubeUrl}
            onChange={(e) =>
              setNewModule({ ...newModule, youtubeUrl: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Order"
            value={newModule.order}
            onChange={(e) =>
              setNewModule({ ...newModule, order: parseInt(e.target.value) })
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddModule}
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Add Module
          </button>
        </div>
      </section>
    </div>
  );
}
