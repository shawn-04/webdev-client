type BinaryOp = (a: number, b: number) => number;

const add: BinaryOp = (a, b) => a + b;
const multiply: BinaryOp = (a, b) => a * b;
function apply(op: BinaryOp, a: number, b: number): number {
  return op(a, b);
}

export default function FunctionTypes() {
  return (
    <div id="wd-function-types">
      <h4>Function Types</h4>
      apply(add, 2, 3) = {apply(add, 2, 3)}
      <br />
      apply(multiply, 2, 3) = {apply(multiply, 2, 3)}
      <hr />
    </div>
  );
}
