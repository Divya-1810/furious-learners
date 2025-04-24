'use client';

import { useState } from 'react';
import FileUpload from './FileUpload';

const CourseModuleForm = ({ module, onUpdate, onDelete }) => {
  const [formData, setFormData] = useState({
    title: module?.title || '',
    content: module?.content || '',
    order: module?.order || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVideoUpload = (file) => {
    onUpdate({
      ...formData,
      videoFile: file
    });
  };

  const handlePdfUpload = (file) => {
    onUpdate({
      ...formData,
      pdfFile: file
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Module Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Order</label>
          <input
            type="number"
            name="order"
            value={formData.order}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <FileUpload
          label="Upload Video"
          accept="video/*"
          maxSize={100}
          onUpload={handleVideoUpload}
        />

        <FileUpload
          label="Upload PDF"
          accept=".pdf"
          maxSize={10}
          onUpload={handlePdfUpload}
        />

        {module?.videoFile && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">Current Video: {module.videoFile.filename}</p>
          </div>
        )}

        {module?.pdfFile && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">Current PDF: {module.pdfFile.filename}</p>
          </div>
        )}

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => onUpdate(formData)}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Save
          </button>
          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseModuleForm; 