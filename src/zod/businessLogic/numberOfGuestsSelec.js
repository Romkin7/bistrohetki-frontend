import z from 'zod';
export const numberOfGuestsSelectSchema = z.object({
    guests: z.number().int().min(0).max(12),
});
//# sourceMappingURL=numberOfGuestsSelec.js.map