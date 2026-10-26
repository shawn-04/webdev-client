"use client";
import { usePathname } from "next/navigation";

export default function ClientComponent() {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop() ?? "";
  return (
    <div id="wd-client-component">
      <h4>Client Component</h4>
      <p>Pathname: {pathname}</p>
      <p>Pathname length: {pathname.length}</p>
      <p>Last segment: {lastSegment}</p>
      <hr />
    </div>
  );
}
