export default function Styles() {
  const colorBlack = { color: "black" };
  const padding10px = { padding: "10px", marginBottom: "6px" };
  const bgYellow = { ...colorBlack, ...padding10px, backgroundColor: "lightyellow" };
  const bgRed = { ...colorBlack, ...padding10px, backgroundColor: "lightcoral" };
  const bgBlue = { ...colorBlack, ...padding10px, backgroundColor: "lightblue" };
  const bgGreen = { ...colorBlack, ...padding10px, backgroundColor: "lightgreen" };
  const bgGray = { ...colorBlack, ...padding10px, backgroundColor: "lightgray" };
  return (
    <div id="wd-styles">
      <h2>Styles</h2>
      <div style={bgYellow}>Yellow background</div>
      <div style={bgRed}>Red background</div>
      <div style={bgBlue}>Blue background</div>
      <div style={bgGreen}>Green background</div>
      <div style={bgGray}>Gray background</div>
      <hr />
    </div>
  );
}
