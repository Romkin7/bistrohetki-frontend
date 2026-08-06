import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import { useState } from 'react';
import type { ChangeEvent, FC, FormEvent } from 'react';
import Markdown from 'react-markdown';
import { useLoaderData } from 'react-router';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styles from '../App.module.css';
import TableBookingPageForm from '@/businessLogicComponents/TableBookingPageForm/TableBookingPageForm';
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
    };
}

const TableBookingPage: FC = () => {
    const tableBookingPageData: TableBookingPageData = useLoaderData();
    const [tableBookingForm, setTableBookingForm] = useState<TableBookingForm>(
        () => resetTableBookingForm(),
    );
    console.log('Table Booking Form data are: ', tableBookingForm);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = Object.fromEntries(
            new FormData(event.target as HTMLFormElement),
        );
        console.log('handleSubmit form ', formData);
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

    const { guests, date, name, email, phone, message } = tableBookingForm;

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
                                value={date}
                                onChange={handleChange}
                                ariaLabel="test"
                                locale="fi"
                                today={new Date()}
                                htmlFor="htmlFor"
                                label="label"
                                name="date"
                                type="text"
                                autoFocus={false}
                                readOnly={true}
                                required={true}
                                disabled={false}
                            />
                            <TextField
                                type="text"
                                value={name}
                                onInput={handleChange}
                                htmlFor="name"
                                label="Nimi"
                                name="name"
                                placeholder="Enter your name"
                                ariaLabel="Name"
                            />
                            <TextField
                                value={email}
                                onInput={handleChange}
                                htmlFor="email"
                                label="Sähköposti"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                ariaLabel="Email"
                            />
                            <TextField
                                value={phone}
                                onInput={handleChange}
                                htmlFor="phone"
                                label="Puhelinnumero"
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                ariaLabel="Phone"
                            />
                            <TextField
                                type="text"
                                value={message as string}
                                onInput={handleChange}
                                htmlFor="message"
                                label="Viesti"
                                name="message"
                                placeholder="Enter message"
                                ariaLabel="Viestikenttä"
                            />
                        </TableBookingPageForm>
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
