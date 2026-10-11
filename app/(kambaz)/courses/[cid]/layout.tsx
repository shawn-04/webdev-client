import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2 className="m-0 flex items-center text-2xl font-normal text-red-600">
        <FaAlignJustify className="me-4 text-xl" />
        Course {cid}
      </h2>
      <hr className="my-3 border-gray-300" />
      <div className="flex">
        <div className="hidden w-[200px] shrink-0 md:block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}