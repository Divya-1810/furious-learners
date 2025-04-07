// app/components/CourseCategories.tsx
import {
  BookOpen,
  Paintbrush,
  Cpu,
  History,
  Laptop,
  BarChart,
  Dumbbell,
  Megaphone,
  PenTool,
  Music2,
  Briefcase,
  Code,
} from "lucide-react";

const courses = [
  {
    title: "UI/UX Design Courses",
    count: 25,
    icon: <BookOpen className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Art & Design",
    count: 25,
    icon: <Paintbrush className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Computer Science",
    count: 10,
    icon: <Cpu className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "History & Archeologic",
    count: 15,
    icon: <History className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Software Engineering",
    count: 30,
    icon: <Laptop className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Information Software",
    count: 60,
    icon: <BarChart className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Health & Fitness",
    count: 10,
    icon: <Dumbbell className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Marketing",
    count: 30,
    icon: <Megaphone className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Graphic Design",
    count: 80,
    icon: <PenTool className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Music",
    count: 120,
    icon: <Music2 className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Business Administration",
    count: 17,
    icon: <Briefcase className="w-12 h-12 text-teal-500" />,
  },
  {
    title: "Web Management",
    count: 17,
    icon: <Code className="w-12 h-12 text-teal-500" />,
  },
];

export default function CourseCategories() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h3 className="text-teal-500 font-semibold uppercase">Courses</h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Browse Our Online Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-6 rounded-lg border hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex justify-center mb-4">{course.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <span className="text-sm text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block">
              {course.count} Courses
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
