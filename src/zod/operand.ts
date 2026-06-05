import z from 'zod';

export const operandSchema = z.enum(['add', 'sub']);
export type Operand = z.infer<typeof operandSchema>;
