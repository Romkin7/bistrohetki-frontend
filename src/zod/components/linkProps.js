import { z } from 'zod';
export const linkPropsSchema = z.object({
    href: z.string(),
    variant: z.enum(['standalone', 'inline', 'navigation']),
    children: z.any(),
    external: z.boolean().optional(),
    color: z.enum(['dark', 'light', 'medium']).default('dark'),
});
//# sourceMappingURL=linkProps.js.map