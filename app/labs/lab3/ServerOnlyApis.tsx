import fs from "fs";
import path from "path";

type PackageJson = {
  name?: string;
  dependencies?: Record<string, string>;
};

export default function ServerOnlyApis() {
  let pkg: PackageJson = {};
  try {
    pkg = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8")
    );
  } catch {}
  return (
    <div id="wd-server-only-apis">
      <h4>More Server-Only APIs</h4>
      project = {pkg.name ?? "unknown"}
      <br />
      next = {pkg.dependencies?.next ?? "unknown"}
      <br />
      react = {pkg.dependencies?.react ?? "unknown"}
      <br />
      NODE_ENV = {process.env.NODE_ENV}
      <hr />
    </div>
  );
}
