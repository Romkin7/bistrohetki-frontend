import { z } from 'zod';

import { datepickerWithRangePropsSchema } from '../components/datepickerWithRangeProps';
import { mediaSchema } from '../media';
import { strapiButtonSchema } from '../strapiComponents/button';
import { contactLinkSchema } from '../strapiComponents/contactLink';
import { menuSchema } from '../strapiComponents/menu';

import { strapiTextFieldSchema } from '../strapiComponents/textField';

export const tableBookingPageDataSchema = z.object({
    id: z.number().int().positive(),
    documentId: z.string(),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
    publishedAt: z.iso.datetime(),
    mainTitle: z.string(),
    numberOfGuestsTitle: z.string(),
    image: mediaSchema,
    ContactLink: contactLinkSchema,
    tableBookingInfo: z.string(),
    logo: mediaSchema,
    datePickerWithRange: datepickerWithRangePropsSchema,

    numberOfGuestsForm: z.object({
        action: z.string(),
        method: z.string(),
        enctype: z.string(),
        novalidate: z.boolean().optional(),
        target: z.string().optional(),
        ariaLabel: z.string(),

        submitButton: strapiButtonSchema,
        resetButton: strapiButtonSchema,
        plusButton: strapiButtonSchema,
        minusButton: strapiButtonSchema,

        numberOfGuestsInput: strapiTextFieldSchema,
        Input: z.array(strapiTextFieldSchema),
    }),

    Menu: menuSchema,
});

export type TableBookingPageData = z.infer<typeof tableBookingPageDataSchema>;
