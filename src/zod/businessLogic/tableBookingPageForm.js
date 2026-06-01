import z from 'zod';
export const tableBookingPageFormSchema = z.object({
    guests: z.number().int().min(0).max(12),
});
//# sourceMappingURL=tableBookingPageForm.js.map