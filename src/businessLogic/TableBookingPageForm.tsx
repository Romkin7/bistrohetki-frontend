import { Box, Flex } from "@chakra-ui/react";
import React, { type FormEvent } from "react";
import styles from "./TableBookingPageForm.module.css";
import Button from "@/shared/Button/Button";
import Form from "@/shared/Form/Form";
import TextField from "@/shared/TextField/TextField";
import { tableBookingPageFormSchema } from "@/zod/businessLogic/tableBookingPageForm";

interface TableBookingPageFormProps {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
  handleReset: (event: FormEvent<HTMLFormElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitButton?: React.ReactNode;
  plusButton?: React.ReactNode;
  minusButton?: React.ReactNode;
  numberOfGuestsInput?: React.ReactNode;
}

const TableBookingPageForm: React.FC<TableBookingPageFormProps> = ({
  guests: guestsValue,
  handleReset,
  setGuests,
  handleSubmit,
  submitButton,
  plusButton,
  minusButton,
  numberOfGuestsInput,
}) => {
  const { guests } = tableBookingPageFormSchema.parse({ guests: guestsValue });

  return (
    <Form
      onSubmit={handleSubmit}
      ariaLabel="Vieraiden määrä -lomake"
      action="/api/table-booking"
      layout="column"
      method="post"
      // className={styles.tableBookingPageForm}
      onReset={handleReset}
    >
      <Box className={styles.tableBookingPageFormBox}>
        {minusButton ? (
          minusButton
        ) : (
          <Button
            type="button"
            size="l"
            shape="circle"
            ariaLabel="Vähennä vieraita"
            disabled={guests < 1}
            variant="secondary"
            onClick={() => setGuests((g) => Math.max(0, g - 1))}
          >
            -
          </Button>
        )}
        {numberOfGuestsInput ? (
          numberOfGuestsInput
        ) : (
          <TextField
            htmlFor="vieraat"
            label="Vieraiden määrä"
            type="text"
            name="vieraat"
            ariaLabel="Vieraiden määrä"
            placeholder="Vieraiden määrä"
            value={
              guests === 0
                ? "0 guests"
                : guests === 1
                  ? "1 guest"
                  : `${guests} guests`
            }
            readOnly
            required={false}
            disabled={false}
          />
        )}
        {plusButton ? (
          plusButton
        ) : (
          <Button
            type="button"
            size="l"
            ariaLabel="Lisää vieraita"
            disabled={guests === 12}
            shape="circle"
            variant="primary"
            onClick={() => setGuests((g) => Math.min(12, g + 1))}
          >
            +
          </Button>
        )}
      </Box>
      <Flex justify="center">
        {submitButton ? (
          submitButton
        ) : (
          <Button
            type="submit"
            ariaLabel="Seuraava"
            shape="rounded"
            size="l"
            variant="primary"
          >
            Seuraava
          </Button>
        )}
      </Flex>
    </Form>
  );
};

export default TableBookingPageForm;
