enum Grade {
  A = "A",
  B = "B",
  C = "C",
}
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
}

export default function Enums() {
  const myGrade = Grade.A;
  const lectureDay = Weekday.Wednesday;
  return (
    <div id="wd-enums">
      <h4>Enums</h4>
      myGrade = {myGrade}
      <br />
      lectureDay = {lectureDay} ({Weekday[lectureDay]})
      <hr />
    </div>
  );
}
