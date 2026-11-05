import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-account-screen" className="flex gap-10">
      <div className="hidden md:block w-[180px] shrink-0">
        <AccountNavigation />
      </div>
      <div className="flex-1 max-w-md">{children}</div>
    </div>
  );
}
