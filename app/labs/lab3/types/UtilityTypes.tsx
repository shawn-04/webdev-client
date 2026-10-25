type Course = { name: string; number: string; credits: number };

export default function UtilityTypes() {
  const draft: Partial<Course> = { name: "Web Development" };
  const creditsByCourse: Record<string, number> = { CS5610: 4, CS5200: 4 };
  const key: keyof Course = "number";
  const full: Course = { name: "Web Development", number: "CS5610", credits: 4 };
  return (
    <div id="wd-utility-types">
      <h4>Utility Types: Partial, Record, and keyof</h4>
      draft = {JSON.stringify(draft)}
      <br />
      creditsByCourse = {JSON.stringify(creditsByCourse)}
      <br />
      full[{key}] = {full[key]}
      <hr />
    </div>
  );
}
