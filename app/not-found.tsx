import Link from "next/link";

export default function NotFound() {
  return (
    <div id="wd-not-found">
      <h1>Page not found</h1>
      <p>This page is not built yet.</p>
      <Link href="/dashboard" id="wd-not-found-dashboard-link">
        Back to Dashboard
      </Link>
    </div>
  );
}
