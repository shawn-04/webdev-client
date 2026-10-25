export default function Add({ a, b }: { a: number; b: number }) {
  return (
    <div className="wd-add">
      <h4>Add</h4>
      a = {a}
      <br />
      b = {b}
      <br />
      a + b = {a + b}
      <hr />
    </div>
  );
}
