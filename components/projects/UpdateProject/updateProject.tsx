"use client";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateProject } from "@/app/dashboard/actions";
import { useRouter } from "next/navigation";
import CustomFromField from "@/components/CustomFromField";
import { FormFieldType } from "@/app/types/formField";
import { IProject } from '@/app/types/project';
import { formSchema, ProjectFormSchema } from '../AddProject/projectFormValidation';

const UpdateProjectForm = ({ onSuccess, initialData }: { onSuccess: () => void, initialData: IProject }) => {
    console.log("UpdateProjectForm rendered with:", initialData);
    const router = useRouter();
    const form = useForm<ProjectFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    });

    const onSubmit = async (values: ProjectFormSchema) => {
        try {
            console.log("Submitting update:", values);
            await UpdateProject(initialData._id.toString(), values);
            console.log("Project updated successfully!");
            onSuccess();
            router.refresh();
        } catch (error) {
            console.log("Failed to add project.");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <CustomFromField
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                        label="Project Name"
                        name="name"
                        placeholder="Project Name"
                        required
                    />
                    {form.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.name.message}
                        </p>
                    )}
                </div>
                <div>
                    <CustomFromField
                        control={form.control}
                        fieldType={FormFieldType.Date_PICKER}
                        label="Start Date"
                        name="startDate"
                        required
                    />
                    {form.formState.errors.startDate && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.startDate.message}
                        </p>
                    )}
                </div>
                <div>
                    <CustomFromField
                        control={form.control}
                        fieldType={FormFieldType.Date_PICKER}
                        label="End Date"
                        name="endDate"
                        required
                    />
                    {form.formState.errors.endDate && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.endDate.message}
                        </p>
                    )}
                </div>
                <div>
                    <CustomFromField
                        control={form.control}
                        fieldType={FormFieldType.INPUT}
                        label="Tag (Optional)"
                        name="tag"
                        placeholder="Tag"
                    />
                    {form.formState.errors.tag && (
                        <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.tag.message}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
                >
                    Update Project
                </button>
            </form>
        </Form>
    );
};

export default UpdateProjectForm;