"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { LuFlaskConical } from "react-icons/lu";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: "wd-account-link", label: "Account", path: "/account", match: "/account", icon: FaRegCircleUser },
  { id: "wd-dashboard-link", label: "Dashboard", path: "/dashboard", match: "/dashboard", icon: AiOutlineDashboard },
  { id: "wd-course-link", label: "Courses", path: "/dashboard", match: "/courses", icon: LiaBookSolid },
  { id: "wd-calendar-link", label: "Calendar", path: "/calendar", match: "/calendar", icon: IoCalendarOutline },
  { id: "wd-inbox-link", label: "Inbox", path: "/inbox", match: "/inbox", icon: FaInbox },
  { id: "wd-labs-link", label: "Labs", path: "/labs", match: "/labs", icon: LuFlaskConical },
];

export default function KambazNavigation() {
  const pathname = usePathname();

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/NEU.png"
          width={75}
          height={75}
          alt="Northeastern University"
          className="mx-auto"
        />
      </a>
      {links.map((link) => {
        const active = pathname.startsWith(link.match);
        const Icon = link.icon;
        const iconColor =
          link.label === "Account" && !active ? "text-white" : "text-red-600";
        return (
          <Link
            key={link.id}
            href={link.path}
            id={link.id}
            aria-current={active ? "page" : undefined}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className={`inline-block text-3xl ${iconColor}`} />
            <br />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}