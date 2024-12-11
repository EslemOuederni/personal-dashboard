"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon, EllipsisVertical } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  const { data: session, status } = useSession();
  let user = session?.user;

  return (
    <div className="flex flex-row w-full items-center justify-between px-6">
      <div className="flex flex-row items-center justify-center">
        <SidebarTrigger />
        <EllipsisVertical color={"#f1f1f1"} />
        <h1 className="text-xl font-medium">
          <span className="capitalize text-[#14213D] relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-white">
            Hello, {session?.user.name}
          </span>
        </h1>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-row items-center ">
            <Image
              src={user?.image ?? "/placeholder-user.jpg"}
              width={40}
              height={40}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
            <Button variant="default" size="icon" className=" bg-transparent">
              <ChevronDownIcon color={"black"} />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          {user ? (
            <DropdownMenuItem>
              <Button
                className={`${buttonVariants({ size: "sm", variant: "destructive" })}`}
                onClick={() => signOut({ callbackUrl: "/sign-in" })}
              >
                Sign out
              </Button>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem>
              <Link href="/sign-in">Sign In</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
