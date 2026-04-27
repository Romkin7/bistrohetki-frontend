import { Flex } from "@chakra-ui/react";
import React, { type FormEvent } from "react";
import NumberOfGuestsSelect from "../NumberOfGuestsSelect/NumberOfGuestsSelect";
import styles from "./TableBookingPageForm.module.css";
import Button from "@/shared/Button/Button";
import Form from "@/shared/Form/Form";
import { tableBookingPageFormSchema } from "@/zod/businessLogic/tableBookingPageForm";

interface TableBookingPageFormProps {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
  handleReset: (event: FormEvent<HTMLFormElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const TableBookingPageForm: React.FC<TableBookingPageFormProps> = ({
  guests: guestsValue,
  handleReset,
  setGuests,
  handleSubmit,
}) => {
  const { guests } = tableBookingPageFormSchema.parse({ guests: guestsValue });

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

      <Flex justifyContent="center" alignItems="center" direction="row" gap="3">
        <Button
          type="reset"
          ariaLabel="Tyhjennä"
          shape="rounded"
          size="l"
          variant="secondary"
        >
          Peruuta
        </Button>

        <Button
          type="submit"
          ariaLabel="Seuraava"
          shape="rounded"
          size="l"
          variant="primary"
        >
          Seuraava
        </Button>
      </Flex>
    </Form>
  );
};

export default TableBookingPageForm;
