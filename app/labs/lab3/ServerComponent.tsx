import fs from "fs";
import path from "path";
import os from "os";

function readFileNames(): string[] {
  try {
    const dir = path.join(process.cwd(), "app", "labs", "lab3");
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));
    if (files.length >= 3) return files.slice(0, 8);
  } catch {}
  try {
    return fs.readdirSync(process.cwd()).slice(0, 8);
  } catch {
    return [];
  }
}

export default function ServerComponent() {
  const files = readFileNames();
  const serverInfo = {
    platform: os.platform(),
    arch: os.arch(),
    nodeVersion: process.version,
    cpus: os.cpus().length,
  };
  return (
    <div id="wd-server-component">
      <h4>Server Component</h4>
      <h5>Files read on the server</h5>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
      <h5>Server Information</h5>
      <pre>{JSON.stringify(serverInfo, null, 2)}</pre>
      <hr />
    </div>
  );
}
