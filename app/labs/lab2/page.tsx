import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      {/* 2.1.1 Style attribute */}
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Shawn here. Green and yellow, like a soccer pitch on a sunny day.
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        Sample paragraph styled with a purple background and white text.
      </p>

      {/* 2.1.3 ID selectors */}
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-id-selector-3">
          My own paragraph with its own ID and color scheme.
        </p>
        <p id="wd-ai-id-selector">
          Sample paragraph with its own ID-based colors.
        </p>
      </div>

      {/* 2.1.4 Class selectors */}
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-your-class">My paragraph shares a class with...</p>
        <h4 className="wd-your-class">...this heading of mine.</h4>
        <p className="wd-ai-class-selector">Sample paragraph with a shared class</p>
        <h4 className="wd-ai-class-selector">Sample heading with the same class</h4>
      </div>

      {/* 2.1.5 Document structure selectors */}
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                Sample span styled as a descendant of .wd-selector-1
              </span>
            </p>
            <p className="wd-selector-6">
              My paragraph is a direct child of .wd-selector-2
            </p>
          </div>
        </div>
      </div>

      {/* 2.1.6 Cascade experiment */}
      <div id="wd-css-cascade">
        <h3>Selection rule mechanism</h3>
        <p id="wd-cascade-test" className="wd-cascade-test">
          My experiment: tag, class, and id all set the text color. The id wins.
        </p>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Sample: tag green, class yellow, id red. The red id background wins.
        </p>
      </div>
    <ForegroundColors />
    <BackgroundColors />
    <Borders />
    <Padding />
    <Margins />
    <BoxModel />
    <Corners />
    <Dimensions />
    <Display />
    <Positions />
    <Zindex />
    </div>
  );
}