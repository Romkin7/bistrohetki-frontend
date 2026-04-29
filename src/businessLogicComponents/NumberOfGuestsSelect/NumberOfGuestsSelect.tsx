import { Flex } from "@chakra-ui/react";
import type { FC } from "react";
import styles from "./NumberOfGuestsSelect.module.css";
import Button from "@/shared/Button/Button";
import TextField from "@/shared/TextField/TextField";
import { getGuestsValueText } from "@/utils/getGuestsValueText";

interface NumberOfGuestsSelectProps {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
}

const NumberOfGuestsSelect: FC<NumberOfGuestsSelectProps> = ({
  guests,
  setGuests,
}) => {
  return (
    <Flex
      justifyContent="center"
      direction="row"
      alignItems="center"
      className={styles.numberOfGuestsSelect}
    >
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
      <TextField
        htmlFor="vieraat"
        label="Vieraiden määrä"
        type="text"
        name="guests"
        ariaLabel="Vieraiden määrä"
        placeholder="Vieraiden määrä"
        value={getGuestsValueText(guests)}
        readOnly
      />

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
    </Flex>
  );
};

export default NumberOfGuestsSelect;
