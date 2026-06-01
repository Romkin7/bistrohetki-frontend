import { z } from 'zod';
export const paragraphPropsSchema = z.object({
    variant: z.enum(['small', 'body', 'preamble']),
    color: z.enum(['dark', 'light', 'medium']).default('dark'),
});
//# sourceMappingURL=paragraphProps.js.map