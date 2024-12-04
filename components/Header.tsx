"use client"
import { signOut, useSession } from 'next-auth/react';
import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button, buttonVariants } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';

const Header = () => {
    const { data: session, status } = useSession();
    let user = session?.user;

    return (
        <div className='flex flex-row w-full items-center justify-between border-b-[1px] border-[#dbdbdb] px-6 py-2'>
            <h1 className='text-2xl font-medium'>Hello, <span className=' capitalize'> {session?.user.name} </span> </h1>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className='flex flex-row items-center'>
                        <Image
                            src={user?.image ?? '/placeholder-user.jpg'}
                            width={36}
                            height={36}
                            alt="Avatar"
                            className="overflow-hidden rounded-full"
                        />
                        <Button
                            variant="default"
                            size="icon"
                            className=" hover:bg-transparent bg-white"
                        >
                            <ChevronDownIcon color='black' />
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
                            <Button className={`${buttonVariants({ size: 'sm', variant: 'destructive' })}`} onClick={() => signOut({ callbackUrl: "/sign-in" })}>Sign out</Button>
                        </DropdownMenuItem>
                    ) : (
                        <DropdownMenuItem>
                            <Link href="/sign-in">Sign In</Link>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
};

export default Header;
