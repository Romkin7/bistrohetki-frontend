import { Flex } from "@chakra-ui/react";
import { type FC } from "react";
import styles from "./NavbarMenu.module.css";

const NavbarMenu: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      className={styles.navbarMenu}
    >
      {children}
    </Flex>
  );
};

export default NavbarMenu;
