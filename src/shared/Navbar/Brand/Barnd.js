import { jsx as _jsx } from "react/jsx-runtime";
import { Image } from '@chakra-ui/react';
import clsx from 'clsx';
import {} from 'react';
import styles from './Brand.module.css';
const Brand = ({ image, ariaLabel }) => {
    const brandStyles = clsx({
        [styles.brand]: true,
    });
    return (_jsx("div", { className: brandStyles, "aria-label": ariaLabel, children: _jsx(Image, { src: image.src, alt: image.alt, title: image.alt }) }));
};
export default Brand;
//# sourceMappingURL=Barnd.js.map