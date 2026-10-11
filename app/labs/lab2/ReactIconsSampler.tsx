import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { GiSoccerBall } from "react-icons/gi";
import { TbBallFootball } from "react-icons/tb";
import { MdSchool } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>

      {/* My own: two icons from families not used above */}
      <h3 className="mt-2 font-semibold">My icons</h3>
      <div className="flex gap-3">
        <GiSoccerBall className="text-4xl text-green-600" />
        <TbBallFootball className="text-4xl text-red-600" />
      </div>

      {/* Sample: two more icons from other families */}
      <h3 className="mt-2 font-semibold">Sample icons</h3>
      <div id="wd-ai-icons" className="flex gap-3">
        <MdSchool className="text-4xl text-blue-600" />
        <HiAcademicCap className="text-4xl text-purple-600" />
      </div>
    </div>
  );
}