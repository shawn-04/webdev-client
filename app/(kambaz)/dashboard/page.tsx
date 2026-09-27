import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (4)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <CourseCard
          cid="1234"
          title="CS1234 React JS"
          description="Full Stack software developer"
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
      </div>
    </div>
  );
}