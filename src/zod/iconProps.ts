import z from "zod";

export const iconPropsSchema = z.object({
  ariaLabel: z.string().optional(),
  className: z.string().optional(),
  size: z.enum(["sm", "md"]).optional(),
});

export type IconProps = z.infer<typeof iconPropsSchema>;
