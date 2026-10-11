import Link from "next/link";

export default function CourseCard({
  cid,
  title,
  description,
  image = "/images/reactjs.jpg",
}: {
  cid: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <div className="wd-dashboard-course w-[270px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
      <Link
        href={`/courses/${cid}/home`}
        className="wd-dashboard-course-link block text-black no-underline"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-contain bg-gray-50 p-2"
        />
        <div className="p-4">
          <h5 className="m-0 truncate text-lg font-semibold">{title}</h5>
          <p className="wd-dashboard-course-title mt-1 mb-3 h-12 overflow-hidden text-sm text-gray-600">
            {description}
          </p>
          <button
            type="button"
            className="cursor-pointer rounded border-0 bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700"
          >
            Go
          </button>
        </div>
      </Link>
    </div>
  );
}