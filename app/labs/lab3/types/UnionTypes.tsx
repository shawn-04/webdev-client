type Role = "STUDENT" | "FACULTY" | "TA";
type Id = string | number;

export default function UnionTypes() {
  const role: Role = "FACULTY";
  const courseId: Id = "CS5610";
  const sectionId: Id = 2;
  return (
    <div id="wd-union-types">
      <h4>Union and Literal Types</h4>
      role = {role}
      <br />
      courseId = {courseId}, typeof = {typeof courseId}
      <br />
      sectionId = {sectionId}, typeof = {typeof sectionId}
      <hr />
    </div>
  );
}
