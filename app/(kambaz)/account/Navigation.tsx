"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const pathname = usePathname() ?? "";
  const links = currentUser
    ? [{ label: "Profile", path: "/account/profile", id: "wd-account-profile-link" }]
    : [
        { label: "Signin", path: "/account/signin", id: "wd-account-signin-link" },
        { label: "Signup", path: "/account/signup", id: "wd-account-signup-link" },
      ];
  return (
    <div id="wd-account-navigation" className="flex flex-col">
      {links.map((link) => {
        const active = pathname.startsWith(link.path);
        return (
          <Link key={link.id} id={link.id} href={link.path}
            aria-current={active ? "page" : undefined}
            className={`no-underline px-3 py-2 border-l-4 ${
              active ? "border-black text-black" : "border-transparent text-red-600"
            }`}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
