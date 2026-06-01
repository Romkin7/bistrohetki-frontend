import z from 'zod';
export const textFieldPropsSchema = z.object({
    htmlFor: z.string(),
    label: z.string(),
    name: z.string(),
    placeholder: z.string().optional(),
    type: z
        .enum(['text', 'email', 'password', 'search', 'url', 'tel'])
        .default('text'),
    required: z.boolean().default(false).optional(),
    disabled: z.boolean().default(false).optional(),
    readOnly: z.boolean().default(false).optional(),
    className: z.string().optional(),
    errorMessage: z.string().optional(),
    ariaLabel: z.string(),
});
//# sourceMappingURL=textFieldProps.js.map