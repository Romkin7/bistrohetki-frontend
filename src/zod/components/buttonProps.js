import z from 'zod';
export const buttonPropsSchema = z.object({
    shape: z.enum(['circle', 'rounded', 'pill', 'square']),
    disabled: z.boolean().default(false).optional(),
    size: z.enum(['s', 'l']),
    type: z.enum(['button', 'submit', 'reset']).default('button'),
    variant: z.enum(['primary', 'secondary', 'dark', 'medium', 'light']),
    className: z.string().optional(),
    ariaLabel: z.string(),
});
//# sourceMappingURL=buttonProps.js.map