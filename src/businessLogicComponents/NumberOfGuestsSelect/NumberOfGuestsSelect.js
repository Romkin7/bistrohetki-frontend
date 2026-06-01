import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex } from '@chakra-ui/react';
import { useLoaderData } from 'react-router';
import styles from './NumberOfGuestsSelect.module.css';
import { useGetGuestsValueText } from '@/hooks/useGetGuestsValueText';
import Button from '@/shared/Button/Button';
import TextField from '@/shared/TextField/TextField';
import { numberOfGuestsSelectSchema } from '@/zod/businessLogic/numberOfGuestsSelec';
const NumberOfGuestsSelect = ({ guests: guestsValue, setGuests, }) => {
    const tableBookingPageData = useLoaderData();
    const { guests } = numberOfGuestsSelectSchema.parse({
        guests: guestsValue,
    });
    const guestsValueText = useGetGuestsValueText(guests);
    return (_jsxs(Flex, { justifyContent: "center", direction: "row", alignItems: "center", className: styles.numberOfGuestsSelect, children: [_jsx(Button, { type: tableBookingPageData?.numberOfGuestsForm?.minusButton.type, size: "l", shape: "circle", ariaLabel: tableBookingPageData?.numberOfGuestsForm?.minusButton
                    .ariaLabel, disabled: guests < 1, variant: "secondary", onClick: () => setGuests((g) => Math.max(0, g - 1)), children: tableBookingPageData?.numberOfGuestsForm?.minusButton
                    .buttonText }), _jsx(TextField, { htmlFor: tableBookingPageData?.numberOfGuestsForm
                    ?.numberOfGuestsInput?.htmlFor, label: tableBookingPageData?.numberOfGuestsForm
                    ?.numberOfGuestsInput?.label, type: tableBookingPageData?.numberOfGuestsForm
                    ?.numberOfGuestsInput?.type, name: tableBookingPageData?.numberOfGuestsForm
                    ?.numberOfGuestsInput?.name, ariaLabel: tableBookingPageData?.numberOfGuestsForm
                    ?.numberOfGuestsInput?.ariaLabel, placeholder: tableBookingPageData?.numberOfGuestsForm
                    ?.numberOfGuestsInput?.placeholder, value: guestsValueText, readOnly: true }), _jsx(Button, { type: tableBookingPageData?.numberOfGuestsForm?.plusButton.type, size: "l", ariaLabel: tableBookingPageData?.numberOfGuestsForm?.plusButton
                    .ariaLabel, disabled: guests === 12, shape: "circle", variant: "primary", onClick: () => setGuests((g) => Math.min(12, g + 1)), children: tableBookingPageData?.numberOfGuestsForm?.plusButton
                    .buttonText })] }));
};
export default NumberOfGuestsSelect;
//# sourceMappingURL=NumberOfGuestsSelect.js.map