"use client";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { users, enrollments } from "../../../../database";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const roster = users.filter((user) =>
    enrollments.some((e) => e.user === user._id && e.course === cid)
  );
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((user) => (
            <tr key={user._id} className="border-b">
              <td className="wd-full-name p-2 text-red-600 flex items-center gap-2">
                <FaUserCircle className="text-2xl text-gray-400" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
