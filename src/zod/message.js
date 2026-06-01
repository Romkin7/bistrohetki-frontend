import { z } from 'zod';
export const messageSchema = z.object({
    text: z.string(),
    variant: z.enum(['success', 'warn', 'error', 'info']),
});
//# sourceMappingURL=message.js.map