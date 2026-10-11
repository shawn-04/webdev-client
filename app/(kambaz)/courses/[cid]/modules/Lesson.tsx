import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const row =
  "flex items-center border-b border-l-4 border-gray-300 border-l-green-600 p-3";

function Controls() {
  return (
      <div className="ms-auto flex items-center gap-2 ps-3 text-lg">
      <FaCheckCircle className="text-green-600" />
      <IoEllipsisVertical />
    </div>
  );
}

export default function Lesson({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <li className="wd-lesson list-none">
      <div className={`${row} font-semibold`}>
        <BsGripVertical className="me-2 text-xl" />
        <span className="wd-title">{title}</span>
        <Controls />
      </div>
      <ul className="wd-content m-0 list-none p-0">
        {items.map((item) => (
          <li key={item} className={`wd-content-item ${row} ps-10`}>
            <BsGripVertical className="me-2 text-xl" />
            {item}
            <Controls />
          </li>
        ))}
      </ul>
    </li>
  );
}