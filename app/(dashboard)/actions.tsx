import { auth } from '@/lib/auth';

export default async function UserProjects () {
    try {
        const session = await auth();
        const userId = session?.user?.id;

        if (!userId) {
            console.error("User not authenticated.");
        }

        const res = await fetch(`/api/project/by-user?userId=${userId}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch projects.");
        }

        const data = await res.json();
        return data;
    } catch (error: any) {
        console.error(error);
    };
}