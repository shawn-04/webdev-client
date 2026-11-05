"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { emptyAssignment, useAssignmentsStore, type Assignment } from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const existing = useAssignmentsStore((state) => state.assignments.find((a) => a._id === aid));
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const isNew = aid === "new";
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? { ...emptyAssignment, course: cid }
  );

  const save = () => {
    if (isNew) addAssignment({ ...assignment, course: cid });
    else updateAssignment(assignment);
    router.push(`/courses/${cid}/assignments`);
  };

  const input = "border px-3 py-2 rounded";

  return (
    <div id="wd-assignments-editor" key={aid} className="max-w-2xl">
      <label htmlFor="wd-name" className="mb-1 block">Assignment Name</label>
      <input id="wd-name" value={assignment.title} className={`${input} mb-1 w-full`}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <p id="wd-assignment-id" className="mb-4 text-sm text-gray-600">Assignment id: {aid}</p>
      <textarea id="wd-description" rows={5} value={assignment.description} className={`${input} mb-4 w-full`}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      <div className="mb-4 grid grid-cols-[140px_1fr] items-center gap-3">
        <label htmlFor="wd-points" className="text-right">Points</label>
        <input id="wd-points" type="number" value={assignment.points} className={input}
          onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })} />
        <label htmlFor="wd-due-date" className="text-right">Due</label>
        <input id="wd-due-date" type="date" value={assignment.dueDate} className={input}
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} />
        <label htmlFor="wd-available-from" className="text-right">Available from</label>
        <input id="wd-available-from" type="date" value={assignment.availableDate} className={input}
          onChange={(e) => setAssignment({ ...assignment, availableDate: e.target.value })} />
        <label htmlFor="wd-available-until" className="text-right">Until</label>
        <input id="wd-available-until" type="date" value={assignment.untilDate ?? ""} className={input}
          onChange={(e) => setAssignment({ ...assignment, untilDate: e.target.value })} />
      </div>
      <hr className="mb-3" />
      <div className="flex justify-end gap-2">
        <Link href={`/courses/${cid}/assignments`} id="wd-assignment-cancel" className="rounded bg-gray-200 px-3 py-1">Cancel</Link>
        <button type="button" id="wd-assignment-save" onClick={save} className="rounded bg-red-600 px-3 py-1 text-white">Save</button>
      </div>
    </div>
  );
}
