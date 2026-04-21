import { Box, Input, Flex } from "@chakra-ui/react";
import React from "react";
import Button from "@/shared/Button/Button";
import TextField from "@/shared/TextField/TextField";

interface NumberOfGuestsFormProps {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitButton?: React.ReactNode;
  plusButton?: React.ReactNode;
  minusButton?: React.ReactNode;
  numberOfGuestsInput?: React.ReactNode;
}

const NumberOfGuestsForm: React.FC<NumberOfGuestsFormProps> = ({
  guests,
  setGuests,
  handleSubmit,
  submitButton,
  plusButton,
  minusButton,
  numberOfGuestsInput,
}) => (
  <form onSubmit={handleSubmit} aria-label="Vieraiden määrä -lomake">
    <TextField type="text" />
    <TextField type="email" />
    <TextField type="search" />
    <TextField type="url" />

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
          size="square"
          aria-label="Vähennä vieraita"
          disabled={guests < 1}
          borderRadius="circle"
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
          size="square"
          aria-label="Vähennä vieraita"
          disabled={guests === 12}
          borderRadius="circle"
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
          aria-label="Seuraava"
          borderRadius="rounded"
          size="l"
          variant="primary"
        >
          Seuraava
        </Button>
      )}
    </Flex>
  </form>
);

export default NumberOfGuestsForm;
