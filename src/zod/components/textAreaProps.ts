import z from 'zod';

export const textAreaPropsSchema = z.object({
    htmlFor: z.string(),
    label: z.string(),
    name: z.string(),
    placeholder: z.string(),
    ariaLabel: z.string(),
    required: z.boolean().default(false).optional(),
    disabled: z.boolean().default(false).optional(),
    readOnly: z.boolean().default(false).optional(),
    className: z.string().optional(),
});

export type TextAreaProps = z.infer<typeof textAreaPropsSchema>;
