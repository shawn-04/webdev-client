"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UrlEncoding() {
  const [a, setA] = useState("5");
  const [b, setB] = useState("10");
  const [c, setC] = useState("2");
  const router = useRouter();
  const baseUrl = "/labs/lab4/url-encoding";
  const input = "mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5";
  const btn = "mb-2 w-full rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white";
  const lnk = "mb-2 block w-full rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white no-underline";

  const goToQueryVersion = () => {
    const params = new URLSearchParams();
    params.set("a", a);
    params.set("b", b);
    params.set("c", c);
    router.push(`${baseUrl}/query-params?${params.toString()}`);
  };
  const goToPathVersion = () => {
    router.push(`${baseUrl}/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}`);
  };

  return (
    <div id="wd-url-encoding" className="max-w-xl">
      <h2>Addition Calculator</h2>
      <p>Enter numbers and navigate using either buttons (programmatic) or links (declarative):</p>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} className={input} id="wd-url-a" />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} className={input} id="wd-url-b" />
      <input type="number" value={c} onChange={(e) => setC(e.target.value)} className={input} id="wd-url-c" />
      <h4>Programmatic navigation (using router.push):</h4>
      <button type="button" onClick={goToQueryVersion} className={btn} id="wd-url-query-programmatic">
        {a} + {b} + {c} → Query Params (programmatic)
      </button>
      <button type="button" onClick={goToPathVersion} className={btn} id="wd-url-path-programmatic">
        {a} + {b} → Path Params (programmatic)
      </button>
      <h4>Declarative navigation (using Link):</h4>
      <Link className={lnk} id="wd-url-query-link"
        href={`${baseUrl}/query-params?a=${encodeURIComponent(a)}&b=${encodeURIComponent(b)}&c=${encodeURIComponent(c)}`}>
        {a} + {b} + {c} → Query Params (Link)
      </Link>
      <Link className={lnk} id="wd-url-path-link"
        href={`${baseUrl}/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}`}>
        {a} + {b} → Path Params (Link)
      </Link>
      <Link className={lnk} id="wd-url-path-three-link"
        href={`${baseUrl}/path-params/${encodeURIComponent(a)}/${encodeURIComponent(b)}/${encodeURIComponent(c)}`}>
        {a} + {b} + {c} → Path Params with c (Link)
      </Link>
      <hr />
    </div>
  );
}
