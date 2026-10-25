import Link from "next/link";
import { courses } from "../database";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-semibold">Dashboard</h1>
      <hr className="my-3" />
      <h2 id="wd-dashboard-published" className="text-xl mb-3">
        Published Courses ({courses.length})
      </h2>
      <hr className="mb-4" />
      <div id="wd-dashboard-courses" className="grid gap-6 grid-cols-[repeat(auto-fill,260px)]">
        {courses.map((course) => (
          <div key={course._id} className="wd-dashboard-course border rounded overflow-hidden w-[260px]">
            <Link href={`/courses/${course._id}/home`} className="block text-inherit no-underline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={course.image} alt={course.name} width="100%" className="w-full h-[160px] object-cover bg-gray-200" />
              <div className="p-3">
                <h5 className="font-semibold truncate">{course.name}</h5>
                <p className="text-sm text-gray-600 h-[60px] overflow-hidden">{course.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm">Go</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
