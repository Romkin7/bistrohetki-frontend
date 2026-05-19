import z from "zod";

export const formPropsSchema = z.object({
  layout: z.enum(["column", "row"]).optional(),
  state: z.enum(["error", "success"]).optional(),
  method: z.enum(["get", "post"]).default("post"),
  action: z.string(),
  encType: z
    .enum([
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain",
    ])
    .default("application/x-www-form-urlencoded")
    .optional(),
  className: z.string().optional(),
  ariaLabel: z.string(),
});

export type FormProps = z.infer<typeof formPropsSchema>;
