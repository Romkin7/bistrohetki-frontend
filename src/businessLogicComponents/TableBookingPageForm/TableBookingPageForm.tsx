import { Flex } from '@chakra-ui/react';
import React, { type FormEvent, type PropsWithChildren } from 'react';
import { useLoaderData } from 'react-router';
import NumberOfGuestsSelect from '../NumberOfGuestsSelect/NumberOfGuestsSelect';
import styles from './TableBookingPageForm.module.css';
import Button from '@/shared/Button/Button';
import Form from '@/shared/Form/Form';
import { tableBookingPageFormSchema } from '@/zod/businessLogic/tableBookingPageForm';
import type { ButtonType } from '@/zod/components/buttonProps';
import type { TableBookingPageData } from '@/zod/pages/tableBookingPageData';

interface TableBookingPageFormProps extends PropsWithChildren {
    guests: number;
    setGuests: React.Dispatch<React.SetStateAction<number>>;
    handleReset: (event: FormEvent<HTMLFormElement>) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const TableBookingPageForm: React.FC<TableBookingPageFormProps> = ({
    guests: guestsValue,
    children,
    handleReset,
    setGuests,
    handleSubmit,
}) => {
    const tableBookingPageData: TableBookingPageData = useLoaderData();
    const { guests } = tableBookingPageFormSchema.parse({
        guests: guestsValue,
    });

    return (
        <Form
            onSubmit={handleSubmit}
            ariaLabel="Vieraiden määrä -lomake"
            action="/api/table-booking"
            layout="column"
            method="post"
            className={styles.tableBookingPageForm}
            onReset={handleReset}
        >
            <NumberOfGuestsSelect guests={guests} setGuests={setGuests} />
            {children}
            <Flex
                justifyContent="center"
                alignItems="center"
                direction="row"
                gap="3"
                width="100%"
            >
                <Button
                    className={styles.resetButton}
                    type={
                        tableBookingPageData?.numberOfGuestsForm?.resetButton
                            ?.type as ButtonType
                    }
                    ariaLabel={
                        tableBookingPageData?.numberOfGuestsForm?.resetButton
                            ?.ariaLabel as string
                    }
                    shape="rounded"
                    size="l"
                    variant="secondary"
                    disabled={
                        tableBookingPageData?.numberOfGuestsForm?.resetButton
                            ?.disabled
                    }
                >
                    {
                        tableBookingPageData?.numberOfGuestsForm?.resetButton
                            ?.buttonText
                    }
                </Button>

                <Button
                    className={styles.submitButton}
                    type={
                        tableBookingPageData?.numberOfGuestsForm?.submitButton
                            ?.type as ButtonType
                    }
                    ariaLabel={
                        tableBookingPageData?.numberOfGuestsForm?.submitButton
                            ?.ariaLabel as string
                    }
                    shape="rounded"
                    size="l"
                    variant="primary"
                    disabled={
                        tableBookingPageData?.numberOfGuestsForm?.submitButton
                            ?.disabled
                    }
                >
                    {
                        tableBookingPageData?.numberOfGuestsForm?.submitButton
                            ?.buttonText
                    }
                </Button>
            </Flex>
        </Form>
    );
};

export default TableBookingPageForm;
