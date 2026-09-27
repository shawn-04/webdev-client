export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <button type="button" id="wd-unpublish">Unpublish</button>{" "}
      <button type="button" id="wd-publish">Publish</button>
      <br />
      <button type="button" id="wd-import-existing">Import Existing Content</button>
      <br />
      <button type="button" id="wd-import-commons">Import from Commons</button>
      <br />
      <button type="button" id="wd-choose-home">Choose Home Page</button>
      <br />
      <button type="button" id="wd-course-stream">View Course Stream</button>
      <br />
      <button type="button" id="wd-new-announcement">New Announcement</button>
      <br />
      <button type="button" id="wd-new-analytics">New Analytics</button>
      <br />
      <button type="button" id="wd-course-notifications">
        View Course Notifications
      </button>
    </div>
  );
}
