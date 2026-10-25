"use client";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  home: "Home",
  modules: "Modules",
  piazza: "Piazza",
  zoom: "Zoom",
  assignments: "Assignments",
  quizzes: "Quizzes",
  grades: "Grades",
  people: "People",
};

export default function Breadcrumb({ course }: { course?: { name: string } }) {
  const pathname = usePathname();
  const section = pathname.split("/")[3] ?? "";
  return (
    <span id="wd-breadcrumb">
      {course?.name ?? "Course not found"}
      {section && <> &gt; {labels[section] ?? section}</>}
    </span>
  );
}
