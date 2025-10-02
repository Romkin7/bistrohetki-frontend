import clsx from "clsx";
import { type FC, type PropsWithChildren } from "react";
import styles from "./NavbarMenu.module.css";

const NavbarMenu: FC<PropsWithChildren> = ({ children }) => {
  const navBarMenuStyles = clsx({
    [styles.navbarMenu]: true, // Example of a modifier class
  });
  return <ul className={navBarMenuStyles}>{children}</ul>;
};

export default NavbarMenu;
