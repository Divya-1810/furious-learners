"use client";

import Nav from "@/app/components/Nav";
import Footer from "@/app/components/footer";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export default function CourseContentPage() {
  const { data: session } = useSession();
  const { id } = useParams();
  const router = useRouter();

  const [course, setCourse] = useState(null);
  const [instructorEmail, setInstructorEmail] = useState("");
  const [currentModule, setCurrentModule] = useState(null);
  const [error, setError] = useState(null);
  const [downloading, setDownloading] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [mailStatus, setMailStatus] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/course/${id}`);
        const data = await res.json();
        const fetchedCourse = data.course;
        setCourse(fetchedCourse);
        setCurrentModule(fetchedCourse.modules?.[0] || null);
      } catch (err) {
        setError("Something went wrong while fetching course.");
      }
    };
    fetchCourse();
  }, [id]);

  useEffect(() => {
    const fetchInstructor = async () => {
      if (!course?.instructor) return;

      try {
        const res = await fetch(`/api/instructor/?id=${course.instructor}`);
        const result = await res.json();
        setInstructorEmail(result.data.email);
      } catch (err) {
        console.error("Instructor fetch error:", err);
      }
    };
    fetchInstructor();
  }, [course]);

  const handleSendMail = async () => {
    setSending(true);
    setMailStatus("");

    const payload = {
      instructorEmail,
      courseTitle: course?.title,
      studentEmail: session?.user?.email,
      message,
    };

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setMailStatus(data.message);
      setSending(false);
      setMessage("");
      setShowForm(false);
    } catch (err) {
      setMailStatus("Failed to send message.");
      setSending(false);
    }
  };

  const generateCertificate = async () => {
    setDownloading(true);
    try {
      const existingPdfBytes = await fetch("/LMS.pdf").then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const { height } = firstPage.getSize();

      firstPage.drawText(session?.user?.name || "Student", {
        x: 360,
        y: height - 310,
        size: 35,
        font,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(course?.title || "Course Title", {
        x: 360,
        y: height - 362.5,
        size: 16,
        font,
        color: rgb(0.2, 0.2, 0.2),
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${session?.user?.name}_certificate.pdf`;
      a.click();
    } catch (error) {
      console.error("PDF generation error:", error);
    }
    setDownloading(false);
  };

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-lg">
        {error}
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg">
        Loading course...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50 to-white text-gray-800">
      <Nav />

      <main className="flex flex-col lg:flex-row gap-6 px-4 py-8 sm:px-6 lg:px-12">
        {/* Main Content */}
        <section className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">{course.title}</h1>
          <h2 className="text-lg text-gray-600 font-medium">
            Module: {currentModule?.title}
          </h2>

          {currentModule?.videoFile?.url && (
            <div className="w-full aspect-video rounded-xl shadow-lg overflow-hidden">
              <video
                className="w-full h-full"
                controls
                src={currentModule.videoFile.url}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {currentModule?.pdfFile?.url && (
            <div className="mt-4">
              <a 
                href={currentModule.pdfFile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
              >
                View PDF Material
              </a>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="prose max-w-none">
              {currentModule?.content}
            </div>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="mt-4 w-fit px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Send Mail to Instructor
          </button>

          {mailStatus && (
            <p className="text-sm mt-2 text-blue-600 font-medium">
              {mailStatus}
            </p>
          )}
        </section>

        {/* Module List */}
        <section className="w-full lg:w-80 bg-white rounded-xl shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Course Modules</h3>
          <div className="space-y-2">
            {course.modules?.map((module, index) => (
              <button
                key={index}
                onClick={() => setCurrentModule(module)}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  currentModule === module
                    ? "bg-teal-100 text-teal-800"
                    : "hover:bg-gray-100"
                }`}
              >
                {module.title}
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
