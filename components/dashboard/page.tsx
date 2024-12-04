"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import Header from '../Header';

export const dynamic = "force-dynamic";

export default function Dashboard () {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated")
    {
      router.replace("/sign-in");
    }
  }, [status, router]);

  if (status === "loading")
  {
    return <p>Loading...</p>;
  }

  if (!session)
  {
    return null; // Avoid rendering anything until redirection completes
  }

  return (
    <div className="flex flex-col justify-start">
      <h1>Hello </h1>
    </div>
  );
}
