import z from 'zod';

export const timePropsSchema = z.object({
    ariaLabel: z.string(),
    label: z.string(),
    name: z.string(),
    options: z.array(z.string()),
    required: z.boolean().default(false),
    value: z.string(),
});

export type TimeProps = z.infer<typeof timePropsSchema>;
