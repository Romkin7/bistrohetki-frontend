import clsx from 'clsx';
import { type FC, type PropsWithChildren } from 'react';
import styles from './Paragraph.module.css';
import {
    paragraphPropsSchema,
    type ParagraphProps,
} from '@/zod/components/paragraphProps';

interface IParagraphProps extends ParagraphProps, PropsWithChildren {}

const Paragraph: FC<IParagraphProps> = ({ children, ...rest }) => {
    // validate props
    const { color, variant } = paragraphPropsSchema.parse(rest);
    // create styles classes
    const paragraphStyles = clsx({
        [styles.paragraph]: true,
        [styles[`paragraph--${variant}`]]: variant,
        [styles[`paragraph--${color}`]]: color,
    });
    return <p className={paragraphStyles}>{children}</p>;
};

export default Paragraph;
