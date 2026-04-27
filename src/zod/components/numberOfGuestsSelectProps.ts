import z from "zod";

export const numberOfGuestsSelectPropsSchema = z.object({});

export type numberOfGuestsSelectProps = z.infer<
  typeof numberOfGuestsSelectPropsSchema
>;
