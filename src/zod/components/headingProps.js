import { z } from 'zod';
export const headingPropsSchema = z.object({
    variant: z
        .enum([
        'display-1',
        'display-2',
        'title-1',
        'title-2',
        'title-3',
        'title-4',
        'title-5',
        'title-6',
    ])
        .default('display-1'),
    tag: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).default('h1'),
    children: z.any(),
    ariaLabel: z.string(),
    color: z.enum(['dark', 'light', 'medium']).default('dark'),
});
//# sourceMappingURL=headingProps.js.map