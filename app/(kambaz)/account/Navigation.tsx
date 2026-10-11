import Link from "next/link";

const linkBase =
  "block border-l-4 px-3 py-2 text-base no-underline hover:bg-gray-100";
const active = `${linkBase} border-black text-black`;
const inactive = `${linkBase} border-transparent text-red-600`;

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="me-4">
      <Link href="/account/signin" id="wd-account-signin-link" className={active}>
        Signin
      </Link>
      <Link href="/account/signup" id="wd-account-signup-link" className={inactive}>
        Signup
      </Link>
      <Link href="/account/profile" id="wd-account-profile-link" className={inactive}>
        Profile
      </Link>
    </div>
  );
}