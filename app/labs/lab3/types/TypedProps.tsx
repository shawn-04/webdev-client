type CourseCardProps = {
  name: string;
  number: string;
  credits?: number;
};

function CourseCard({ name, number, credits = 4 }: CourseCardProps) {
  return (
    <div>
      {number} {name} ({credits} credits)
    </div>
  );
}

export default function TypedProps() {
  return (
    <div id="wd-typed-props">
      <h4>Typing React Props</h4>
      <CourseCard name="Web Development" number="CS5610" />
      <CourseCard name="Database Management" number="CS5200" credits={3} />
      <hr />
    </div>
  );
}
