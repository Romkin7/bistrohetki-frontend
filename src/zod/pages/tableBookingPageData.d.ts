import { z } from 'zod';
export declare const tableBookingPageDataSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    createdAt: z.ZodISODateTime;
    updatedAt: z.ZodISODateTime;
    publishedAt: z.ZodISODateTime;
    mainTitle: z.ZodString;
    numberOfGuestsTitle: z.ZodString;
    image: any;
    ContactLink: any;
    tableBookingInfo: z.ZodString;
    logo: any;
    numberOfGuestsForm: z.ZodObject<{
        action: z.ZodString;
        method: z.ZodString;
        enctype: z.ZodString;
        novalidate: z.ZodOptional<z.ZodBoolean>;
        target: z.ZodOptional<z.ZodString>;
        ariaLabel: z.ZodString;
        submitButton: any;
        resetButton: any;
        plusButton: any;
        minusButton: any;
        numberOfGuestsInput: any;
    }, z.core.$strip>;
    Menu: any;
}, z.core.$strip>;
export type TableBookingPageData = z.infer<typeof tableBookingPageDataSchema>;
//# sourceMappingURL=tableBookingPageData.d.ts.map