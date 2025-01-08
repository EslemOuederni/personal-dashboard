
"use client"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddProjectForm from './addProject'
import { useState } from 'react';


export default function CreateProject () {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false); // Close the dialog
    };
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
                <img src="/assets/icons/add-square.svg" className=" ml-auto" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='mb-2'>Add A New Project</DialogTitle>
                    <AddProjectForm onSuccess={handleClose} />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )

}