import z from 'zod';

export const contactLinkSchema = z.object({
    content: z.string(),
    href: z.string(),
    variant: z
        .enum(['standalone', 'navigation', 'inline'])
        .default('standalone'),
    target: z
        .enum(['self', 'top', 'blank', 'parent'])
        .default('self')
        .transform((v) => `_${v}`),
    rel: z.enum(['noopener', 'noreferrer', 'nofollow']).optional(),
});

export type ContactLink = z.infer<typeof contactLinkSchema>;
