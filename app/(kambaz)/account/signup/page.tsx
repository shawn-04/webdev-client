import Link from "next/link";

const input = "mb-3 w-full rounded border border-gray-300 px-3 py-2";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mt-0 mb-4 text-2xl font-normal">Sign up</h3>
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
      <label htmlFor="wd-password-verify" className="sr-only">
        Verify password
      </label>
      <input
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
        className={input}
      />
      <Link
        href="/account/profile"
        id="wd-signup-btn"
        className="mb-3 block w-full rounded bg-blue-600 py-2 text-center text-white no-underline hover:bg-blue-700"
      >
        Sign up
      </Link>
      <Link
        href="/account/signin"
        id="wd-signin-link"
        className="text-blue-600 no-underline hover:underline"
      >
        Sign in
      </Link>
    </div>
  );
}