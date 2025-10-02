import z from "zod";
import { pictureSchema } from "./pictureProps";

export const brandPropsSchema = z.object({
  image: pictureSchema,
  ariaLabel: z.string(),
});

export type BrandProps = z.infer<typeof brandPropsSchema>;
