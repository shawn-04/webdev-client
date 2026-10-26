export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let city = "Boston";
  let credits = 4;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      city = {city}, typeof city = {typeof city}
      <br />
      credits = {credits}, typeof credits = {typeof credits}
      <br />
      sampleCount = {sampleCount}, typeof sampleCount = {typeof sampleCount}
      <br />
      sampleLabel = {sampleLabel}, typeof sampleLabel = {typeof sampleLabel}
      <hr />
    </div>
  );
}
