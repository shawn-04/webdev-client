import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title" className="m-0 text-3xl font-normal">
        Dashboard
      </h1>
      <hr className="my-4 border-gray-300" />
      <h2 id="wd-dashboard-published" className="m-0 text-xl font-normal">
        Published Courses (5)
      </h2>
      <hr className="my-4 border-gray-300" />
      <div id="wd-dashboard-courses" className="flex flex-wrap gap-8">
        <CourseCard
          cid="1234"
          title="CS1234 React JS"
          description="Shawn's favorite: building UIs one component at a time"
          image="/images/reactjs.jpg"
        />
        <CourseCard
          cid="2345"
          title="CS2345 Node.js"
          description="Building HTTP servers and REST APIs"
          image="/images/nodejs.jpg"
        />
        <CourseCard
          cid="3456"
          title="CS3456 MongoDB"
          description="Storing and querying application data"
          image="/images/mongodb.jpg"
        />
        <CourseCard
          cid="4567"
          title="CS4567 Next.js"
          description="Server and client rendering with the App Router"
          image="/images/nextjs.jpg"
        />
        <div id="wd-ai-course-card">
          <CourseCard
            cid="5678"
            title="CS5678 Robotics"
            description="Sample course: building and programming humanoid robots"
            image="/images/teslabot.jpg"
          />
        </div>
      </div>
    </div>
  );
}