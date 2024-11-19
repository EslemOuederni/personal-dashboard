import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedRoute(){
    const session = await getServerSession()
    if(!session || !session.user){
        redirect("api/auth/signin");
    }

    return(
        <div>
            <p>You don&apos;t have permission to view this</p>
        </div>
    )
}