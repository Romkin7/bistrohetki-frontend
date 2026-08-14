import z from 'zod';

export const tableBookingFormSchema = z.object({
    guests: z.int().min(0).max(12),
    email: z.string().optional(),
    name: z.string().optional(),
    phone: z.string().optional(),
    date: z.string().optional(),
    message: z.string().optional(),
});

export type TableBookingForm = z.infer<typeof tableBookingFormSchema>;
