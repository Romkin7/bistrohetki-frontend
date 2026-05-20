import z from 'zod';
import { menuPropsSchema } from '../components/menuProps';
import { linkSchema } from './link';

export const menuSchema = z
    .object({
        MenuLink: linkSchema,
    })
    .merge(menuPropsSchema);

export type Menu = z.infer<typeof menuSchema>;
