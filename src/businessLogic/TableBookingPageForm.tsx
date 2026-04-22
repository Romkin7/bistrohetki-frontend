import { Box, Input, Flex } from "@chakra-ui/react";
import React, { type FormEvent } from "react";
import Button from "@/shared/Button/Button";
import Form from "@/shared/Form/Form";
// import TextField from "@/shared/TextField/TextField";

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
  guests,
  handleReset,
  setGuests,
  handleSubmit,
  submitButton,
  plusButton,
  minusButton,
  numberOfGuestsInput,
}) => (
  <Form
    onSubmit={handleSubmit}
    ariaLabel="Vieraiden määrä -lomake"
    action="/api/table-booking"
    layout="column"
    method="post"
    onReset={handleReset}
  >
    <Box
      mb={4}
      borderWidth="1px"
      borderRadius="30px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      maxW="250px"
      w="100%"
      bg="rgb(245, 222, 179)"
      mx="auto"
    >
      {/* Render custom minusButton if provided, else default */}
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
      {/* Render custom numberOfGuestsInput if provided, else default */}
      {numberOfGuestsInput ? (
        numberOfGuestsInput
      ) : (
        <Input
          type="text"
          name="vieraat"
          aria-label="Vieraiden määrä"
          placeholder="Vieraiden määrä"
          value={guests}
          minW="80px"
          h="40px"
          textAlign="center"
          fontWeight="bold"
          borderRadius="10px"
          border="none"
          bg="transparent"
          fontSize="1rem"
          readOnly
          required
        />
      )}
      {/* Render custom plusButton if provided, else default */}
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
          onClick={() => setGuests((g) => g + 1)}
        >
          +
        </Button>
      )}
    </Box>
    <Flex justify="center">
      {/* Render custom submitButton if provided, else default */}
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

export default TableBookingPageForm;
