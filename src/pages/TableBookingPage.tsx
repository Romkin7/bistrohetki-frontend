import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import { useState } from 'react';
import type { ChangeEvent, FC, FormEvent } from 'react';
import Markdown from 'react-markdown';
import { useLoaderData } from 'react-router';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styles from '../App.module.css';
import TableBookingPageForm from '@/businessLogicComponents/TableBookingPageForm/TableBookingPageForm';
import { useLocale } from '@/hooks/useLocale';
import { useTranslator } from '@/hooks/useTranslator';
import DatepickerWithRange from '@/shared/DatepickerWithRange/DatepickerWithRange';
import Heading from '@/shared/Heading/Heading';
import Link from '@/shared/Link/Link';
import TextField from '@/shared/TextField/TextField';

import type { TableBookingForm } from '@/zod/businessLogic/tableBookingForm';
import type { TableBookingPageData } from '@/zod/pages/tableBookingPageData';

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

const strapiBookingEndpoint = import.meta.env.VITE_STRAPI_BOOKING_ENDPOINT;

const TableBookingPage: FC = () => {
    const tableBookingPageData: TableBookingPageData = useLoaderData();
    const { appLocale } = useLocale();
    const translate = useTranslator();
    const [tableBookingForm, setTableBookingForm] = useState<TableBookingForm>(
        () => resetTableBookingForm(),
    );
    const [submissionMessage, setSubmissionMessage] = useState('');
    const [submissionError, setSubmissionError] = useState('');

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
            if (!strapiBookingEndpoint) {
                throw new Error(
                    'VITE_STRAPI_BOOKING_ENDPOINT is not configured',
                );
            }

            const response = await fetch(strapiBookingEndpoint, {
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
                        <TableBookingPageForm
                            handleSubmit={handleSubmit}
                            handleReset={handleReset}
                            guests={guests}
                            handleGuestsChange={handleGuestsChange}
                        >
                            <DatepickerWithRange
                                selectedDate={null}
                                value={date ?? ''}
                                onChange={handleChange}
                                time={time ?? ''}
                                onTimeChange={(updatedTime) =>
                                    setTableBookingForm((currentForm) => ({
                                        ...currentForm,
                                        time: updatedTime,
                                    }))
                                }
                                ariaLabel="test"
                                locale="fi"
                                today={new Date()}
                                htmlFor="htmlFor"
                                label="Päivä"
                                name="date"
                                type="text"
                                autoFocus={false}
                                readOnly={true}
                                required={true}
                                disabled={false}
                            />
                            <TextField
                                type="text"
                                value={name ?? ''}
                                onInput={handleChange}
                                htmlFor="name"
                                label="Nimi"
                                name="name"
                                placeholder="Enter your name"
                                ariaLabel="Name"
                                required
                            />
                            <TextField
                                value={email ?? ''}
                                onInput={handleChange}
                                htmlFor="email"
                                label="Sähköposti"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                ariaLabel="Email"
                                required
                            />
                            <TextField
                                value={phone ?? ''}
                                onInput={handleChange}
                                htmlFor="phone"
                                label="Puhelinnumero"
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                ariaLabel="Phone"
                                required
                            />
                            <TextField
                                type="text"
                                value={message ?? ''}
                                onInput={handleChange}
                                htmlFor="message"
                                label="Viesti"
                                name="message"
                                placeholder="Enter message"
                                ariaLabel="Viestikenttä"
                            />
                        </TableBookingPageForm>
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
