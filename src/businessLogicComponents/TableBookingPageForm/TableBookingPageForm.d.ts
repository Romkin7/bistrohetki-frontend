import React, { type FormEvent } from 'react';
interface TableBookingPageFormProps {
    guests: number;
    setGuests: React.Dispatch<React.SetStateAction<number>>;
    handleReset: (event: FormEvent<HTMLFormElement>) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
declare const TableBookingPageForm: React.FC<TableBookingPageFormProps>;
export default TableBookingPageForm;
//# sourceMappingURL=TableBookingPageForm.d.ts.map