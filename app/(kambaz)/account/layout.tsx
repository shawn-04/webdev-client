import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-account" className="flex">
      <div className="hidden w-[200px] shrink-0 md:block">
        <AccountNavigation />
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}