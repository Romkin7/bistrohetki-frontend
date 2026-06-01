import z from 'zod';
export declare const formPropsSchema: z.ZodObject<{
    layout: z.ZodOptional<z.ZodEnum<{
        column: "column";
        row: "row";
    }>>;
    state: z.ZodOptional<z.ZodEnum<{
        error: "error";
        success: "success";
    }>>;
    method: z.ZodDefault<z.ZodEnum<{
        get: "get";
        post: "post";
    }>>;
    action: z.ZodString;
    encType: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        "application/x-www-form-urlencoded": "application/x-www-form-urlencoded";
        "multipart/form-data": "multipart/form-data";
        "text/plain": "text/plain";
    }>>>;
    className: z.ZodOptional<z.ZodString>;
    ariaLabel: z.ZodString;
}, z.z.core.$strip>;
export type FormProps = z.infer<typeof formPropsSchema>;
//# sourceMappingURL=formProps.d.ts.map