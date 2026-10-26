import "./Classes.css";

export default function Classes() {
  const color = "blue";
  const dangerous = true;
  const studyMode = true;
  const greenColor = "green";
  return (
    <div id="wd-css-classes">
      <h2>Classes</h2>
      <div className="wd-lab3-box wd-lab3-bg-yellow">Yellow background</div>
      <div className="wd-lab3-box wd-lab3-bg-blue">Blue background</div>
      <div className="wd-lab3-box wd-lab3-bg-red">Red background</div>
      <div className={`wd-lab3-box wd-lab3-bg-${color}`}>Dynamic blue background</div>
      <div className={`wd-lab3-box ${dangerous ? "wd-lab3-bg-red" : "wd-lab3-bg-green"}`}>
        Dangerous background
      </div>
      <div className={`wd-lab3-box ${studyMode ? "wd-lab3-bg-purple" : "wd-lab3-bg-pink"}`}>
        Study mode purple background
      </div>
      <div className={`wd-lab3-box wd-lab3-bg-${greenColor}`}>Dynamic Green background</div>
      <hr />
    </div>
  );
}
