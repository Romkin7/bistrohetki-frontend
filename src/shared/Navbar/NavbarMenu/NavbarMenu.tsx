import { Flex, type FlexProps } from '@chakra-ui/react';
import { type FC } from 'react';
import styles from './NavbarMenu.module.css';

interface NavbarMenuProps {
    children: React.ReactNode;
    display?: FlexProps['display']; // Use Chakra UI's display prop type
}

const NavbarMenu: FC<NavbarMenuProps> = ({ children, display, ...props }) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="flex-start"
            className={styles.navbarMenu}
            display={display}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavbarMenu;
