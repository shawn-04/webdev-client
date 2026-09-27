import Link from "next/link";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <label htmlFor="wd-search-assignment">Search</label>{" "}
      <input id="wd-search-assignment" placeholder="Search for Assignments" />{" "}
      <button type="button" id="wd-add-assignment-group">+ Group</button>{" "}
      <button type="button" id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button type="button">+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href={`/courses/${cid}/assignments/123`}
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 6 at 12:00am |{" "}
          <b>Due</b> May 13 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/courses/${cid}/assignments/124`}
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 13 at 12:00am |{" "}
          <b>Due</b> May 20 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={`/courses/${cid}/assignments/125`}
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <br />
          Multiple Modules | <b>Not available until</b> May 20 at 12:00am |{" "}
          <b>Due</b> May 27 at 11:59pm | 100 pts
        </li>
      </ul>
    </div>
  );
}
