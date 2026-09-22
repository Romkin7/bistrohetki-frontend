import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import { addDays, format } from 'date-fns';
import { useEffect, useState } from 'react';
import type { ChangeEvent, FC, FormEvent } from 'react';
import Markdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useLoaderData } from 'react-router';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styles from '../App.module.css';
import { fetchStrapiData } from '@/api/fetchStrapiData';
import TableBookingPageForm from '@/businessLogicComponents/TableBookingPageForm/TableBookingPageForm';
import { useLocale } from '@/hooks/useLocale';
import { useTranslator } from '@/hooks/useTranslator';
import DatepickerWithRange from '@/shared/DatepickerWithRange/DatepickerWithRange';
import Heading from '@/shared/Heading/Heading';
import Link from '@/shared/Link/Link';
import TextField from '@/shared/TextField/TextField';

import { setBookableDays } from '@/store/slices/bookableDaysSlice';
import type { RootState } from '@/store/store';
import type { TableBookingForm } from '@/zod/businessLogic/tableBookingForm';
import type { BookableDay } from '@/zod/collections/bookableDay';
import type { TableBookingPageData } from '@/zod/pages/tableBookingPageData';

const BOOKABLE_DAYS_COUNT = 42;
const BOOKABLE_TIMES_ENDPOINT = import.meta.env
    .VITE_STRAPI_BOOKABLE_TIMES_ENDPOINT;

type BookableTimeResponse = {
    date: string;
    startTime: string;
    capacity: number;
    isBooked: boolean;
    bookable_day?: {
        weekday?: string;
        opensAt?: string;
        closesAt?: string;
        isClosed?: boolean;
    } | null;
};

// keep: the page owns the fetch for 42 consecutive bookable days
async function fetchBookableDays(
    startDate: Date,
    numberOfDays: number,
): Promise<BookableDay[]> {
    if (!BOOKABLE_TIMES_ENDPOINT) {
        throw new Error(
            'VITE_STRAPI_BOOKABLE_TIMES_ENDPOINT is not configured',
        );
    }

    const endDate = addDays(startDate, numberOfDays - 1);
    const params = new URLSearchParams({
        'filters[date][$gte]': format(startDate, 'yyyy-MM-dd'),
        'filters[date][$lte]': format(endDate, 'yyyy-MM-dd'),
        'populate[bookable_day]': 'true',
        'pagination[pageSize]': String(numberOfDays),
        'sort[0]': 'date:asc',
        'sort[1]': 'startTime:asc',
    });
    const response = await fetchStrapiData(
        `${BOOKABLE_TIMES_ENDPOINT}?${params.toString()}`,
    );
    const days = new Map<string, BookableDay>();

    (response.data as BookableTimeResponse[]).forEach((bookableTime) => {
        if (bookableTime.isBooked || bookableTime.capacity <= 0) {
            return;
        }

        const existingDay = days.get(bookableTime.date);
        if (existingDay) {
            existingDay.times.push(bookableTime.startTime.slice(0, 5));
            return;
        }

        days.set(bookableTime.date, {
            date: bookableTime.date,
            times: [bookableTime.startTime.slice(0, 5)],
            weekday: bookableTime.bookable_day?.weekday,
            opensAt: bookableTime.bookable_day?.opensAt,
            closesAt: bookableTime.bookable_day?.closesAt,
            isClosed: bookableTime.bookable_day?.isClosed,
        });
    });

    return [...days.values()];
}

function resetTableBookingForm(): TableBookingForm {
    return {
        guests: 0,
        name: '',
        email: '',
        phone: '',
        date: '',
        message: '',
        time: '',
    };
}

function buildStrapiTableBookingPayload(
    form: TableBookingForm,
    language: string,
) {
    return {
        data: {
            language,
            guests: String(form.guests ?? ''),
            name: form.name?.trim() ?? '',
            email: form.email?.trim() ?? '',
            phone: form.phone?.trim() ?? '',
            reservationDate: form.date?.trim() ?? '',
            reservationTime: form.time ? `${form.time}:00` : '',
            message: form.message?.trim() ?? '',
        },
    };
}

const STRAPI_BOOKING_ENDPOINT = import.meta.env.VITE_STRAPI_BOOKING_ENDPOINT;

const TableBookingPage: FC = () => {
    const tableBookingPageData: TableBookingPageData = useLoaderData();
    const { appLocale } = useLocale();
    const translate = useTranslator();
    const dispatch = useDispatch();
    const bookableDays = useSelector((state: RootState) => state.bookableDays);
    const [tableBookingForm, setTableBookingForm] = useState<TableBookingForm>(
        () => resetTableBookingForm(),
    );
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [submissionError, setSubmissionError] = useState('');

    // keep: fetch availability in the page and store it in Redux for the calendar
    useEffect(() => {
        const loadBookableDays = async () => {
            try {
                const days = await fetchBookableDays(
                    new Date(),
                    BOOKABLE_DAYS_COUNT,
                );
                dispatch(setBookableDays(days));
            } catch (error) {
                console.error('Failed to fetch bookable days:', error);
            }
        };

        void loadBookableDays();
    }, [dispatch]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmissionMessage('');
        setSubmissionError('');

        const formData = Object.fromEntries(
            new FormData(event.target as HTMLFormElement),
        );
        console.log('handleSubmit form ', formData);

        const payload = buildStrapiTableBookingPayload(
            tableBookingForm,
            appLocale,
        );
        console.log('Strapi payload:', payload);

        try {
            if (!STRAPI_BOOKING_ENDPOINT) {
                throw new Error(
                    'VITE_STRAPI_BOOKING_ENDPOINT is not configured',
                );
            }

            const response = await fetch(STRAPI_BOOKING_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorDetails = await response.text();
                throw new Error(
                    `Strapi request failed: ${response.status} ${errorDetails}`,
                );
            }

            const result = await response.json();
            console.log('Saved to Strapi:', result);
            setTableBookingForm(() => resetTableBookingForm());
            setSubmissionMessage(
                translate('tableBooking', 'submission_success', {}),
            );
        } catch (error) {
            console.error('Failed to send booking to Strapi:', error);
            setSubmissionError(
                translate('tableBooking', 'submission_error', {}),
            );
        }
    };

    const handleReset = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTableBookingForm(() => resetTableBookingForm());
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTableBookingForm({
            ...tableBookingForm,
            [event.target.name]: event.target.value,
        });
    };

    const handleGuestsChange = (updatedGuests: number) => {
        setTableBookingForm({
            ...tableBookingForm,
            guests: updatedGuests,
        });
        return updatedGuests;
    };

    const { guests, date, time, name, email, phone, message } =
        tableBookingForm;
    const availableTimes = tableBookingPageData.availableTimes.map((item) =>
        item.time.slice(0, 5),
    );
    // keep: Strapi supplies one localized TextField entry for each booking input
    const inputValues = { name, email, phone, message };

    return (
        <section>
            <Flex direction="column" align="center" justify="center" mb={8}>
                <Heading
                    tag="h1"
                    variant="title-1"
                    color="dark"
                    ariaLabel={tableBookingPageData?.mainTitle}
                >
                    {tableBookingPageData?.mainTitle}
                </Heading>
            </Flex>
            <Flex direction="column" align="center" justify="center" mb={6}>
                <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={4}>
                    <GridItem h="100%" className={styles.yellowBackground}>
                        <div className={styles.tableBookingFormContainer}>
                            <TableBookingPageForm
                                handleSubmit={handleSubmit}
                                handleReset={handleReset}
                                guests={guests}
                                handleGuestsChange={handleGuestsChange}
                            >
                                <DatepickerWithRange
                                    selectedDate={null}
                                    bookableDays={bookableDays}
                                    availableTimes={availableTimes}
                                    value={date ?? ''}
                                    onChange={handleChange}
                                    time={time ?? ''}
                                    timeLabel={translate(
                                        'tableBooking',
                                        'time_label',
                                        {},
                                    )}
                                    timeAriaLabel={translate(
                                        'tableBooking',
                                        'time_label',
                                        {},
                                    )}
                                    onTimeChange={(updatedTime) =>
                                        setTableBookingForm((currentForm) => ({
                                            ...currentForm,
                                            time: updatedTime,
                                        }))
                                    }
                                    ariaLabel={translate(
                                        'tableBooking',
                                        'date_aria_label',
                                        {},
                                    )}
                                    locale={appLocale}
                                    today={new Date()}
                                    htmlFor="htmlFor"
                                    label={
                                        tableBookingPageData.datePickerWithRange
                                            .label
                                    }
                                    name="date"
                                    type="text"
                                    autoFocus={false}
                                    readOnly={true}
                                    required={true}
                                    disabled={false}
                                />
                                {tableBookingPageData.numberOfGuestsForm.Input.map(
                                    (input) => (
                                        <TextField
                                            key={input.id}
                                            value={
                                                inputValues[
                                                    input.name as keyof typeof inputValues
                                                ] ?? ''
                                            }
                                            onInput={handleChange}
                                            htmlFor={input.htmlFor}
                                            label={input.label}
                                            name={input.name}
                                            placeholder={input.placeholder}
                                            type={input.type}
                                            ariaLabel={input.ariaLabel}
                                            required={input.required}
                                        />
                                    ),
                                )}
                            </TableBookingPageForm>
                        </div>
                        {submissionMessage && (
                            <p role="status">{submissionMessage}</p>
                        )}
                        {submissionError && (
                            <p role="alert">{submissionError}</p>
                        )}
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            mt="10"
                            mb="6"
                        >
                            <Markdown
                                rehypePlugins={[rehypeRaw]}
                                remarkPlugins={[remarkGfm]}
                            >
                                {tableBookingPageData?.tableBookingInfo}
                            </Markdown>

                            {tableBookingPageData?.ContactLink && (
                                <Link
                                    href={tableBookingPageData.ContactLink.href}
                                    variant={
                                        tableBookingPageData.ContactLink.variant
                                    }
                                    color="medium"
                                >
                                    {tableBookingPageData.ContactLink.content}
                                </Link>
                            )}
                        </Flex>

                        <Flex justify="center" mb="8" align="center">
                            <Image
                                width="30%"
                                src={tableBookingPageData?.logo?.url}
                                alt={
                                    tableBookingPageData?.logo
                                        ?.alternativeText || 'Hetki logo'
                                }
                                fit="contain"
                                aria-label={
                                    tableBookingPageData?.logo
                                        ?.alternativeText || 'Hetki logo'
                                }
                            />
                        </Flex>
                    </GridItem>

                    <GridItem h="100%">
                        <Image
                            objectFit="cover"
                            src={tableBookingPageData?.image?.url}
                            alt={
                                tableBookingPageData?.image?.alternativeText ||
                                'Table booking image'
                            }
                        />
                    </GridItem>
                </Grid>
            </Flex>
        </section>
    );
};

export default TableBookingPage;
