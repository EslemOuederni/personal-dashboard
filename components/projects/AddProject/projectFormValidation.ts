import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(1, {
      message: "Project Name is required",
    }),
    startDate: z.preprocess(
      (val) =>
        typeof val === "string" || val instanceof Date ? new Date(val) : val,
      z.date().refine(
        (date) => {
          const now = new Date();
          now.setHours(0, 0, 0, 0); // Normalize to midnight for comparison
          return date >= now;
        },
        {
          message: "Start date must be today or in the future",
        }
      )
    ),
    endDate: z.preprocess(
      (val) =>
        typeof val === "string" || val instanceof Date ? new Date(val) : val,
      z.date().refine(
        (date) => {
          const now = new Date();
          now.setHours(0, 0, 0, 0); // Normalize to midnight for comparison
          return date > now;
        },
        {
          message: "End date must be in the future",
        }
      )
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
  );

export type ProjectFormSchema = z.infer<typeof formSchema>;
