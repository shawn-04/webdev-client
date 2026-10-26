import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../database";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";

export default async function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const course = courses.find((c) => c._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-red-600 text-2xl flex items-center gap-3">
        <FaAlignJustify className="text-xl" />
        <Breadcrumb course={course} />
        <span id="wd-course-id" className="text-base text-gray-500">
          ({course?._id})
        </span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-6">
        <div className="hidden md:block w-[180px] shrink-0">
          <CourseNavigation />
        </div>
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}
