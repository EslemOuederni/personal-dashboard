"use client"
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { IProject } from '@/app/types/project';
import { useState } from 'react';
import UpdateProjectForm from './UpdateProject/updateProject';


const UpdateButton = ({ project }: { project: IProject }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false); // Close the dialog
    };
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary">Update Project</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-2">Update Project</DialogTitle>
                </DialogHeader>
                <UpdateProjectForm initialData={project} onSuccess={handleClose} />
            </DialogContent>
        </Dialog>
    );
};

export default UpdateButton;
