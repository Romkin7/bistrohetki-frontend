import { z } from "zod";

const sourceSchema = z.object({
  media: z.string().optional(),
  srcSet: z.string(),
});

export const pictureSchema = z.object({
  src: z.string(),
  alt: z.string(),
  title: z.string(),
  sources: z.array(sourceSchema).optional(),
});

export const picturePropsSchema = z.object({
  image: pictureSchema,
});

export type PictureProps = z.infer<typeof picturePropsSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type ImageProps = z.infer<typeof pictureSchema>;
