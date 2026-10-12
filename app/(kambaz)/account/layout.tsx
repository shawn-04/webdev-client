import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-account" className="flex flex-col md:flex-row">
      <div className="mb-4 w-full shrink-0 md:mb-0 md:w-[200px]">
        <AccountNavigation />
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}