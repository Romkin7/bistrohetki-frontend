import { z } from 'zod';

export const messageSchema = z.object({
    text: z.string(),
    variant: z.enum(['success', 'warn', 'error', 'info']),
});

// Infer the TypeScript type from the Zod schema
export type Message = z.infer<typeof messageSchema>;
export type MessageVariant = Message['variant'];
