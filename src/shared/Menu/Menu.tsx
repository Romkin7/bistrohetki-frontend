import { Flex } from "@chakra-ui/react";
import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";
import styles from "./Menu.module.css";
// import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";
import { menuPropsSchema, type MenuProps } from "@/zod/components/menuProps";

interface IMenuProps extends MenuProps, PropsWithChildren {}

const Menu: FC<IMenuProps> = ({ children, ...rest }) => {
  const { ariaLabel } = menuPropsSchema.parse(rest);
  const menuStyles = clsx(styles.menu);

  return (
    <Flex
      as="nav"
      aria-label={ariaLabel}
      alignItems="flex-start"
      justifyContent="flex-start"
      gap="2"
      width="100%"
      className={menuStyles}
      box-shadow="0 4px 10px gray"
    >
      {children}
    </Flex>
  );
};
export default Menu;
