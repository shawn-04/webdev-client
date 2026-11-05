import { FaCheckCircle, FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { useModulesStore } from "../../../store/modulesStore";

export default function ModuleControlButtons({ moduleId }: { moduleId: string }) {
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const editModule = useModulesStore((state) => state.editModule);
  return (
    <div className="flex items-center gap-2">
      <FaPencilAlt className="wd-edit-module cursor-pointer text-blue-600" title="Edit module"
        onClick={() => editModule(moduleId)} />
      <FaTrash className="wd-delete-module cursor-pointer text-red-600" title="Delete module"
        onClick={() => deleteModule(moduleId)} />
      <FaCheckCircle className="text-green-600" />
      <BsPlus className="text-3xl" />
      <IoEllipsisVertical className="text-xl" />
    </div>
  );
}
