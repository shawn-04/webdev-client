export default function Styles() {
  const box = { padding: "10px", marginBottom: "6px", color: "black" };
  const bgYellow = { ...box, backgroundColor: "lightyellow" };
  const bgRed = { ...box, backgroundColor: "lightcoral" };
  const bgBlue = { ...box, backgroundColor: "lightblue" };
  const bgGreen = { ...box, backgroundColor: "lightgreen" };
  return (
    <div id="wd-styles">
      <h2>Styles</h2>
      <div style={bgYellow}>Yellow background</div>
      <div style={bgRed}>Red background</div>
      <div style={bgBlue}>Blue background</div>
      <div style={bgGreen}>Green background</div>
      <hr />
    </div>
  );
}
