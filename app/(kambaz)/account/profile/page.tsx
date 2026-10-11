import Link from "next/link";

const label = "mb-1 block text-sm font-semibold";
const input = "mb-3 w-full rounded border border-gray-300 px-3 py-2";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mt-0 mb-4 text-2xl font-normal">Profile</h3>

      <label htmlFor="wd-username" className={label}>Username</label>
      <input id="wd-username" defaultValue="alice" placeholder="username" className={input} />

      <label htmlFor="wd-password" className={label}>Password</label>
      <input
        id="wd-password"
        defaultValue="123"
        placeholder="password"
        type="password"
        className={input}
      />

      <label htmlFor="wd-firstname" className={label}>First name</label>
      <input id="wd-firstname" defaultValue="Alice" placeholder="First Name" className={input} />

      <label htmlFor="wd-lastname" className={label}>Last name</label>
      <input id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" className={input} />

      <label htmlFor="wd-dob" className={label}>Date of birth</label>
      <input id="wd-dob" defaultValue="2000-01-01" type="date" className={input} />

      <label htmlFor="wd-email" className={label}>Email</label>
      <input id="wd-email" defaultValue="alice@wonderland.com" type="email" className={input} />

      <label htmlFor="wd-role" className={label}>Role</label>
      <select id="wd-role" defaultValue="FACULTY" className={input}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link
        href="/account/signin"
        id="wd-signout-btn"
        className="block w-full rounded bg-red-600 py-2 text-center text-white no-underline hover:bg-red-700"
      >
        Sign out
      </Link>
    </div>
  );
}