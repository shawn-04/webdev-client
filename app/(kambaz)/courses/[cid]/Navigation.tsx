"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const LINKS = [
  { segment: "home", id: "wd-course-home-link", label: "Home" },
  { segment: "modules", id: "wd-course-modules-link", label: "Modules" },
  { segment: "piazza", id: "wd-course-piazza-link", label: "Piazza" },
  { segment: "zoom", id: "wd-course-zoom-link", label: "Zoom" },
  { segment: "assignments", id: "wd-course-assignments-link", label: "Assignments" },
  { segment: "quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
  { segment: "grades", id: "wd-course-grades-link", label: "Grades" },
  { segment: "people/table", id: "wd-course-people-link", label: "People" },
  { segment: "announcements", id: "wd-course-announcements-link", label: "Announcements" },
];

export default function CourseNavigation() {
  const { cid } = useParams<{ cid: string }>();
  const pathname = usePathname();
  return (
    <div id="wd-courses-navigation" className="flex flex-col">
      {LINKS.map((link) => {
        const section = link.segment.split("/")[0];
        const active = pathname.startsWith(`/courses/${cid}/${section}`);
        return (
          <Link
            key={link.id}
            id={link.id}
            href={`/courses/${cid}/${link.segment}`}
            aria-current={active ? "page" : undefined}
            className={`no-underline px-3 py-2 border-l-4 ${
              active ? "border-black text-black font-semibold" : "border-transparent text-red-600"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
