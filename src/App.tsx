import { useCallback, useEffect, type FC } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { fetchStrapiData } from "./api/fetchStrapiData";
import HomePage from "./pages/HomePage";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";
import { setGlobal } from "./store/slices/globalSlice";

const App: FC = () => {
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

  // This function can be used to handle any app-wide logic or state management
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
