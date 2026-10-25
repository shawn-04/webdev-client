import Link from "next/link";

export default function PathParameters() {
  const pairs = [
    [1, 2],
    [3, 4],
    [12, 30],
  ];
  return (
    <div id="wd-path-parameters">
      <h4>Path Parameters</h4>
      {pairs.map(([a, b]) => (
        <div key={`${a}-${b}`}>
          <Link href={`/labs/lab3/add/${a}/${b}`} id={`wd-path-parameter-add-${a}-${b}`}>
            /labs/lab3/add/{a}/{b}
          </Link>
        </div>
      ))}
      <hr />
    </div>
  );
}
