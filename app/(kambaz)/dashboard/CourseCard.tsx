import Link from "next/link";
import { useCoursesStore, type Course } from "../store/coursesStore";

export default function CourseCard({
  course,
  onEdit,
  enrolled,
  onToggleEnroll,
}: {
  course: Course;
  onEdit: () => void;
  enrolled?: boolean;
  onToggleEnroll?: () => void;
}) {
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  return (
    <div className="wd-dashboard-course w-[260px] overflow-hidden rounded border">
      <Link href={`/courses/${course._id}/home`} className="wd-dashboard-course-link block text-inherit no-underline">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={course.image} alt={course.name} className="h-[160px] w-full bg-gray-200 object-cover" />
        <div className="p-3">
          <h5 className="wd-dashboard-course-title truncate font-semibold">{course.name}</h5>
          <p className="text-sm text-gray-600">{course.number} · starts {course.startDate}</p>
          <p className="wd-dashboard-course-description h-[60px] overflow-hidden text-sm text-gray-600">
            {course.description}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="inline-block rounded bg-blue-600 px-3 py-1 text-sm text-white">Go</span>
            <button type="button" id="wd-edit-course-click"
              onClick={(e) => { e.preventDefault(); onEdit(); }}
              className="rounded bg-yellow-400 px-3 py-1 text-sm">Edit</button>
            <button type="button" id="wd-delete-course-click"
              onClick={(e) => { e.preventDefault(); deleteCourse(course._id); }}
              className="rounded bg-red-600 px-3 py-1 text-sm text-white">Delete</button>
            {onToggleEnroll && (
              <button type="button" className={`wd-enroll-toggle rounded px-3 py-1 text-sm text-white ${
                  enrolled ? "bg-red-600" : "bg-green-600"}`}
                onClick={(e) => { e.preventDefault(); onToggleEnroll(); }}>
                {enrolled ? "Unenroll" : "Enroll"}
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
