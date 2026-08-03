import z from 'zod';

export const tableBookingFormSchema = z.object({
    guests: z.int().min(0).max(12),
    email: z.email(),
    name: z.string(),
    phone: z.string(),
    date: z.string(),
    message: z.string().optional(),
});

export type TableBookingForm = z.infer<typeof tableBookingFormSchema>;
