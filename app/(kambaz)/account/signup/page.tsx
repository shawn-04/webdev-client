"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emptyUser, useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const input = "mb-3 block w-full rounded border border-neutral-300 px-3 py-2";

  const signup = () => {
    if (!username || !password) return;
    setCurrentUser({ ...emptyUser, _id: crypto.randomUUID(), username, password, role: "STUDENT" });
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen">
      <h3 className="text-3xl mb-4">Sign up</h3>
      <input id="wd-username" placeholder="username" className={input} value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <input id="wd-password" placeholder="password" type="password" className={input} value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button type="button" onClick={signup} id="wd-signup-btn"
        className="mb-3 w-full rounded bg-blue-600 px-3 py-2 text-white">Sign up</button>
      <Link href="/account/signin" id="wd-signin-link" className="text-blue-600">Sign in</Link>
    </div>
  );
}
