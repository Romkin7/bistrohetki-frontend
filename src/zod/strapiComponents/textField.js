import z from 'zod';
export const strapiTextFieldSchema = z.object({
    id: z.number(),
    placeholder: z.string(),
    name: z.string(),
    maxlength: z.number().optional(),
    minlength: z.number().optional(),
    readonly: z.boolean().default(false),
    required: z.boolean().default(false),
    disabled: z.boolean().default(false),
    autofocus: z.boolean().default(false),
    type: z.enum(['text', 'email', 'search', 'url', 'tel', 'password']),
    ariaLabel: z.string(),
    label: z.string(),
    htmlFor: z.string(),
});
//# sourceMappingURL=textField.js.map