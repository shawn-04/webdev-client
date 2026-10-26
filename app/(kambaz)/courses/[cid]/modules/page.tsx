"use client";
import { useParams } from "next/navigation";
import { modules } from "../../../database";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const courseModules = modules.filter((m) => m.course === cid);
  return (
    <div id="wd-modules">
      <div className="flex justify-end gap-2 mb-4">
        <button className="px-3 py-1 bg-gray-200 rounded">Collapse All</button>
        <button className="px-3 py-1 bg-gray-200 rounded">View Progress</button>
        <button className="px-3 py-1 bg-red-600 text-white rounded">+ Module</button>
      </div>
      {courseModules.length === 0 && <p>This course has no modules yet.</p>}
      <ul id="wd-modules-list" className="space-y-6 list-none pl-0">
        {courseModules.map((module) => (
          <li key={module._id} className="wd-module border border-gray-300">
            <div className="wd-title p-3 bg-gray-200 font-semibold">{module.name}</div>
            <ul className="wd-lessons list-none pl-0">
              {module.lessons.map((lesson) => (
                <li key={lesson._id} className="wd-lesson p-3 border-t border-l-4 border-l-green-600">
                  {lesson.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
