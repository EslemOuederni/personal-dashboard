import { z } from "zod";

export const formSchema = z
    .object({
        name: z.string().min(1, {
            message: "Project Name is required",
        }),
        startDate: z
            .string()
            .refine(
                (val) => {
                    const date = new Date(val);
                    const now = new Date();
                    return date > now;
                },
                {
                    message: "Start date must be in the future",
                }
            ),
        endDate: z
            .string()
            .refine(
                (val) => {
                    const date = new Date(val);
                    const now = new Date();
                    return date > now;
                },
                {
                    message: "End date must be in the future",
                }
            ),
        tag: z.string().optional(),
    })
    .refine(
        (data) => {
            const startDate = new Date(data.startDate);
            const endDate = new Date(data.endDate);
            return endDate > startDate;
        },
        {
            message: "End date must be after the start date",
            path: ["endDate"],
        }
    )


export type ProjectFormSchema = z.infer<typeof formSchema>;