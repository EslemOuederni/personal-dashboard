import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(1, {
      message: "Project Name is required",
    }),
    startDate: z.preprocess(
      (val) =>
        typeof val === "string" || val instanceof Date ? new Date(val) : val,
      z.date()
    ),
    endDate: z.preprocess(
      (val) =>
        typeof val === "string" || val instanceof Date ? new Date(val) : val,
      z.date()
    ),
    tag: z.array(z.string()).optional(),
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
  );

export type ProjectFormSchema = z.infer<typeof formSchema>;
