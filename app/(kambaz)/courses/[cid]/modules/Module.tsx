import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";

export default function Module({ module }: { module: CourseModule }) {
  const updateModule = useModulesStore((state) => state.updateModule);
  return (
    <li className="wd-module border border-gray-300">
      <div className="wd-title flex items-center justify-between bg-gray-200 p-3 font-semibold">
        {module.editing ? (
          <input className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base font-normal"
            defaultValue={module.name}
            onChange={(e) => updateModule({ ...module, name: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") updateModule({ ...module, editing: false });
            }} />
        ) : (
          <span>{module.name}</span>
        )}
        <ModuleControlButtons moduleId={module._id} />
      </div>
      <ul className="wd-lessons list-none pl-0">
        {(module.lessons ?? []).map((lesson) => (
          <li key={lesson._id} className="wd-lesson border-l-4 border-t border-l-green-600 p-3">{lesson.name}</li>
        ))}
      </ul>
    </li>
  );
}
