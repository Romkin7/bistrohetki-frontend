import { Flex, Group, Icon } from "@chakra-ui/react";
import { useEffect, useMemo, useCallback, memo, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import ExternalLink from "../Link/ExternalLink";
import { IconFacebook, IconInstagram, IconTiktok } from "../iconLibrary/esm";
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
import type { SocialLinkModel } from "@/zod/collections/socialLinkModel";
import type { Global } from "@/zod/global/global";
import type { Locale } from "@/zod/locale";

// Memoized SocialLink component
const SocialLink = memo(({ link }: { link: SocialLinkModel }) => (
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
));

SocialLink.displayName = "SocialLink";

const Navbar: FC = () => {
  const global = useSelector((state: RootState) => state.global as Global);
  const selectedLanguage = useSelector(
    (state: RootState) => state.selectedLanguage as SlimLanguageSelectModel
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // Memoize locale calculation
  const locale = useMemo(() => {
    const pathSegment = pathname.split("/")[1];
    return ["fi-FI", "es-ES", "en"].includes(pathSegment)
      ? pathSegment
      : "fi-FI";
  }, [pathname]);

  // Memoize locale setting action
  const handleLocaleUpdate = useCallback(() => {
    if (selectedLanguage.locale !== locale) {
      const localeMap = {
        "fi-FI": { href: "/fi-FI", flagIcon: "fi" },
        "es-ES": { href: "/es-ES", flagIcon: "es" },
        en: { href: "/en", flagIcon: "en" },
      } as const;

      const { href, flagIcon } = localeMap[locale as keyof typeof localeMap];

      dispatch(
        setSelectedLanguage({
          locale: locale as Locale,
          href,
          flagIcon,
          id: 99,
        })
      );
    }
  }, [dispatch, locale, selectedLanguage.locale]);

  useEffect(() => {
    handleLocaleUpdate();
  }, [handleLocaleUpdate]);

  const { buildUrl } = useLocalizedUrl();

  // Memoize brand props
  const brandProps = useMemo(
    () => ({
      image: {
        src: global?.navbar.brandImage.url as string,
        alt: global?.navbar.brandImage.name as string,
        title: global?.navbar.brandImage.name as string,
      },
      ariaLabel: global?.navbar.brandImage.name as string,
    }),
    [global?.navbar.brandImage]
  );

  // Memoize navbar links
  const navbarLinks = useMemo(
    () =>
      global?.navbar.navbarLinks?.map((link) => (
        <NavbarMenuItem
          key={link.id}
          href={buildUrl(link.href, selectedLanguage.locale)}
          isExternal={link.isExternal}
          locale={link.locale}
          textContent={toUpperCase(link.textContent)}
          id={link.id}
        />
      )) || [],
    [global?.navbar.navbarLinks, buildUrl, selectedLanguage.locale]
  );

  // Memoize social links
  const socialLinks = useMemo(
    () =>
      global?.navbar?.socialLinks?.map((link) => (
        <SocialLink key={link.id} link={link} />
      )) || [],
    [global?.navbar?.socialLinks]
  );

  return (
    <nav className={styles.navbar}>
      <Flex>
        <Brand {...brandProps} />
        <NavbarMenu display={{ base: "none", md: "flex" }}>
          {navbarLinks}
        </NavbarMenu>
        <MobileNavbarMenu links={global?.navbar.navbarLinks} />
        <Group ml="auto">{socialLinks}</Group>
        <Flex alignItems="center" ml="4">
          <LanguageSelect />
        </Flex>
      </Flex>
    </nav>
  );
};

export default memo(Navbar);
