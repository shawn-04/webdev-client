"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const courseAssignments = assignments.filter((a) => a.course === cid);

  return (
    <div id="wd-assignments">
      <div className="mb-4 flex justify-between gap-2">
        <input id="wd-search-assignment" placeholder="Search..." className="rounded border px-3 py-1" />
        <div className="flex gap-2">
          <button id="wd-add-assignment-group" className="rounded bg-gray-200 px-3 py-1">+ Group</button>
          <button id="wd-add-assignment" type="button"
            onClick={() => router.push(`/courses/${cid}/assignments/new`)}
            className="rounded bg-red-600 px-3 py-1 text-white">+ Assignment</button>
        </div>
      </div>
      <h3 id="wd-assignments-title" className="border border-gray-300 bg-gray-200 p-3 font-semibold">
        ASSIGNMENTS <span className="float-right font-normal">40% of Total</span>
      </h3>
      {courseAssignments.length === 0 && <p className="p-3">This course has no assignments yet.</p>}
      <ul id="wd-assignment-list" className="list-none border border-t-0 border-gray-300 pl-0">
        {courseAssignments.map((assignment) => (
          <li key={assignment._id}
            className="wd-assignment-list-item flex items-center justify-between border-l-4 border-t border-l-green-600 p-3">
            <div>
              <Link href={`/courses/${cid}/assignments/${assignment._id}`} className="wd-assignment-link font-semibold">
                {assignment.title}
              </Link>
              <div className="text-sm text-gray-600">
                <span className="text-red-600">Multiple Modules</span> | <b>Not available until</b>{" "}
                {assignment.availableDate} | <b>Due</b> {assignment.dueDate} | {assignment.points} pts
              </div>
            </div>
            <FaTrash className="wd-delete-assignment cursor-pointer text-red-600" title="Delete assignment"
              onClick={() => setDeletingId(assignment._id)} />
          </li>
        ))}
      </ul>

      {deletingId && (
        <div id="wd-delete-assignment-dialog" className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
            <p className="mb-4">Are you sure you want to remove this assignment?</p>
            <div className="flex justify-end gap-2">
              <button type="button" id="wd-delete-assignment-cancel" onClick={() => setDeletingId(null)}
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm">No</button>
              <button type="button" id="wd-delete-assignment-confirm"
                onClick={() => { deleteAssignment(deletingId); setDeletingId(null); }}
                className="rounded bg-red-600 px-3 py-1.5 text-sm text-white">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
