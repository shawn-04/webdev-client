import fs from "fs";
import path from "path";
import os from "os";

function readFileNames(): string[] {
  try {
    const dir = path.join(process.cwd(), "app", "labs", "lab3");
    return fs.readdirSync(dir).filter((f) => f.endsWith(".tsx")).slice(0, 8);
  } catch {
    return [];
  }
}

export default function ServerComponent() {
  const files = readFileNames();
    const serverInfo = {
    platform: process.platform,
    arch: process.arch,
    pid: process.pid,
    nodeVersion: process.version,
    serverRenderTime: new Date().toISOString(),
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
