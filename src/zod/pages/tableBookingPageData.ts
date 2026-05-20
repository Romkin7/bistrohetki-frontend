import { z } from 'zod';
import { mediaSchema } from '../media';
import { strapiButtonSchema } from '../strapiComponents/button';
// import { linkSchema } from "../strapiComponents/link";
import { contactLinkSchema } from '../strapiComponents/contactLink';
import { menuSchema } from '../strapiComponents/menu';
import { strapiTextFieldSchema } from '../strapiComponents/textField';

export const tableBookingPageDataSchema = z.object({
    id: z.number().int().positive(),
    documentId: z.string(), // Changed from literal to string for flexibility
    createdAt: z.iso.datetime(), // ISO datetime string
    updatedAt: z.iso.datetime(), // ISO datetime string
    publishedAt: z.iso.datetime(), // ISO datetime string
    mainTitle: z.string(),
    numberOfGuestsTitle: z.string(),
    image: mediaSchema,
    ContactLink: contactLinkSchema,
    tableBookingInfo: z.string(),
    logo: mediaSchema,
    // keep: form components only inside numberOfGuestsForm

    // keep: add numberOfGuestsForm as nested object
    numberOfGuestsForm: z.object({
        action: z.string(),
        method: z.string(),
        enctype: z.string(),
        novalidate: z.boolean().optional(),
        target: z.string().optional(),
        ariaLabel: z.string(),

        submitButton: strapiButtonSchema,

        resetButton: strapiButtonSchema,

        // keep: add buttonText to plusButton and minusButton, max to numberOfGuestsInput
        plusButton: strapiButtonSchema,

        minusButton: strapiButtonSchema,

        numberOfGuestsInput: strapiTextFieldSchema,
    }),

    Menu: menuSchema,
});

// Infer the TypeScript type from the Zod schema
export type TableBookingPageData = z.infer<typeof tableBookingPageDataSchema>;
