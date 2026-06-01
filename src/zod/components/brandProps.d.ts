import z from 'zod';
export declare const pictureSchema: z.ZodObject<{
    src: z.ZodURL;
    alt: z.ZodString;
    title: z.ZodString;
}, z.z.core.$strip>;
export declare const brandPropsSchema: z.ZodObject<{
    image: z.ZodObject<{
        src: z.ZodURL;
        alt: z.ZodString;
        title: z.ZodString;
    }, z.z.core.$strip>;
    ariaLabel: z.ZodString;
}, z.z.core.$strip>;
export type BrandProps = z.infer<typeof brandPropsSchema>;
export type Picture = z.infer<typeof pictureSchema>;
//# sourceMappingURL=brandProps.d.ts.map