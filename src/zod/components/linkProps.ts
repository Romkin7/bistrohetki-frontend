import { z } from "zod";

export const linkPropsSchema = z.object({
  href: z.string(),
  variant: z.enum(["standalone", "inline", "navigation"]),
  children: z.any(),
  external: z.boolean().optional(),
  color: z.enum(["dark", "light", "medium"]).default("dark"),
});

export type LinkProps = z.infer<typeof linkPropsSchema>;
export type LinkVariant = LinkProps["variant"];
export type LinkColor = LinkProps["color"];
