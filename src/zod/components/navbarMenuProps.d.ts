import { z } from 'zod';
export declare const navbarMenuPropsSchema: z.ZodObject<{
    ariaLabel: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NavbarMenuProps = z.infer<typeof navbarMenuPropsSchema>;
//# sourceMappingURL=navbarMenuProps.d.ts.map