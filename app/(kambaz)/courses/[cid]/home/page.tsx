import Modules from "../modules/page";

export default function Home() {
  return (
    <div id="wd-home" className="flex gap-6">
      <div className="flex-1 min-w-0">
        <Modules />
      </div>
      <div id="wd-course-status" className="hidden lg:block w-[220px] shrink-0">
        <h2 className="text-lg font-semibold mb-2">Course Status</h2>
        <div className="flex gap-2 mb-3">
          <button className="flex-1 px-2 py-1 bg-gray-200 rounded">Unpublish</button>
          <button className="flex-1 px-2 py-1 bg-green-600 text-white rounded">Publish</button>
        </div>
        <div className="flex flex-col gap-2">
          <button className="px-2 py-1 bg-gray-200 rounded text-left">Import Existing Content</button>
          <button className="px-2 py-1 bg-gray-200 rounded text-left">View Course Stream</button>
          <button className="px-2 py-1 bg-gray-200 rounded text-left">New Announcement</button>
          <button className="px-2 py-1 bg-gray-200 rounded text-left">New Analytics</button>
        </div>
      </div>
    </div>
  );
}
