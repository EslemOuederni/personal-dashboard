"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema, ProjectFormSchema } from './formSchema';
import { addProject } from '@/app/dashboard/actions';
import { useRouter } from 'next/navigation';

const AddProjectForm = () => {
    const router = useRouter();
    const form = useForm<ProjectFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            startDate: "",
            endDate: "",
            tag: "",
        }
    })

    const onSubmit = async (values: ProjectFormSchema) => {
        try {
            await addProject(values);
            console.log("Project added successfully!");
            router.refresh()
        } catch (error) {
            console.log("Failed to add project.");
        }
    }

    return (
        <>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...form.register("name")}
                        className="block w-full border rounded-md p-2 mt-1"
                    />
                    {form.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.name.message}
                        </p>
                    )}
                </div>

                {/* Start Date Field */}
                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        {...form.register("startDate")}
                        className="block w-full border rounded-md p-2 mt-1"
                    />
                    {form.formState.errors.startDate && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.startDate.message}
                        </p>
                    )}
                </div>

                {/* End Date Field */}
                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        {...form.register("endDate")}
                        className="block w-full border rounded-md p-2 mt-1"
                    />
                    {form.formState.errors.endDate && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.endDate.message}
                        </p>
                    )}
                </div>

                {/* Tag Field */}
                <div>
                    <label htmlFor="tag" className="block text-sm font-medium">
                        Tag (Optional)
                    </label>
                    <input
                        type="text"
                        id="tag"
                        {...form.register("tag")}
                        className="block w-full border rounded-md p-2 mt-1"
                    />
                    {form.formState.errors.tag && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.tag.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
                >
                    Add Project
                </button>
            </form>
        </>
    )
};

export default AddProjectForm;
