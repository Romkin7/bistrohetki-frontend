import { z } from "zod";

export const paragraphPropsSchema = z.object({
  variant: z.enum(["small", "body", "preamble"]),
  color: z.enum(["dark", "light", "medium"]).default("dark"),
});

export type ParagraphProps = z.infer<typeof paragraphPropsSchema>;
export type ParagraphVariant = ParagraphProps["variant"];
