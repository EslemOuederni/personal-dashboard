import RedirectButton from "@/components/RedirectBtn";
import Dashboard from '@/components/dashboard/page';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
export default async function Home () {
  const session = await auth()
  if (!session?.user) {
    redirect('/sign-in')
  }
  return (
    <Dashboard />
  );
}
