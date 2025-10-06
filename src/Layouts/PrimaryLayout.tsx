import { useCallback, useEffect, type FC } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { fetchStrapiData } from "@/api/fetchStrapiData";
import { setGlobal } from "@/store/slices/globalSlice";
import Footer from "@/shared/Footer/Footer";
import Navbar from "@/shared/Navbar/Navbar";

const PrimaryLayout: FC = () => {
  const dispatch = useDispatch();
  const fetchData = useCallback(async () => {
    try {
      const data = await fetchStrapiData(
        "api/global?populate=defaultSeo&populate=navbar&populate[1]=navbar.brandImage&populate=navbar.navbarLinks&populate=navbar.languageSelectLinks&populate=defaultSeo.favicons"
      );
      console.log(data.data); // Log the fetched data for debugging
      dispatch(setGlobal(data.data));
      // handle data
    } catch (error) {
      // handle error
      console.error("Error fetching data:", error);
    }
  }, [dispatch]);
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
