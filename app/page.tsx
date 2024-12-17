import RedirectButton from "@/components/RedirectBtn";
import Dashboard from '@/components/dashboard/page';
import { auth } from '@/lib/auth';
import SignInPage from './sign-in/page';
import { redirect } from 'next/navigation';
export default async function Page () {
    const session = await auth()
    const user = session?.user
    if (!user) {
        redirect('/sign-in')
    } else {
        redirect('/dashboard')
    }
}
