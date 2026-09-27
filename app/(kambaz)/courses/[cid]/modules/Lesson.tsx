export default function Lesson({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <li className="wd-lesson">
      <span className="wd-title">{title}</span>
      <ul className="wd-content">
        {/* one <li> per string in the items array */}
        {items.map((item) => (
          <li key={item} className="wd-content-item">
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
}
