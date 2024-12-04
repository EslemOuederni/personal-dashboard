import { getServerSession } from "next-auth";
import RedirectButton from "@/components/RedirectBtn";
import { authOptions } from '@/lib/auth';
import Dashboard from '@/components/dashboard/page';
export default async function Home () {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session ? (
        <Dashboard />
      ) : (
        <div>
          <h1>You&apos;re not logged in</h1>
          <RedirectButton />
        </div>
      )}
    </>
  );
}
