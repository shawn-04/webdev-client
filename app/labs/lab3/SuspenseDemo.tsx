import { Suspense } from "react";

async function SlowMessage() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return <p>Loaded after a short delay</p>;
}

export default function SuspenseDemo() {
  return (
    <div id="wd-suspense">
      <h4>Suspense</h4>
      <Suspense fallback={<p>Loading...</p>}>
        <SlowMessage />
      </Suspense>
      <hr />
    </div>
  );
}
