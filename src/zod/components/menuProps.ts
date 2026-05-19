import z from "zod";

export const menuPropsSchema = z.object({
  ariaLabel: z.string(),
});

export type MenuProps = z.infer<typeof menuPropsSchema>;
