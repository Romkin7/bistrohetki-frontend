import z from "zod";

export const formatSchema = z.object({
  ext: z.string(),
  url: z.string(),
  hash: z.string(),
  mime: z.string(),
  name: z.string(),
  path: z.null(),
  size: z.number(),
  width: z.number(),
  height: z.number(),
  sizeInBytes: z.number(),
});

export const formatsSchema = z.object({
  large: formatSchema,
  small: formatSchema,
  medium: formatSchema,
  thumbnail: formatSchema,
});

export const mediaSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  alternativeText: z.string(),
  caption: z.string(),
  width: z.number(),
  height: z.number(),
  formats: formatsSchema,
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  size: z.number(),
  url: z.string(),
  previewUrl: z.null(),
  provider: z.string().default("aws-s3"),
  provider_metadata: z.null(),
  createdAt: z.date(),
  updatedAt: z.date(),
  publishedAt: z.date(),
});

export type Media = z.infer<typeof mediaSchema>;
