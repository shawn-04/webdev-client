"use client";
import { useParams, usePathname } from "next/navigation";
import { useCoursesStore } from "../../store/coursesStore";

const labels: Record<string, string> = {
  home: "Home", modules: "Modules", piazza: "Piazza", zoom: "Zoom", assignments: "Assignments",
  quizzes: "Quizzes", grades: "Grades", people: "People", announcements: "Announcements",
};

export default function Breadcrumb() {
  const { cid } = useParams<{ cid: string }>();
  const pathname = usePathname();
  const course = useCoursesStore((state) => state.courses.find((c) => c._id === cid));
  const section = pathname.split("/")[3] ?? "";
  return (
    <span id="wd-breadcrumb">
      {course?.name ?? "Course not found"}
      {section && <> &gt; {labels[section] ?? section}</>}
    </span>
  );
}
