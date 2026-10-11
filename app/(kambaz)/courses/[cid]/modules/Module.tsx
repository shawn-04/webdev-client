import { ReactNode } from "react";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-10 list-none border border-gray-300">
      <div className="wd-title flex items-center border-b border-gray-300 bg-gray-100 p-3 font-semibold">
        <BsGripVertical className="me-2 text-xl" />
        {title}
        <div className="ms-auto flex items-center gap-2 text-lg">
          <FaCheckCircle className="text-green-600" />
          <BsPlus className="text-2xl" />
          <IoEllipsisVertical />
        </div>
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}