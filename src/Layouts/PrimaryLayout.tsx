import { useCallback, useEffect, type FC } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { fetchStrapiData } from "@/api/fetchStrapiData";
import { useLocale } from "@/hooks/useLocale";
import Footer from "@/shared/Footer/Footer";
import Navbar from "@/shared/Navbar/Navbar";
import { setGlobal } from "@/store/slices/globalSlice";

const PrimaryLayout: FC = () => {
  const dispatch = useDispatch();
  const { appLocale } = useLocale();
  const locale = appLocale; // Use the appLocale from the useLocale hook
  const fetchData = useCallback(async () => {
    try {
      const data = await fetchStrapiData(
        `api/global?populate=defaultSeo&populate=navbar&populate[1]=navbar.brandImage&populate=navbar.navbarLinks&populate=navbar.languageSelectLinks&populate=navbar.socialLinks&populate=defaultSeo.favicons&populate=footer&populate[2]=footer.sections&populate[3]=footer.sections.contactInfos&populate[4]=footer.sections.socialLinks&locale=${locale}`
      );
      dispatch(setGlobal(data.data));
      // handle data
    } catch (error) {
      // handle error
      console.error("Error fetching data:", error);
    }
  }, [dispatch, locale]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
