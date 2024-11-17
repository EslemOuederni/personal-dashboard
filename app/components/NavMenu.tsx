"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "bg-gray-700"
const INACTIVE_ROUTE = "hover:text-gray-400"

function AuthButton(){
    const {data : session} = useSession();
    if(session){
        return(
            <>
            {session.user?.name} <br/>
            <button onClick={()=> signOut()}>Sign Out</button>
            </>
        )
    }

    return(
        <>
        Not signed in ?
        <button onClick={()=> signIn()}>Sign In</button>
        </>
    )
}

export default function NavMenu(){
    const pathName = usePathname();
    return(
        <div>
            <AuthButton />
            <br/>
            <ul>
                <Link href="/">
                    <li className={pathName === "/" ? ACTIVE_ROUTE: INACTIVE_ROUTE }> Home </li>
                </Link>
                <Link href="/protected">
                    <li className={pathName === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE}> Protected Route</li>
                </Link>
            </ul>
        </div>
    )
}



