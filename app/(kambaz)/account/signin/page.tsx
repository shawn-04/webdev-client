import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <label htmlFor="wd-username">Username</label>
      <br />
      <input id="wd-username" placeholder="username" />
      <br />
      <label htmlFor="wd-password">Password</label>
      <br />
      <input id="wd-password" placeholder="password" type="password" />
      <br />
      <Link href="/dashboard" id="wd-signin-btn">Sign in</Link>
      <br />
      <Link href="/account/signup" id="wd-signup-link">Sign up</Link>
    </div>
  );
}
