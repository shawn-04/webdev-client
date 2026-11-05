"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { emptyCourse, useCoursesStore, type Course } from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const { currentUser } = useAccountContext();
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const isEnrolled = (courseId: string) =>
    !!currentUser && enrollments.some((e) => e.user === currentUser._id && e.course === courseId);

  const visibleCourses = currentUser && !showAllCourses
    ? courses.filter((c) => isEnrolled(c._id))
    : courses;

  const input = "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title" className="text-3xl font-semibold">Dashboard</h1>
        {currentUser && (
          <button type="button" id="wd-enrollments-toggle" onClick={() => setShowAllCourses(!showAllCourses)}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
            Enrollments
          </button>
        )}
      </div>
      <hr className="my-3" />
      <h5 className="flex flex-wrap items-center gap-2 text-lg font-semibold">
        New Course
        <button type="button" id="wd-add-new-course-click"
          onClick={() => {
            const newCourse = addCourse(course);
            if (currentUser) enroll(currentUser._id, newCourse._id);
          }}
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">Add</button>
        <button type="button" id="wd-update-course-click" onClick={() => updateCourse(course)}
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium">Update</button>
      </h5>
      <input id="wd-course-name" className={`${input} mt-2`} value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea id="wd-course-description" className={input} rows={3} value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <input id="wd-course-number" className={input} value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input id="wd-course-start-date" type="date" className={input} value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <hr className="my-3" />
      <h2 id="wd-dashboard-published" className="mb-3 text-xl">Published Courses ({visibleCourses.length})</h2>
      <hr className="mb-4" />
      <div id="wd-dashboard-courses" className="grid grid-cols-[repeat(auto-fill,260px)] gap-6">
        {visibleCourses.map((c) => (
          <CourseCard key={c._id} course={c} onEdit={() => setCourse(c)}
            enrolled={isEnrolled(c._id)}
            onToggleEnroll={currentUser
              ? () => (isEnrolled(c._id) ? unenroll(currentUser._id, c._id) : enroll(currentUser._id, c._id))
              : undefined} />
        ))}
      </div>
    </div>
  );
}
