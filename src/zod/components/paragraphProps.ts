import { z } from "zod";

export const paragraphPropsSchema = z.object({
  variant: z.enum(["small", "body", "preamble", "primary"]),
  children: z.any(),
  color: z.enum(["dark", "light", "medium"]).default("dark"),
  size: z.enum(["s", "m", "l"]),
  ariaLabel: z.string(),
});

export type ParagraphProps = z.infer<typeof paragraphPropsSchema>;
export type ParagraphVariant = ParagraphProps["variant"];
