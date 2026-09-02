import { Flex } from '@chakra-ui/react';
import type { FC } from 'react';
import { useLoaderData } from 'react-router';
import styles from './NumberOfGuestsSelect.module.css';

import { useGetGuestsValueText } from '@/hooks/useGetGuestsValueText';
import Button from '@/shared/Button/Button';
import TextField from '@/shared/TextField/TextField';
import { numberOfGuestsSelectSchema } from '@/zod/businessLogic/numberOfGuestsSelec';
import type { TableBookingPageData } from '@/zod/pages/tableBookingPageData';

interface NumberOfGuestsSelectProps {
    guests: number;
    handleGuestsChange: (updatedGuests: number) => number;
}

const NumberOfGuestsSelect: FC<NumberOfGuestsSelectProps> = ({
    guests: guestsValue,
    handleGuestsChange,
}) => {
    const tableBookingPageData: TableBookingPageData = useLoaderData();

    const { guests } = numberOfGuestsSelectSchema.parse({
        guests: guestsValue,
    });

    const guestsValueText = useGetGuestsValueText(guests);

    return (
        <Flex
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            className={styles.numberOfGuestsSelect}
            width="50%"
        >
            <Button
                type={
                    tableBookingPageData?.numberOfGuestsForm?.minusButton.type
                }
                size="l"
                shape="circle"
                ariaLabel={
                    tableBookingPageData?.numberOfGuestsForm?.minusButton
                        .ariaLabel
                }
                disabled={guests < 1}
                variant="secondary"
                onClick={() => handleGuestsChange(Math.max(0, guests - 1))}
            >
                {
                    tableBookingPageData?.numberOfGuestsForm?.minusButton
                        .buttonText
                }
            </Button>
            <TextField
                htmlFor={
                    tableBookingPageData?.numberOfGuestsForm
                        ?.numberOfGuestsInput?.htmlFor
                }
                label={
                    tableBookingPageData?.numberOfGuestsForm
                        ?.numberOfGuestsInput?.label
                }
                type={
                    tableBookingPageData?.numberOfGuestsForm
                        ?.numberOfGuestsInput?.type
                }
                name={
                    tableBookingPageData?.numberOfGuestsForm
                        ?.numberOfGuestsInput?.name
                }
                ariaLabel={
                    tableBookingPageData?.numberOfGuestsForm
                        ?.numberOfGuestsInput?.ariaLabel
                }
                placeholder={
                    tableBookingPageData?.numberOfGuestsForm
                        ?.numberOfGuestsInput?.placeholder
                }
                value={guestsValueText}
                readOnly
            />

            <Button
                type={tableBookingPageData?.numberOfGuestsForm?.plusButton.type}
                size="l"
                ariaLabel={
                    tableBookingPageData?.numberOfGuestsForm?.plusButton
                        .ariaLabel
                }
                disabled={guests === 12}
                shape="circle"
                variant="primary"
                onClick={() => handleGuestsChange(Math.min(12, guests + 1))}
            >
                {
                    tableBookingPageData?.numberOfGuestsForm?.plusButton
                        .buttonText
                }
            </Button>
        </Flex>
    );
};

export default NumberOfGuestsSelect;
