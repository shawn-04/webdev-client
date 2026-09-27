import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <label htmlFor="wd-username">Username</label>
      <br />
      <input id="wd-username" placeholder="username" />
      <br />
      <label htmlFor="wd-password">Password</label>
      <br />
      <input id="wd-password" placeholder="password" type="password" />
      <br />
      <label htmlFor="wd-password-verify">Verify password</label>
      <br />
      <input
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
      />
      <br />
      <Link href="/account/profile" id="wd-signup-btn">Sign up</Link>
      <br />
      <Link href="/account/signin" id="wd-signin-link">Sign in</Link>
    </div>
  );
}
