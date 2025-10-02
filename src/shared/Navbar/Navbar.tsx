import clsx from "clsx";
import { type FC } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router";
import Brand from "./Brand/Brand";
import styles from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarMenuItem from "./NavbarMenu/NavbarMenuItem";
import type { RootState } from "@/store/store";

const Navbar: FC = () => {
  const global = useSelector((state: RootState) => state.global);
  const navbarStyles = clsx(styles.navbar, {
    [styles.navbar]: true, // Example of a modifier class
  });
  const navbarNavStyles = clsx({
    [styles.navbarNav]: true, // Example of a modifier class
  });
  return (
    <nav className={navbarStyles}>
      <RouterLink to="/">
        <Brand
          image={{
            src: global?.navbar.brandImage.url as string,
            alt: global?.navbar.brandImage.name as string,
            title: global?.navbar.brandImage.name as string,
          }}
          ariaLabel="BistroHetki logo"
        />
      </RouterLink>
      <div className={navbarNavStyles}>
        <NavbarMenu>
          {global?.navbar.navbarLinks.map((link) => (
            <NavbarMenuItem
              key={link.id}
              href={link.href}
              isExternal={link.isExternal}
              locale={link.locale}
              textContent={link.textContent}
              id={link.id}
            />
          ))}
        </NavbarMenu>
      </div>
    </nav>
  );
};

export default Navbar;
