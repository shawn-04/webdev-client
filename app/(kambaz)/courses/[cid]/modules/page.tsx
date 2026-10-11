import { FaPlus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Module from "./Module";
import Lesson from "./Lesson";

const grayBtn =
  "flex items-center gap-1 rounded border-0 bg-gray-200 px-3 py-1.5 text-sm hover:bg-gray-300";

export default function Modules() {
  return (
    <div id="wd-modules-screen" className="me-4">
      <div className="mb-6 flex flex-wrap justify-end gap-2">
        <button type="button" id="wd-collapse-all" className={grayBtn}>
          Collapse All
        </button>
        <button type="button" id="wd-view-progress" className={grayBtn}>
          View Progress
        </button>
        <div className="flex items-center gap-1 rounded bg-gray-200 px-2">
          <FaCheckCircle className="text-green-600" />
          <select
            id="wd-publish-all"
            defaultValue="PUBLISH_ALL"
            className="border-0 bg-transparent py-1.5 text-sm"
          >
            <option value="PUBLISH_ALL">Publish All</option>
            <option value="UNPUBLISH_ALL">Unpublish All</option>
          </select>
        </div>
        <button
          type="button"
          id="wd-add-module"
          className="flex items-center gap-1 rounded border-0 bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
        >
          <FaPlus />
          Module
        </button>
      </div>

      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1">
          <Lesson
            title="LEARNING OBJECTIVES"
            items={[
              "Introduction to the course",
              "Learn what is Web Development",
            ]}
          />
          <Lesson
            title="READING"
            items={[
              "Full Stack Developer - Chapter 1 - Introduction",
              "Full Stack Developer - Chapter 2 - Creating User Interfaces",
            ]}
          />
          <Lesson
            title="SLIDES"
            items={[
              "Introduction to Web Development",
              "Creating an HTTP server with Node.js",
              "Creating a React Application",
            ]}
          />
        </Module>
        <Module title="Week 2">
          <Lesson
            title="LEARNING OBJECTIVES"
            items={["Learn how to create user interfaces with HTML"]}
          />
          <Lesson
            title="LESSONS"
            items={["HTML headings and paragraphs", "HTML lists and tables"]}
          />
        </Module>
        <Module title="Week 3">
          <Lesson
            title="LEARNING OBJECTIVES"
            items={["Style pages with CSS", "Lay out screens with Flexbox"]}
          />
        </Module>
      </ul>
    </div>
  );
}