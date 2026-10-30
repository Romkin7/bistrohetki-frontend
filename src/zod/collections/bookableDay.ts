import { z } from 'zod';
import { bookableTimeSchema } from './bookableTime';

const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
    'Sunnuntai',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
] as const;

export const bookableDaySchema = z.object({
    id: z.number(),
    documentId: z.string(),
    date: z.string(),
    bookable_times: z.array(bookableTimeSchema).optional(),
    weekday: z.enum(weekdays),
    opensAt: z.string(),
    closesAt: z.string(),
    isClosed: z.boolean(),
});

export type BookableDay = z.infer<typeof bookableDaySchema>;
