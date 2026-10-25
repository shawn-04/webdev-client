function describe(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return "no value";
  if (typeof value === "string") return `string of length ${value.length}`;
  return `number doubled is ${value * 2}`;
}

export default function Narrowing() {
  return (
    <div id="wd-narrowing">
      <h4>Null, Undefined, and Narrowing</h4>
      describe(&quot;Kambaz&quot;) = {describe("Kambaz")}
      <br />
      describe(21) = {describe(21)}
      <br />
      describe(null) = {describe(null)}
      <hr />
    </div>
  );
}
