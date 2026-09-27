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
    <div className="wd-dashboard-course">
      <Link href={`/courses/${cid}/home`} className="wd-dashboard-course-link">
        <img src={image} alt={title} width={200} />
        <div>
          <h5>{title}</h5>
          <p className="wd-dashboard-course-title">{description}</p>
          <button type="button">Go</button>
        </div>
      </Link>
    </div>
  );
}
