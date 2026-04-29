import { z } from "zod";
import { mediaSchema } from "../media";

export const tableBookingPageDataSchema = z.object({
  id: z.number().int().positive(),
  documentId: z.string(), // Changed from literal to string for flexibility
  createdAt: z.iso.datetime(), // ISO datetime string
  updatedAt: z.iso.datetime(), // ISO datetime string
  publishedAt: z.iso.datetime(), // ISO datetime string
  mainTitle: z.string(),
  numberOfGuestsTitle: z.string(),
  image: mediaSchema,

  infoText: z.string().optional(),
  arrivalInstructionsLink: z.string().optional(),
  arrivalInstructionsLabel: z.string().optional(),
  logo: mediaSchema,
  // keep: form components only inside numberOfGuestsForm

  // keep: add numberOfGuestsForm as nested object
  numberOfGuestsForm: z
    .object({
      action: z.string().optional(),
      method: z.string().optional(),
      enctype: z.string().optional(),
      novalidate: z.boolean().optional(),
      target: z.string().optional(),
      ariaLabel: z.string().optional(),
      submitButton: z
        .object({
          id: z.number().optional(),
          value: z.string().optional(),
          type: z.string().optional(),
          disabled: z.boolean().optional(),
          buttonText: z.string().optional(),
          ariaLabel: z.string().optional(),
        })
        .optional(),
      // keep: add buttonText to plusButton and minusButton, max to numberOfGuestsInput
      plusButton: z
        .object({
          id: z.number().optional(),
          value: z.string().optional(),
          type: z.string().optional(),
          disabled: z.boolean().optional(),
          buttonText: z.string().optional(),
          ariaLabel: z.string().optional(),
        })
        .optional(),
      minusButton: z
        .object({
          id: z.number().optional(),
          value: z.string().optional(),
          type: z.string().optional(),
          disabled: z.boolean().optional(),
          buttonText: z.string().optional(),
          ariaLabel: z.string().optional(),
        })
        .optional(),
      numberOfGuestsInput: z
        .object({
          id: z.number().optional(),
          placeholder: z.string().optional(),
          name: z.string().optional(),
          maxlength: z.number().optional(),
          minlength: z.number().optional(),
          readonly: z.boolean().optional(),
          required: z.boolean().optional(),
          disabled: z.boolean().optional(),
          autofocus: z.boolean().optional(),
          type: z.string().optional(),
          ariaLabel: z.string().optional(),
          min: z.number().optional(),
          max: z.number().optional(),
        })
        .optional(),
    })
    .optional(),
});

// Infer the TypeScript type from the Zod schema
export type TableBookingPageData = z.infer<typeof tableBookingPageDataSchema>;
