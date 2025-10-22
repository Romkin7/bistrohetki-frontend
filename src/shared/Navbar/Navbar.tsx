import { Flex, Group, Icon } from "@chakra-ui/react";
import { useEffect, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import ExternalLink from "../Link/ExternalLink";
import {
  IconFacebook,
  IconInstagram,
  IconTiktok,
} from "../../../iconLibrary/esm";
import toUpperCase from "../utils/toUpperCase";
import Brand from "./Brand/Barnd";
import MobileNavbarMenu from "./MobileNavbarMenu/MobileNavbarMenu";
import styles from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarMenuItem from "./NavbarMenu/NavbarMenuItem";
import { useLocalizedUrl } from "@/hooks/useLocale";
import { setSelectedLanguage } from "@/store/slices/selectedLanguage";
import type { RootState } from "@/store/store";
import type { SlimLanguageSelectModel } from "@/zod/collections/languageSelect";
import type { Global } from "@/zod/global/global";
import type { Locale } from "@/zod/locale";

const Navbar: FC = () => {
  const global = useSelector((state: RootState) => state.global as Global);
  const selectedLanguage = useSelector(
    (state: RootState) => state.selectedLanguage as SlimLanguageSelectModel
  );
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const locale = !["fi-FI", "es-ES", "en"].includes(path.split("/")[1])
    ? "fi-FI"
    : path.split("/")[1];
  useEffect(() => {
    if (selectedLanguage.locale !== locale) {
      dispatch(
        setSelectedLanguage({
          locale: locale as Locale,
          href:
            locale === "fi-FI"
              ? "/fi-FI"
              : locale === "es-ES"
                ? "/es-ES"
                : "/en",
          flagIcon:
            locale === "fi-FI" ? "fi" : locale === "es-ES" ? "es" : "en",
          id: 99,
        })
      );
    }
  }, [dispatch, locale, path, selectedLanguage]);
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
                {link.icon === "tiktok" && <IconTiktok />}
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
