import { GridItem } from '@chakra-ui/react';
import { type FC } from 'react';
import styles from './NavbarMenuItem.module.css';
import ExternalLink from '@/shared/Link/ExternalLink';
import Link from '@/shared/Link/Link';
import type { NavbarLink } from '@/zod/components/navbar';

const NavbarMenuItem: FC<NavbarLink> = (link) => {
    return (
        <GridItem colSpan={1} className={styles.navbarMenuItem}>
            {link.isExternal ? (
                <ExternalLink
                    variant="navigation"
                    color="dark"
                    href={link.href}
                >
                    {link.textContent}
                </ExternalLink>
            ) : (
                <Link variant="navigation" color="dark" href={link.href}>
                    {link.textContent}
                </Link>
            )}
        </GridItem>
    );
};

export default NavbarMenuItem;
