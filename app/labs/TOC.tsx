"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const labLinks = [
  { href: "/labs", label: "Home" },
  { href: "/labs/lab1", label: "Lab 1" },
  { href: "/labs/lab2", label: "Lab 2" },
  { href: "/labs/lab3", label: "Lab 3" },
  { href: "/labs/lab4", label: "Lab 4" },
  { href: "/labs/lab5", label: "Lab 5" },
];

export default function TOC() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/labs"
      ? pathname === "/labs"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <div id="wd-toc">
      <p id="wd-toc-personal">
        Shawn Godfrey
        <br />
        I can do all things through Christ who strengthens me
      </p>
      <ul>
        {labLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={isActive(link.href) ? "font-bold text-red-600" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <Link href="https://kambaz.dev/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  );
}