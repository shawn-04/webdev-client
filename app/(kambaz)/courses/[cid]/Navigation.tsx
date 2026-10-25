"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const links = [
  { label: "Home", path: "home" },
  { label: "Modules", path: "modules" },
  { label: "Piazza", path: "piazza" },
  { label: "Zoom", path: "zoom" },
  { label: "Assignments", path: "assignments" },
  { label: "Quizzes", path: "quizzes" },
  { label: "Grades", path: "grades" },
  { label: "People", path: "people/table" },
];

export default function CourseNavigation() {
  const { cid } = useParams<{ cid: string }>();
  const pathname = usePathname();
  return (
    <div id="wd-courses-navigation" className="flex flex-col">
      {links.map((link) => {
        const section = link.path.split("/")[0];
        const active = pathname.startsWith(`/courses/${cid}/${section}`);
        return (
          <Link
            key={link.path}
            id={`wd-course-${section}-link`}
            href={`/courses/${cid}/${link.path}`}
            aria-current={active ? "page" : undefined}
            className={`px-3 py-2 border-l-4 ${
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
