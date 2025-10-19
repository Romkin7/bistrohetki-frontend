import { Flex, Group, Icon } from "@chakra-ui/react";
import { type FC } from "react";
import { useSelector } from "react-redux";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import ExternalLink from "../Link/ExternalLink";
import { IconFacebook, IconInstagram } from "../iconLibrary/esm";
import toUpperCase from "../utils/toUpperCase";
import Brand from "./Brand/Barnd";
import MobileNavbarMenu from "./MobileNavbarMenu/MobileNavbarMenu";
import styles from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarMenuItem from "./NavbarMenu/NavbarMenuItem";
import { useLocalizedUrl } from "@/hooks/useLocale";
import type { RootState } from "@/store/store";
import type { SlimLanguageSelectModel } from "@/zod/collections/languageSelect";

const Navbar: FC = () => {
  const global = useSelector((state: RootState) => state.global);
  const selectedLanguage = useSelector(
    (state: RootState) => state.selectedLanguage as SlimLanguageSelectModel
  );
  const { buildUrl } = useLocalizedUrl();
  return (
    <nav className={styles.navbar}>
      <Flex>
        <Brand
          image={{
            src: global?.navbar.brandImage.url as string,
            alt: global?.navbar.brandImage.name as string,
            title: global?.navbar.brandImage.name as string,
          }}
          ariaLabel={global?.navbar.brandImage.name as string}
        />
        <NavbarMenu display={{ base: "none", md: "flex" }}>
          {global?.navbar.navbarLinks.map((link) => (
            <NavbarMenuItem
              key={link.id}
              href={buildUrl(link.href, selectedLanguage.locale)}
              isExternal={link.isExternal}
              locale={link.locale}
              textContent={toUpperCase(link.textContent)}
              id={link.id}
            />
          ))}
        </NavbarMenu>
        <MobileNavbarMenu links={global?.navbar.navbarLinks} />
        <Group ml="auto">
          {global?.navbar?.socialLinks?.map((link) => (
            <ExternalLink
              key={link.id}
              href={link.href}
              external={true}
              variant="inline"
              color="dark"
            >
              <Icon size="lg" aria-label={link.textContent}>
                {link.icon === "facebook" && <IconFacebook />}
                {link.icon === "instagram" && <IconInstagram />}
              </Icon>
            </ExternalLink>
          ))}
        </Group>
        <Flex alignItems="center" ml="4">
          <LanguageSelect />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
