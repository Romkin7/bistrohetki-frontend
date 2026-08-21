import z from 'zod';

export const timePropsSchema = z.object({
    ariaLabel: z.string(),
    label: z.string(),
    name: z.string(),
    options: z
        .array(z.string())
        .default(['15:00', '15:30', '16:00', '21:00', '21:30']),
    required: z.boolean().default(false),
    value: z.string(),
});

export type TimeProps = z.infer<typeof timePropsSchema>;
