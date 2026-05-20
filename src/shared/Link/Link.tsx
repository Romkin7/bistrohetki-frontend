import clsx from 'clsx';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router';
import styles from './Link.module.css';
import { linkPropsSchema, type LinkProps } from '@/zod/components/linkProps';

type TLinkProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: FC<TLinkProps> = ({ children, ...rest }) => {
    const { variant, color, href } = linkPropsSchema.parse(rest);
    const linkStyles = clsx(
        styles.link,
        styles[`link--${variant}`],
        styles[`link--${color}`],
    );

    return (
        <RouterLink
            to={href}
            className={linkStyles}
            target="_self"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
        >
            {children}
        </RouterLink>
    );
};

export default Link;
