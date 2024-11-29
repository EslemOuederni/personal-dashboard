import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export default async function Home () {
  // const session = await getServerSession(authOptions);
  return (
    <>
      <h1>Personal Dashboard App</h1>
      <p>A personal dashboard App to manage your projects and tasks</p>
    </>
  );
}
