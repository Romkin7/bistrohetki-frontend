import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const Seo = () => {
    const global = useSelector((state) => state.global);
    useEffect(() => {
        document.title = global?.siteName;
        document
            .querySelector("meta[name='description']")
            ?.setAttribute('content', global?.siteDescription);
    }, [global]);
    return null;
};
export default Seo;
//# sourceMappingURL=Seo.js.map