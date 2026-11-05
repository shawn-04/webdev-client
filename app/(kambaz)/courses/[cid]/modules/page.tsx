"use client";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";
import ModulesControls from "./ModulesControls";
import Module from "./Module";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const modules = useModulesStore((state) => state.modules);
  const courseModules = modules.filter((m) => m.course === cid);
  return (
    <div id="wd-modules">
      <ModulesControls />
      {courseModules.length === 0 && <p>This course has no modules yet.</p>}
      <ul id="wd-modules-list" className="list-none space-y-6 pl-0">
        {courseModules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
