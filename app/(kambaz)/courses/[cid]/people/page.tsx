import { FaUserCircle } from "react-icons/fa";

const people = [
  { first: "Drake", last: "Maye", login: "001234561S", section: "S101", role: "STUDENT", lastActivity: "2026-10-01", total: "10:21:32" },
  { first: "Aaron", last: "Hring", login: "001234562S", section: "S101", role: "STUDENT", lastActivity: "2026-10-03", total: "08:45:10" },
  { first: "William", last: "Hopper", login: "001234563S", section: "S101", role: "TA", lastActivity: "2026-10-05", total: "15:02:47" },
  { first: "Hunter", last: "Kirkman", login: "001234564S", section: "S101", role: "STUDENT", lastActivity: "2026-10-06", total: "06:12:05" },
  { first: "Shawn", last: "Godfrey", login: "001234565S", section: "S101", role: "STUDENT", lastActivity: "2026-10-09", total: "12:30:00" },
  { first: "Lionel", last: "Messi", login: "001234566S", section: "S101", role: "STUDENT", lastActivity: "2026-10-02", total: "11:30:00" },
  { first: "Cristiano", last: "Ronaldo", login: "001234567S", section: "S101", role: "STUDENT", lastActivity: "2026-10-05", total: "09:20:00" },
];

const th = "border-b-2 border-gray-300 px-3 py-2 text-left font-semibold";
const td = "px-3 py-2";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className={th}>Name</th>
            <th className={th}>Login ID</th>
            <th className={th}>Section</th>
            <th className={th}>Role</th>
            <th className={th}>Last Activity</th>
            <th className={th}>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr
              key={p.login}
              className="border-b border-gray-200 odd:bg-gray-50 hover:bg-gray-100"
            >
              <td className={`wd-full-name ${td} whitespace-nowrap`}>
                <FaUserCircle className="me-2 inline-block align-middle text-3xl text-gray-400" />
                <span className="wd-first-name text-red-600">{p.first}</span>{" "}
                <span className="wd-last-name text-red-600">{p.last}</span>
              </td>
              <td className={`wd-login-id ${td}`}>{p.login}</td>
              <td className={`wd-section ${td}`}>{p.section}</td>
              <td className={`wd-role ${td}`}>{p.role}</td>
              <td className={`wd-last-activity ${td}`}>{p.lastActivity}</td>
              <td className={`wd-total-activity ${td}`}>{p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}