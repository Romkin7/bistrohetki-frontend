import z from "zod";

export const linkSchema = z.object({
  id: z.number(),
  documentId: z.string().optional(),
  content: z.string(),
  href: z.string(),
  isExternal: z.boolean().default(false),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  publishedAt: z.date().optional(),
  locale: z.enum(["fi-FI", "en-EN", "es-ES"]).default("fi-FI"),
  variant: z.enum(["standalone", "navigation", "inline"]),
  target: z
    .enum(["self", "top", "blank", "parent"])
    .default("self")
    .transform((value) => `_${value}`),
  rel: z.enum(["noopener", "noreferrer", "nofollow"]),
});

export type Link = z.infer<typeof linkSchema>;
export type LinkVariant = Link["variant"];
