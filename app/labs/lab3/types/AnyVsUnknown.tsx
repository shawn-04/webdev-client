export default function AnyVsUnknown() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loose: any = "anything goes";
  const careful: unknown = "must be checked";
  const length = typeof careful === "string" ? careful.length : 0;
  return (
    <div id="wd-any-vs-unknown">
      <h4>any vs unknown</h4>
      loose.toUpperCase() = {loose.toUpperCase()}
      <br />
      careful length (after a typeof check) = {length}
      <hr />
    </div>
  );
}
