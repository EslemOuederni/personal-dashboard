import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddProjectForm from './forms/addProject'


export default function CreateProject () {
    return (
        <Dialog>
            <DialogTrigger>
                <img src="/assets/icons/add-square.svg" className=" ml-auto" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='mb-2'>Add A New Project</DialogTitle>
                    <AddProjectForm />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )

}