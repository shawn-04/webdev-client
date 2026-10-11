import Link from "next/link";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical, IoSearch } from "react-icons/io5";
import { FaCaretDown, FaCheckCircle, FaPlus } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";

function Item({
  href,
  title,
  from,
  due,
}: {
  href: string;
  title: string;
  from: string;
  due: string;
}) {
  return (
    <li className="wd-assignment-list-item flex items-center border-b border-l-4 border-gray-300 border-l-green-600 p-3">
      <BsGripVertical className="me-2 shrink-0 text-xl" />
      <MdOutlineAssignment className="me-3 shrink-0 text-2xl text-green-600" />
      <div className="min-w-0">
        <Link
          href={href}
          className="wd-assignment-link font-semibold text-black no-underline hover:underline"
        >
          {title}
        </Link>
        <br />
        <span className="text-sm text-gray-600">
          <span className="text-red-600">Multiple Modules</span> |{" "}
          <b>Not available until</b> {from} | <b>Due</b> {due} | 100 pts
        </span>
      </div>
      <div className="ms-auto flex shrink-0 items-center gap-2 ps-3 text-lg">
        <FaCheckCircle className="text-green-600" />
        <IoEllipsisVertical />
      </div>
    </li>
  );
}

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments" className="me-4">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <label htmlFor="wd-search-assignment" className="sr-only">
          Search
        </label>
        <div className="relative">
          <IoSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            className="w-72 rounded border border-gray-300 py-2 ps-9 pe-3"
          />
        </div>
        <div className="ms-auto flex gap-2">
          <button
            type="button"
            id="wd-add-assignment-group"
            className="flex items-center gap-1 rounded border-0 bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300"
          >
            <FaPlus />
            Group
          </button>
          <button
            type="button"
            id="wd-add-assignment"
            className="flex items-center gap-1 rounded border-0 bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
          >
            <FaPlus />
            Assignment
          </button>
        </div>
      </div>

      <div className="border border-gray-300">
        <h3
          id="wd-assignments-title"
          className="m-0 flex items-center border-b border-gray-300 bg-gray-100 p-3 text-base font-semibold"
        >
          <BsGripVertical className="me-2 text-xl" />
          <FaCaretDown className="me-2" />
          ASSIGNMENTS
          <span className="ms-auto rounded-full border border-gray-400 px-3 py-0.5 text-sm font-normal">
            40% of Total
          </span>
          <button
            type="button"
            className="ms-2 flex items-center border-0 bg-transparent text-2xl"
          >
            <BsPlus />
          </button>
          <IoEllipsisVertical className="ms-1 text-lg" />
        </h3>

        <ul id="wd-assignment-list" className="m-0 list-none p-0">
          <Item
            href={`/courses/${cid}/assignments/123`}
            title="A1 - ENV + HTML"
            from="May 6 at 12:00am"
            due="May 13 at 11:59pm"
          />
          <Item
            href={`/courses/${cid}/assignments/124`}
            title="A2 - CSS + BOOTSTRAP"
            from="May 13 at 12:00am"
            due="May 20 at 11:59pm"
          />
          <Item
            href={`/courses/${cid}/assignments/125`}
            title="A3 - JAVASCRIPT + REACT"
            from="May 20 at 12:00am"
            due="May 27 at 11:59pm"
          />
        </ul>
      </div>
    </div>
  );
}