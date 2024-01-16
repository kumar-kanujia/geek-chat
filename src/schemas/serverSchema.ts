import { z } from "zod";

export const createServerFormSchema = z.object({
  name: z
    .string()
    .min(2, "Server name is required")
    .max(20, "Reached max length of 20 characters"),
  imageUrl: z.string().url("Invalid image url"),
});
