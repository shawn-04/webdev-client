"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { assignments } from "../../../../database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const assignment = assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" key={aid} className="max-w-2xl">
      <label htmlFor="wd-name" className="block mb-1">Assignment Name</label>
      <input id="wd-name" defaultValue={assignment?.title ?? ""} className="w-full border px-3 py-2 rounded mb-4" />
      <textarea
        id="wd-description"
        defaultValue={assignment?.description ?? ""}
        rows={5}
        className="w-full border px-3 py-2 rounded mb-4"
      />
      <div className="grid grid-cols-[140px_1fr] gap-3 items-center mb-4">
        <label htmlFor="wd-points" className="text-right">Points</label>
        <input id="wd-points" type="number" defaultValue={assignment?.points ?? 100} className="border px-3 py-2 rounded" />
        <label htmlFor="wd-due-date" className="text-right">Due</label>
        <input id="wd-due-date" type="date" defaultValue={assignment?.dueDate ?? ""} className="border px-3 py-2 rounded" />
        <label htmlFor="wd-available-from" className="text-right">Available from</label>
        <input id="wd-available-from" type="date" defaultValue={assignment?.availableDate ?? ""} className="border px-3 py-2 rounded" />
      </div>
      <hr className="mb-3" />
      <div className="flex justify-end gap-2">
        <Link href={`/courses/${cid}/assignments`} className="px-3 py-1 bg-gray-200 rounded">Cancel</Link>
        <Link href={`/courses/${cid}/assignments`} className="px-3 py-1 bg-red-600 text-white rounded">Save</Link>
      </div>
    </div>
  );
}