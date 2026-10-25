"use client";
import { useEffect, useState } from "react";

export default function ClientOnlyApis() {
  const [width, setWidth] = useState<number | null>(null);
  const [language, setLanguage] = useState("");
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    setLanguage(navigator.language);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div id="wd-client-only-apis">
      <h4>More Client-Only APIs</h4>
      window.innerWidth = {width ?? "..."}
      <br />
      navigator.language = {language}
      <hr />
    </div>
  );
}
