import { z } from 'zod';
export declare const messageSchema: z.ZodObject<{
    text: z.ZodString;
    variant: z.ZodEnum<{
        error: "error";
        success: "success";
        warn: "warn";
        info: "info";
    }>;
}, z.core.$strip>;
export type Message = z.infer<typeof messageSchema>;
export type MessageVariant = Message['variant'];
//# sourceMappingURL=message.d.ts.map