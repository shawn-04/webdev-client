export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>

      {/* My own: the middle column grows, the last one is pinned */}
      <h3>My flex row</h3>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white">Short</div>
        <div className="wd-bg-color-gray wd-flex-grow-1">I stretch</div>
        <div className="wd-bg-color-yellow wd-width-110px">Pinned</div>
      </div>

      {/* Sample: first pinned, last grows */}
      <h3>Sample flex row</h3>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Pinned</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Natural</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Stretches
        </div>
      </div>
    </div>
  );
}