"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';

export const dynamic = "force-dynamic";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/sign-in");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; 
  }

  if (!session) {
    return null; // Avoid rendering anything until redirection completes
  }

  return (
    <div className="flex flex-col justify-start">
      <h1 className="text-3xl font-bold">Welcome to My Space {session.user?.name}</h1>
      <Image src={session.user?.image as string} alt="user image" width={100} height={100} className='rounded-full' />
      <p className="mt-5">This is a dashboard page</p>
      <Button className={`${buttonVariants({ size: 'lg', variant: 'destructive' })} mt-5`} onClick={()=> signOut({callbackUrl:"/sign-in"})}>Sign out</Button>
    </div>
  );
}
