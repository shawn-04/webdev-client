import { MdDoNotDisturbAlt, MdCampaign } from "react-icons/md";
import { FaCheckCircle, FaStream } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import {
  IoHomeOutline,
  IoBarChartOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

const btn =
  "mb-1 flex w-full items-center gap-2 rounded border-0 bg-gray-200 px-3 py-2 text-left text-sm hover:bg-gray-300";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="ms-6">
      <h2 className="mt-0 mb-3 text-xl font-normal">Course Status</h2>

      <div className="mb-2 flex gap-1">
        <button
          type="button"
          id="wd-unpublish"
          className="flex flex-1 items-center justify-center gap-1 rounded border-0 bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300"
        >
          <MdDoNotDisturbAlt />
          Unpublish
        </button>
        <button
          type="button"
          id="wd-publish"
          className="flex flex-1 items-center justify-center gap-1 rounded border-0 bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
        >
          <FaCheckCircle />
          Publish
        </button>
      </div>

      <button type="button" id="wd-import-existing" className={btn}>
        <BiImport className="text-lg" />
        Import Existing Content
      </button>
      <button type="button" id="wd-import-commons" className={btn}>
        <LiaFileImportSolid className="text-lg" />
        Import from Commons
      </button>
      <button type="button" id="wd-choose-home" className={btn}>
        <IoHomeOutline className="text-lg" />
        Choose Home Page
      </button>
      <button type="button" id="wd-course-stream" className={btn}>
        <FaStream className="text-lg" />
        View Course Stream
      </button>
      <button type="button" id="wd-new-announcement" className={btn}>
        <MdCampaign className="text-lg" />
        New Announcement
      </button>
      <button type="button" id="wd-new-analytics" className={btn}>
        <IoBarChartOutline className="text-lg" />
        New Analytics
      </button>
      <button type="button" id="wd-course-notifications" className={btn}>
        <IoNotificationsOutline className="text-lg" />
        View Course Notifications
      </button>
    </div>
  );
}