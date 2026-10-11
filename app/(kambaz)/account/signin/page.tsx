import Link from "next/link";

const input = "mb-3 w-full rounded border border-gray-300 px-3 py-2";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h3 className="mt-0 mb-4 text-2xl font-normal">Sign in</h3>
      <label htmlFor="wd-username" className="sr-only">
        Username
      </label>
      <input id="wd-username" placeholder="username" className={input} />
      <label htmlFor="wd-password" className="sr-only">
        Password
      </label>
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={input}
      />
      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="mb-3 block w-full rounded bg-blue-600 py-2 text-center text-white no-underline hover:bg-blue-700"
      >
        Sign in
      </Link>
      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="text-blue-600 no-underline hover:underline"
      >
        Sign up
      </Link>
    </div>
  );
}