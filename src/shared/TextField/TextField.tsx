import { Input } from "@chakra-ui/react";
import clsx from "clsx";
import type { FC } from "react";
import styles from "./TextField.module.css";
import type { TextFieldProps } from "@/zod/components/textFieldProps";

const TextField: FC<TextFieldProps> = ({ type }) => {
  const textFieldStyles = clsx({
    [styles.textfield]: true,
  });
  return <Input type={type} className={textFieldStyles} />;
};

export default TextField;
