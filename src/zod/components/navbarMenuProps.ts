import { z } from 'zod';

export const navbarMenuPropsSchema = z.object({
    ariaLabel: z.string().optional(),
});

export type NavbarMenuProps = z.infer<typeof navbarMenuPropsSchema>;
