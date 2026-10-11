export default function TailwindFilters() {
  const src = "/images/reactjs.jpg";
  return (
    <div>
      <h2 className="text-2xl font-bold">Blurs</h2>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>

      {/* My own: contrast and sepia */}
      <h3 className="mt-6 text-lg font-bold">Contrast and sepia</h3>
      <div className="flex">
        <img className="contrast-50 w-1/4" src={src} alt="contrast 50" />
        <img className="contrast-125 w-1/4" src={src} alt="contrast 125" />
        <img className="contrast-200 w-1/4" src={src} alt="contrast 200" />
        <img className="sepia w-1/4" src={src} alt="sepia" />
      </div>

      {/* Sample: grayscale and brightness */}
      <h3 className="mt-6 text-lg font-bold">Grayscale and brightness</h3>
      <div id="wd-ai-filters" className="flex">
        <img className="grayscale w-1/4" src={src} alt="grayscale" />
        <img className="grayscale-0 w-1/4" src={src} alt="grayscale 0" />
        <img className="brightness-50 w-1/4" src={src} alt="brightness 50" />
        <img className="brightness-150 w-1/4" src={src} alt="brightness 150" />
      </div>
    </div>
  );
}