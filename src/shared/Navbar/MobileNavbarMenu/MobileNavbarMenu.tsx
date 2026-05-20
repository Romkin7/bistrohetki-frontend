import { Button, Flex, Menu, Portal } from '@chakra-ui/react';
import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { useLocalizedUrl } from '@/hooks/useLocale';
import type { RootState } from '@/store/store';
import type { SlimLanguageSelectModel } from '@/zod/collections/languageSelect';
import type { NavbarLink } from '@/zod/components/navbar';

interface MobileNavbarMenuProps {
    links: NavbarLink[] | undefined; // Accept navbar
}

const MobileNavbarMenu: FC<MobileNavbarMenuProps> = ({ links }) => {
    const selectedLanguage = useSelector(
        (state: RootState) => state.selectedLanguage as SlimLanguageSelectModel,
    );
    const { buildUrl } = useLocalizedUrl();

    return (
        <Flex
            ml={4}
            alignItems="center"
            justifyContent="center"
            display={{ base: 'flex', md: 'none' }}
        >
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant="outline" padding="1" size="md">
                        Menu
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            {/* Mobile menu items would go here */}
                            {links?.map((link) => (
                                <Link
                                    key={link.id}
                                    to={buildUrl(
                                        link.href,
                                        selectedLanguage.locale,
                                    )}
                                    target="_self"
                                    rel="noopener noreferrer"
                                >
                                    <Menu.Item value={link.textContent}>
                                        {link.textContent}
                                    </Menu.Item>
                                </Link>
                            ))}
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </Flex>
    );
};

export default MobileNavbarMenu;
