"use client"
import { deleteProject } from '@/app/dashboard/actions';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const DeleteButton = ({ projectId }: { projectId: string }) => {
    const router = useRouter()
    const handleDelete = async () => {
        try {
            await deleteProject(projectId);
            router.push("/dashboard")
        } catch (error) {
            console.error('Failed to delete project:', error);
        }
    };

    return <Button onClick={handleDelete}>Delete Project</Button>;
};

export default DeleteButton;
