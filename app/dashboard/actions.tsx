import { auth } from "@/lib/auth";
import { IProject } from "../types/project";

export default async function UserProjects (): Promise<IProject[] | undefined> {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    console.log(userId);

    if (!userId) {
      console.error("User not authenticated.");
    }

    const res = await fetch(`http://localhost:3000/api/project/by-user?userId=${userId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects.");
    }

    const data: IProject[] = await res.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}

export async function getProjectById (projectId: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/project/${projectId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project.");
    }

    const data: IProject = await res.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}

export async function getProjects () {
  try {
    const res = await fetch(`http://localhost:3000/api/project`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project.");
    }

    const data: IProject[] = await res.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}