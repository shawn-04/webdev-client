import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <label htmlFor="wd-username">Username</label>
      <br />
      <input id="wd-username" defaultValue="alice" placeholder="username" />
      <br />
      <label htmlFor="wd-password">Password</label>
      <br />
      <input
        id="wd-password"
        defaultValue="123"
        placeholder="password"
        type="password"
      />
      <br />
      <label htmlFor="wd-firstname">First name</label>
      <br />
      <input id="wd-firstname" defaultValue="Alice" placeholder="First Name" />
      <br />
      <label htmlFor="wd-lastname">Last name</label>
      <br />
      <input id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" />
      <br />
      <label htmlFor="wd-dob">Date of birth</label>
      <br />
      <input id="wd-dob" defaultValue="2000-01-01" type="date" />
      <br />
      <label htmlFor="wd-email">Email</label>
      <br />
      <input id="wd-email" defaultValue="alice@wonderland.com" type="email" />
      <br />
      <label htmlFor="wd-role">Role</label>
      <br />
      <select id="wd-role" defaultValue="FACULTY">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="/account/signin" id="wd-signout-btn">Sign out</Link>
    </div>
  );
}
