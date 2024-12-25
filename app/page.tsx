import RedirectButton from "@/components/RedirectBtn";
import Dashboard from '@/components/dashboard/page';
import { auth } from '@/lib/auth';
export default async function Home () {
  const session = await auth()
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
