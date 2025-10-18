import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { useState, type FC } from "react";
import { IconEn, IconFi } from "../iconLibrary/esm";

const LanguageSelect: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          onClick={() => toggleDropdown(!isOpen)}
        >
          <Icon size="md">
            <IconFi />
          </Icon>
        </Button>
      </Menu.Trigger>
      {isOpen && (
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="fi">
                <Icon size="sm">
                  <IconFi />
                </Icon>
                Suomi
              </Menu.Item>
              <Menu.Item value="en">
                <Icon size="sm">
                  <IconEn />
                </Icon>
                Englanti
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      )}
    </Menu.Root>
  );
};

export default LanguageSelect;
