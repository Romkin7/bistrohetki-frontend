import z from "zod";

export const buttonPropsSchema = z.object({
  borderRadius: z.enum(["circle", "rounded"]),
  disabled: z.boolean().optional(),
  size: z.enum(["s", "l", "square"]),
  type: z.enum(["button", "submit", "reset"]),
  variant: z.enum(["primary", "secondary", "dark", "medium", "light"]),
});

export type ButtonProps = z.infer<typeof buttonPropsSchema>;
