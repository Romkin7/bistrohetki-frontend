import type z from 'zod';
import { numberOfGuestsSelectSchema } from './numberOfGuestsSelec';

export const tableBookingNavigationSchema = numberOfGuestsSelectSchema;

export type TableBookingNavigationProps = z.infer<
    typeof tableBookingNavigationSchema
>;
