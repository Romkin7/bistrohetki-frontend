import { Field, HStack, Input } from "@chakra-ui/react";
import clsx from "clsx";
import type { ChangeEvent, FC } from "react";
import styles from "./TextField.module.css";
import {
  textFieldPropsSchema,
  type TextFieldProps,
} from "@/zod/components/textFieldProps";

interface ITextFieldProps extends TextFieldProps {
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const TextField: FC<ITextFieldProps> = ({ onInput, value, ...rest }) => {
  const {
    label,
    htmlFor,
    name,
    placeholder,
    type,
    required,
    disabled,
    readOnly,
    ariaLabel,
    className,
    errorMessage,
  } = textFieldPropsSchema.parse(rest);
  const textFieldStyles = clsx(styles.textfield, className);
  return (
    <HStack gap="10" width="full">
      <Field.Root required={required}>
        <Field.Label className={styles.label} htmlFor={htmlFor}>
          {label}
          {required && <Field.RequiredIndicator />}
        </Field.Label>

        <Input
          id={htmlFor}
          aria-label={ariaLabel}
          readOnly={readOnly}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          name={name}
          className={textFieldStyles}
          onInput={onInput}
          value={value}
        />
        {errorMessage && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
      </Field.Root>
    </HStack>
  );
};

export default TextField;
