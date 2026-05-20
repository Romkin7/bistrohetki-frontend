import z from 'zod';

export const pictureSchema = z.object({
    src: z.url(),
    alt: z.string(),
    title: z.string(),
});

export const brandPropsSchema = z.object({
    image: pictureSchema,
    ariaLabel: z.string(),
});

export type BrandProps = z.infer<typeof brandPropsSchema>;
export type Picture = z.infer<typeof pictureSchema>;
