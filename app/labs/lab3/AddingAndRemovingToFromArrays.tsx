export default function AddingAndRemovingToFromArrays() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];
  let todoArray = [
    <li key={1}>Buy milk</li>,
    <li key={2}>Study for Mid terms</li>,
    <li key={3}>Meal prep for the next week</li>,
  ];
  numberArray1.push(6);
  stringArray1.push("string3");
  todoArray.push(<li key={4}>Clean the living room</li>);
  todoArray.push(<li key={5}>Submit Assignment</li>);
  todoArray.push(<li key={6}>Buy stamps</li>);
  todoArray.splice(0, 1);
  numberArray1.splice(2, 1);
  stringArray1.splice(1, 1);
  return (
    <div id="wd-adding-removing-from-arrays">
      <h4>Add/remove to/from arrays</h4>
      numberArray1 = {numberArray1}
      <br />
      stringArray1 = {stringArray1}
      <br />
      Todo list:
      <ol>{todoArray}</ol>
      <hr />
    </div>
  );
}
