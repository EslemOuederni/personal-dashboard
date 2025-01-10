"use server";
import { auth } from "@/lib/auth";
import { IProject } from "../types/project";
import { z } from "zod";
import { ProjectFormSchema } from "@/components/projects/AddProject/projectFormValidation";

export default async function UserProjects (): Promise<IProject[] | undefined> {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    console.log("userid", userId)
    if (!userId) {
      console.error("User not authenticated.");
    }

    const res = await fetch(
      `http://localhost:3000/api/project/by-user?userId=${userId}`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
      cache: "force-cache",
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

export async function addProject (formData: ProjectFormSchema) {
  try {
    // Get the session and userId
    const session = await auth();
    const userId = session?.user.id;

    if (!userId) {
      console.error("User is not logged in.");
      alert("You need to be logged in to add a project.");
      return;
    }

    // Add the userId to the formData
    const data = { ...formData, userId };
    const response = await fetch("http://localhost:3000/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Project added successfully!");
    } else {
      console.log(result?.message || "Failed to add project.");
    }
  } catch (error) {
    console.error(error);
    console.log("An error occurred while adding the project.");
  }
}

export async function deleteProject (projectId: string) {
  try {

    const session = await auth()
    const user = session?.user

    if (!user) {
      console.error("User is not logged in.");
      alert("You need to be logged in to add a project.");
      return;
    }

    const res = await fetch(`http://localhost:3000/api/project/${projectId}`, {
      method: "DELETE"
    })

    if (!res.ok) {
      throw new Error("Something went wrong")
    }

  } catch (error) {
    console.error(error);
    console.log("An error occurred while deleting the project.");
  }
}

export async function UpdateProject (projectId: string, formData: ProjectFormSchema) {
  try {
    // Get the session and userId
    const session = await auth();
    const userId = session?.user.id;

    if (!userId) {
      console.error("User is not logged in.");
      alert("You need to be logged in to add a project.");
      return;
    }

    // Add the userId to the formData
    const data = { ...formData, userId };
    console.log(data)

    const response = await fetch(`http://localhost:3000/api/project/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Project added successfully!");
    } else {
      console.log(result?.message || "Failed to add project.");
    }

  } catch (error) {
    console.log(error)
  }
}
