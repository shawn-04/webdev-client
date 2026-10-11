import Link from "next/link";
import "../../kambaz.css";

const linkBase =
  "block border-l-4 px-3 py-2 text-base no-underline hover:bg-gray-100";
const active = `${linkBase} border-black text-black`;
const inactive = `${linkBase} border-transparent text-red-600`;

export default function CourseNavigation({ cid }: { cid: string }) {
  const base = `/courses/${cid}`;
  return (
    <div id="wd-courses-navigation" className="me-4">
      <Link href={`${base}/home`} id="wd-course-home-link" className={active}>
        Home
      </Link>
      <Link href={`${base}/modules`} id="wd-course-modules-link" className={inactive}>
        Modules
      </Link>
      <Link href={`${base}/piazza`} id="wd-course-piazza-link" className={inactive}>
        Piazza
      </Link>
      <Link href={`${base}/zoom`} id="wd-course-zoom-link" className={inactive}>
        Zoom
      </Link>
      <Link
        href={`${base}/assignments`}
        id="wd-course-assignments-link"
        className={inactive}
      >
        Assignments
      </Link>
      <Link href={`${base}/quizzes`} id="wd-course-quizzes-link" className={inactive}>
        Quizzes
      </Link>
      <Link href={`${base}/grades`} id="wd-course-grades-link" className={inactive}>
        Grades
      </Link>
      <Link href={`${base}/people`} id="wd-course-people-link" className={inactive}>
        People
      </Link>
    </div>
  );
}