import Link from "next/link";

export default function CourseNavigation({ cid }: { cid: string }) {
  const base = `/courses/${cid}`;
  return (
    <div id="wd-courses-navigation">
      <Link href={`${base}/home`} id="wd-course-home-link">Home</Link>
      <br />
      <Link href={`${base}/modules`} id="wd-course-modules-link">Modules</Link>
      <br />
      <Link href={`${base}/piazza`} id="wd-course-piazza-link">Piazza</Link>
      <br />
      <Link href={`${base}/zoom`} id="wd-course-zoom-link">Zoom</Link>
      <br />
      <Link href={`${base}/assignments`} id="wd-course-assignments-link">
        Assignments
      </Link>
      <br />
      <Link href={`${base}/quizzes`} id="wd-course-quizzes-link">Quizzes</Link>
      <br />
      <Link href={`${base}/grades`} id="wd-course-grades-link">Grades</Link>
      <br />
      <Link href={`${base}/people`} id="wd-course-people-link">People</Link>
    </div>
  );
}
