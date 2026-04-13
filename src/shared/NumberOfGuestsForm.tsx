import { Box, Button, Input, Flex } from "@chakra-ui/react";
import React from "react";

interface NumberOfGuestsFormProps {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitButton?: React.ReactNode;
  plusButton?: React.ReactNode;
  minusButton?: React.ReactNode;
  numberOfGuestsInput?: React.ReactNode;
  getGuestLabel: (count: number) => string;
}

const NumberOfGuestsForm: React.FC<NumberOfGuestsFormProps> = ({
  guests,
  setGuests,
  handleSubmit,
  submitButton,
  plusButton,
  minusButton,
  numberOfGuestsInput,
  getGuestLabel,
}) => (
  <form onSubmit={handleSubmit} aria-label="Vieraiden määrä -lomake">
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
          aria-label="Vähennä vieraita"
          disabled={guests <= 1}
          borderRadius="50%"
          borderWidth="2px"
          w="50px"
          h="50px"
          fontSize="1.25rem"
          color="white"
          _hover={{ bg: "rgb(120, 80, 40)" }}
          bg={guests > 1 ? "rgb(101, 67, 33)" : "rgb(210, 180, 140)"}
          outline={guests >= 1 ? "2px solid #fff" : "2px solid #d2b48c"}
          outlineOffset={guests > 1 ? "-6px" : "-6px"}
          cursor={guests <= 1 ? "not-allowed" : "pointer"}
          onClick={() => setGuests((g) => Math.max(1, g - 1))}
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
          value={`${guests} ${getGuestLabel(guests)}`}
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
          aria-label="Lisää vieraita"
          borderRadius="50%"
          borderWidth="2px"
          w="50px"
          h="50px"
          fontSize="1.25rem"
          color="white"
          bg="rgb(101, 67, 33)"
          _hover={{ bg: "rgb(120, 80, 40)" }}
          outline={guests >= 1 ? "2px solid #fff" : undefined}
          outlineOffset={guests >= 1 ? "-6px" : undefined}
          cursor="pointer"
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
          mb="1rem"
          borderWidth="1px"
          borderRadius="30px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxW="250px"
          w="100%"
          h="50px"
          fontWeight="bold"
          fontSize="1.125rem"
          color="white"
          bg="rgb(101, 67, 33)"
          border="1px solid #654321"
          _hover={{ bg: "rgb(120, 80, 40)" }}
          cursor={guests < 1 ? "not-allowed" : "pointer"}
        >
          Seuraava
        </Button>
      )}
    </Flex>
  </form>
);

export default NumberOfGuestsForm;
