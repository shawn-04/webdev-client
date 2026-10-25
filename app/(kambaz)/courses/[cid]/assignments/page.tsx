"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { assignments } from "../../../database";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const courseAssignments = assignments.filter((a) => a.course === cid);
  return (
    <div id="wd-assignments">
      <div className="flex justify-between gap-2 mb-4">
        <input id="wd-search-assignment" placeholder="Search..." className="border px-3 py-1 rounded" />
        <div className="flex gap-2">
          <button id="wd-add-assignment-group" className="px-3 py-1 bg-gray-200 rounded">+ Group</button>
          <button id="wd-add-assignment" className="px-3 py-1 bg-red-600 text-white rounded">+ Assignment</button>
        </div>
      </div>
      <h3 id="wd-assignments-title" className="p-3 bg-gray-200 font-semibold border border-gray-300">
        ASSIGNMENTS <span className="float-right font-normal">40% of Total</span>
      </h3>
      {courseAssignments.length === 0 && <p className="p-3">This course has no assignments yet.</p>}
      <ul id="wd-assignment-list" className="border border-t-0 border-gray-300">
        {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="wd-assignment-list-item p-3 border-t border-l-4 border-l-green-600">
            <Link
              href={`/courses/${cid}/assignments/${assignment._id}`}
              className="wd-assignment-link font-semibold"
            >
              {assignment.title}
            </Link>
            <div className="text-sm text-gray-600">
              <span className="text-red-600">Multiple Modules</span> | <b>Not available until</b>{" "}
              {assignment.availableDate} | <b>Due</b> {assignment.dueDate} | {assignment.points} pts
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
