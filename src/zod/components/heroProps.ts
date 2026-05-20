import z from 'zod';

export const heroPropsSchema = z.object({
    backgroundImageUrl: z.string(),
    ariaLabel: z.string().optional(),
});

export type HeroProps = z.infer<typeof heroPropsSchema>;
