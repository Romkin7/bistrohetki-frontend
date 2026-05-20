import z from 'zod';

export const tableBookingPageFormSchema = z.object({
    guests: z.number().int().min(0).max(12),
});

export type TableBookingPageFormValues = z.infer<
    typeof tableBookingPageFormSchema
>;
