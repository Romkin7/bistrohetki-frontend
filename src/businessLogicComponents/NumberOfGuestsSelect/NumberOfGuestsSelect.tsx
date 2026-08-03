import { Flex } from '@chakra-ui/react';
import type { ChangeEvent, FC } from 'react';
import { useLoaderData } from 'react-router';
import styles from './NumberOfGuestsSelect.module.css';

import { useGetGuestsValueText } from '@/hooks/useGetGuestsValueText';
import Button from '@/shared/Button/Button';
import TextField from '@/shared/TextField/TextField';
import { numberOfGuestsSelectSchema } from '@/zod/businessLogic/numberOfGuestsSelec';
import type { TableBookingPageData } from '@/zod/pages/tableBookingPageData';

interface NumberOfGuestsSelectProps {
    guests: number;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfGuestsSelect: FC<NumberOfGuestsSelectProps> = ({
    guests: guestsValue,
    handleChange,
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
                onClick={() => handleChange((g) => Math.max(0, g - 1))}
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
                onClick={() => setGuests((g) => Math.min(12, g + 1))}
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
