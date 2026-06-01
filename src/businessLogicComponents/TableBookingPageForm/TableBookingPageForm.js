import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex } from '@chakra-ui/react';
import React, {} from 'react';
import { useLoaderData } from 'react-router';
import NumberOfGuestsSelect from '../NumberOfGuestsSelect/NumberOfGuestsSelect';
import styles from './TableBookingPageForm.module.css';
import Button from '@/shared/Button/Button';
import Form from '@/shared/Form/Form';
import { tableBookingPageFormSchema } from '@/zod/businessLogic/tableBookingPageForm';
const TableBookingPageForm = ({ guests: guestsValue, handleReset, setGuests, handleSubmit, }) => {
    const tableBookingPageData = useLoaderData();
    const { guests } = tableBookingPageFormSchema.parse({
        guests: guestsValue,
    });
    return (_jsxs(Form, { onSubmit: handleSubmit, ariaLabel: "Vieraiden m\u00E4\u00E4r\u00E4 -lomake", action: "/api/table-booking", layout: "column", method: "post", className: styles.tableBookingPageForm, onReset: handleReset, children: [_jsx(NumberOfGuestsSelect, { guests: guests, setGuests: setGuests }), _jsxs(Flex, { justifyContent: "center", alignItems: "center", direction: "row", gap: "3", children: [_jsx(Button, { type: tableBookingPageData.numberOfGuestsForm?.resetButton
                            ?.type, ariaLabel: tableBookingPageData.numberOfGuestsForm?.resetButton
                            ?.ariaLabel, shape: "rounded", size: "l", variant: "secondary", disabled: tableBookingPageData.numberOfGuestsForm?.resetButton
                            ?.disabled, children: tableBookingPageData.numberOfGuestsForm?.resetButton
                            ?.buttonText }), _jsx(Button, { type: tableBookingPageData.numberOfGuestsForm?.submitButton
                            ?.type, ariaLabel: tableBookingPageData.numberOfGuestsForm?.submitButton
                            ?.ariaLabel, shape: "rounded", size: "l", variant: "primary", disabled: tableBookingPageData.numberOfGuestsForm?.submitButton
                            ?.disabled, children: tableBookingPageData.numberOfGuestsForm?.submitButton
                            ?.buttonText })] })] }));
};
export default TableBookingPageForm;
//# sourceMappingURL=TableBookingPageForm.js.map