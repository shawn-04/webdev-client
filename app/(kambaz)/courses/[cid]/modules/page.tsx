import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div id="wd-modules-screen">
      <button type="button" id="wd-collapse-all">Collapse All</button>
      <button type="button" id="wd-view-progress">View Progress</button>
      <select id="wd-publish-all" defaultValue="PUBLISH_ALL">
        <option value="PUBLISH_ALL">Publish All</option>
        <option value="UNPUBLISH_ALL">Unpublish All</option>
      </select>
      <button type="button" id="wd-add-module">+ Module</button>
      <ul id="wd-modules">
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
