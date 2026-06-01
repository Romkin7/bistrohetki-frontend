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
//# sourceMappingURL=brandProps.js.map