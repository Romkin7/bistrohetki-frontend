import clsx from "clsx";
import type { FC, FormEvent, PropsWithChildren } from "react";
import styles from "./Form.module.css";
import { formPropsSchema, type FormProps } from "@/zod/components/formProps";

interface IFormProps extends FormProps, PropsWithChildren {
  onReset: (event: FormEvent<HTMLFormElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form: FC<IFormProps> = ({ children, onReset, onSubmit, ...rest }) => {
  const { action, method, encType, layout, state, ariaLabel, className } =
    formPropsSchema.parse(rest);

  const formStyles = clsx(
    styles.form,
    styles[`form--${layout}`],
    state && styles[`form--state-${state}`],
    className,
  );

  return (
    <form
      encType={encType}
      className={formStyles}
      method={method}
      onReset={onReset}
      onSubmit={onSubmit}
      aria-label={ariaLabel}
      action={action}
    >
      {children}
    </form>
  );
};

export default Form;
