import { jsx as _jsx } from "react/jsx-runtime";
import Heading from '../Heading/Heading';
const Hero = ({ backgroundImageUrl, ariaLabel }) => {
    return (_jsx("section", { "aria-label": ariaLabel, style: { backgroundImage: backgroundImageUrl }, children: _jsx(Heading, { tag: "h1", variant: "display-1", color: "dark", ariaLabel: ariaLabel, children: "BistroHetki" }) }));
};
export default Hero;
//# sourceMappingURL=Hero.js.map