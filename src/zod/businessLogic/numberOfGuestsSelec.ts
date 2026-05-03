import z from "zod";

export const numberOfGuestsSelectSchema = z.object({
  guests: z.number().int().min(0).max(12),
  
});

export type numberOfGuestsSelecValue = z.infer<
  typeof numberOfGuestsSelectSchema
>;
