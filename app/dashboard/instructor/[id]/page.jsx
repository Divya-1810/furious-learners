"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function CoursePage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [newModule, setNewModule] = useState({
    title: "",
    content: "",
<<<<<<< HEAD
    youtubeUrl: "",
    order: "",
  });
=======
    order: "",
  });
  const [editingModule, setEditingModule] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
>>>>>>> 5fe4666 (Update project)

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
<<<<<<< HEAD
      const res = await fetch(`/api/course/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newModule), // ✅ Fix: send directly as newModule
=======
      const formData = new FormData();
      formData.append('title', newModule.title);
      formData.append('content', newModule.content);
      formData.append('order', newModule.order);
      if (videoFile) formData.append('videoFile', videoFile);
      if (pdfFile) formData.append('pdfFile', pdfFile);

      const res = await fetch(`/api/course/${id}`, {
        method: "PATCH",
        body: formData,
>>>>>>> 5fe4666 (Update project)
      });

      const data = await res.json();

      if (res.ok) {
<<<<<<< HEAD
        setCourse(data.course);
        setNewModule({
          title: "",
          content: "",
          youtubeUrl: "",
          order: "",
        });
=======
        setCourse(data);
        setNewModule({
          title: "",
          content: "",
          order: "",
        });
        setVideoFile(null);
        setPdfFile(null);
>>>>>>> 5fe4666 (Update project)
      } else {
        alert(data.error || "Failed to add module");
      }
    } catch (err) {
      console.error("Error adding module:", err);
      alert("Something went wrong");
    }
  };

<<<<<<< HEAD
=======
  const handleEditModule = async (moduleId) => {
    try {
      const formData = new FormData();
      formData.append('moduleId', moduleId);
      formData.append('title', editingModule.title);
      formData.append('content', editingModule.content);
      formData.append('order', editingModule.order);
      if (videoFile) formData.append('videoFile', videoFile);
      if (pdfFile) formData.append('pdfFile', pdfFile);

      const res = await fetch(`/api/course/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setCourse(data);
        setEditingModule(null);
        setVideoFile(null);
        setPdfFile(null);
      } else {
        alert(data.error || "Failed to update module");
      }
    } catch (err) {
      console.error("Error updating module:", err);
      alert("Something went wrong");
    }
  };

  const handleDeleteModule = async (moduleId) => {
    if (!confirm("Are you sure you want to delete this module?")) return;

    try {
      const res = await fetch(`/api/course/${id}?moduleId=${moduleId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        setCourse(data);
      } else {
        alert(data.error || "Failed to delete module");
      }
    } catch (err) {
      console.error("Error deleting module:", err);
      alert("Something went wrong");
    }
  };

>>>>>>> 5fe4666 (Update project)
  if (!course)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl h-full bg-teal-400 mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-6">{course.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Modules</h2>
      <ul className="space-y-4 mb-8">
<<<<<<< HEAD
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
=======
        {course.modules?.map((mod) => (
          <li
            key={mod._id}
            className="p-4 border rounded-lg bg-white shadow-sm"
          >
            {editingModule?._id === mod._id ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editingModule.title}
                  onChange={(e) => setEditingModule({ ...editingModule, title: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Module Title"
                />
                <textarea
                  value={editingModule.content}
                  onChange={(e) => setEditingModule({ ...editingModule, content: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Module Content"
                  rows={3}
                />
                <input
                  type="number"
                  value={editingModule.order}
                  onChange={(e) => setEditingModule({ ...editingModule, order: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="Order"
                />
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Video File
                  </label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideoFile(e.target.files[0])}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    PDF File (Optional)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setPdfFile(e.target.files[0])}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setEditingModule(null)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleEditModule(mod._id)}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{mod.title}</h3>
                    <p className="text-sm text-gray-700">{mod.content}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setEditingModule(mod);
                        setVideoFile(null);
                        setPdfFile(null);
                      }}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteModule(mod._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {mod.videoFile?.url && (
                  <div className="mt-2">
                    <video 
                      controls 
                      className="w-full max-w-md"
                      onError={(e) => {
                        console.error('Video failed to load:', e);
                        e.target.innerHTML = 'Error loading video';
                      }}
                    >
                      <source src={mod.videoFile.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                {mod.pdfFile?.url && (
                  <div className="mt-2">
                    <a
                      href={mod.pdfFile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm underline inline-block"
                      onClick={(e) => {
                        // Verify PDF URL is accessible
                        fetch(mod.pdfFile.url, { method: 'HEAD' })
                          .catch(() => {
                            e.preventDefault();
                            alert('PDF file is not accessible');
                          });
                      }}
                    >
                      View PDF
                    </a>
                  </div>
                )}
              </>
>>>>>>> 5fe4666 (Update project)
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
<<<<<<< HEAD
        <input
          type="text"
          placeholder="YouTube URL"
          value={newModule.youtubeUrl}
          onChange={(e) =>
            setNewModule({ ...newModule, youtubeUrl: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
=======
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Video File
          </label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            PDF File (Optional)
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setPdfFile(e.target.files[0])}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
>>>>>>> 5fe4666 (Update project)
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
