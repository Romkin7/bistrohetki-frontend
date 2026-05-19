import type { FC, PropsWithChildren } from "react";
import styles from "./AikanButton.module.css";

interface Props {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const AikanButton: FC<PropsWithChildren<Props>> = ({ children, onClick, type = "button", ariaLabel }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default AikanButton;
