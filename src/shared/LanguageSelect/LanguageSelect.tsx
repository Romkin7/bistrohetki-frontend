import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { useState, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { IconEn, IconEs, IconFi } from "../iconLibrary/esm";
import { useLocalizedUrl } from "@/hooks/useLocale";
import { setSelectedLanguage } from "@/store/slices/selectedLanguage";
import type { RootState } from "@/store/store";
import type {
  LanguageSelectModel,
  SlimLanguageSelectModel,
} from "@/zod/collections/languageSelect";

const LanguageSelect: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const global = useSelector((state: RootState) => state.global);
  const selectedLanguage = useSelector(
    (state: RootState) => state.selectedLanguage as SlimLanguageSelectModel
  );
  const path = useLocation().pathname;
  const { buildUrl } = useLocalizedUrl();

  const toggleDropdown = (openState: boolean) => {
    setIsOpen(openState);
  };
  const handleClick = (lang: LanguageSelectModel) => {
    dispatch(setSelectedLanguage(lang));
    setIsOpen(false);
  };
  const navbar = global?.navbar;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          padding="1"
          size="sm"
          onClick={() => toggleDropdown(!isOpen)}
        >
          <Icon size="md">
            {selectedLanguage.flagIcon === "en" && <IconEn />}
            {selectedLanguage.flagIcon === "fi" && <IconFi />}
            {selectedLanguage.flagIcon === "es" && <IconEs />}
          </Icon>
        </Button>
      </Menu.Trigger>
      {isOpen && (
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {navbar?.languageSelectLinks.map((lang: LanguageSelectModel) => (
                <Link
                  key={lang.id}
                  to={buildUrl(path, lang.href)}
                  onClick={() => handleClick(lang)}
                >
                  <Menu.Item value={lang.href}>
                    <Icon size="sm">
                      {lang.flagIcon === "en" && <IconEn />}
                      {lang.flagIcon === "fi" && <IconFi />}
                      {lang.flagIcon === "es" && <IconEs />}
                    </Icon>
                    {lang.textContent}
                  </Menu.Item>
                </Link>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      )}
    </Menu.Root>
  );
};

export default LanguageSelect;
