"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <button
        onClick={() => signIn("google")}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
