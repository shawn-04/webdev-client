"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" defaultValue="Shawn" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" defaultValue="Godfrey" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input
        id="wd-your-student-id"
        type="password"
        placeholder="Student ID"
      />
      <br />

      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={4}
        defaultValue="I want to learn how to build and deploy full stack web applications with Next.js, Node.js, and MongoDB."
      />
      <br />

      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <label>Enrollment:</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      <label>Interests:</label>
      <br />
      <input type="checkbox" id="wd-your-frontend" defaultChecked />
      <label htmlFor="wd-your-frontend">Frontend development</label>
      <br />
      <input type="checkbox" id="wd-your-backend" defaultChecked />
      <label htmlFor="wd-your-backend">Backend development</label>
      <br />
      <input type="checkbox" id="wd-your-databases" />
      <label htmlFor="wd-your-databases">Databases</label>
      <br />
      <input type="checkbox" id="wd-your-cloud" />
      <label htmlFor="wd-your-cloud">Cloud deployment</label>
      <br />

      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="SE">Software Engineering</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select
        multiple
        id="wd-your-topics"
        defaultValue={["REACT", "NODE"]}
      >
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="REACT">React</option>
        <option value="NODE">Node.js</option>
        <option value="MONGO">MongoDB</option>
      </select>
      <br />

      <label htmlFor="wd-your-email">School email:</label>
      <input
        id="wd-your-email"
        type="email"
        size={30}
        defaultValue="your.actual.email@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
      <input
        id="wd-your-grad-year"
        type="number"
        defaultValue={2028}
        min={2026}
        max={2032}
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date:</label>
      <input id="wd-your-start-date" type="date" defaultValue="2026-09-01" />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0-10):
      </label>
      <input
        id="wd-your-excitement"
        type="range"
        min={0}
        max={10}
        defaultValue={9}
      />
      <br />

      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
