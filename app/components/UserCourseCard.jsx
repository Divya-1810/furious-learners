import Link from "next/link";
import React from "react";

export default function UserEnrolledCourses({
  _id,
  title,
  description,
  modules,
}) {
  return (
    <div className="bg-white h-[210px] flex flex-col gap-2 rounded-lg shadow p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Modules:</h3>
        <p className="fot-semilbold">{modules.length}</p>
      </div>
      <Link
        href={`course/${_id}`}
        className="px-3 py-2 text-center font-semibold text-white bg-teal-300 rounded "
      >
        continue
      </Link>
    </div>
  );
}
