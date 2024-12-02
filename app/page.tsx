import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import Dashboard from '../components/dashboard/page';
import RedirectButton from '@/components/RedirectBtn';
export default async function Home () {
  const session = await getServerSession(authOptions);
  return (
    <>
     {session ? (
      <Dashboard />
     )
    : (
      <div>
        <h1>You&apos;re not logged in</h1>
        <RedirectButton />
      </div>
      )}
    </>
  );
}
