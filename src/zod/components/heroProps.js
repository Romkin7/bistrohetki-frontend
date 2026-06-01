import z from 'zod';
export const heroPropsSchema = z.object({
    backgroundImageUrl: z.string(),
    ariaLabel: z.string().optional(),
});
//# sourceMappingURL=heroProps.js.map