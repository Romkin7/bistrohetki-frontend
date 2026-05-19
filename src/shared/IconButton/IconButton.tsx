import type { FC } from "react";
import Button from "../Button/Button";

const IconButton: FC = () => {
  return (
    <Button
      type="button"
      variant="light"
      shape="square"
      size="s"
      ariaLabel=""
    ></Button>
  );
};

export default IconButton;
