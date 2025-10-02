import { type FC, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";

const Seo: FC = () => {
  const global = useSelector((state: RootState) => state.global);
  useEffect(() => {
    document.title = global?.siteName as string;
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", global?.siteDescription as string);
  }, [global]);
  return null;
};

export default Seo;
