"use client";
import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useAccountContext } from "../../account/AccountContext";
import { useEnrollmentsStore } from "../../store/enrollmentsStore";

export default function CoursesLayout({ children }: Readonly<{ children: ReactNode }>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [showCourseNav, setShowCourseNav] = useState(true);
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const router = useRouter();

  const enrolled =
    !currentUser || enrollments.some((e) => e.user === currentUser._id && e.course === courseId);

  useEffect(() => {
    if (!enrolled) router.push("/dashboard");
  }, [enrolled, router]);

  if (!enrolled) return null;

  return (
    <div id="wd-courses">
      <h2 className="flex items-center gap-3 text-2xl text-red-600">
        <FaAlignJustify className="cursor-pointer text-xl" title="Toggle course navigation"
          onClick={() => setShowCourseNav(!showCourseNav)} />
        <Breadcrumb />
        <span id="wd-course-id" className="text-base text-gray-500">({courseId})</span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-6">
        {showCourseNav && (
          <div className="hidden w-[180px] shrink-0 md:block">
            <CourseNavigation />
          </div>
        )}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
