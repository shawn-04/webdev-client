export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const course = { course: "CS5610", credits: 4 };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <br />
      course = {JSON.stringify(course)}
      <hr />
    </div>
  );
}
