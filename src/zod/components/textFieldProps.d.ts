import z from 'zod';
export declare const textFieldPropsSchema: z.ZodObject<{
    htmlFor: z.ZodString;
    label: z.ZodString;
    name: z.ZodString;
    placeholder: z.ZodOptional<z.ZodString>;
    type: z.ZodDefault<z.ZodEnum<{
        email: "email";
        password: "password";
        text: "text";
        url: "url";
        search: "search";
        tel: "tel";
    }>>;
    required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    disabled: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    readOnly: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    className: z.ZodOptional<z.ZodString>;
    errorMessage: z.ZodOptional<z.ZodString>;
    ariaLabel: z.ZodString;
}, z.z.core.$strip>;
export type TextFieldProps = z.infer<typeof textFieldPropsSchema>;
//# sourceMappingURL=textFieldProps.d.ts.map