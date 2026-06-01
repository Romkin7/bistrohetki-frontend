import z from 'zod';
export declare const strapiTextFieldSchema: z.ZodObject<{
    id: z.ZodNumber;
    placeholder: z.ZodString;
    name: z.ZodString;
    maxlength: z.ZodOptional<z.ZodNumber>;
    minlength: z.ZodOptional<z.ZodNumber>;
    readonly: z.ZodDefault<z.ZodBoolean>;
    required: z.ZodDefault<z.ZodBoolean>;
    disabled: z.ZodDefault<z.ZodBoolean>;
    autofocus: z.ZodDefault<z.ZodBoolean>;
    type: z.ZodEnum<{
        email: "email";
        password: "password";
        text: "text";
        url: "url";
        search: "search";
        tel: "tel";
    }>;
    ariaLabel: z.ZodString;
    label: z.ZodString;
    htmlFor: z.ZodString;
}, z.z.core.$strip>;
export type StrapiTextField = z.infer<typeof strapiTextFieldSchema>;
export type StrapiTextFieldType = StrapiTextField['type'];
//# sourceMappingURL=textField.d.ts.map