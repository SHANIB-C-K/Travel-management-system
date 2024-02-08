// importing section
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomeScreen from "./pages/HomeScreen";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import PlaceRouter from "./pages/PlaceRouter";
import AOS from "aos";
import "aos/dist/aos.css";
import PlaceDetails from "./components/Places/PlaceDetails";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Panel from "./pages/Panel";
import OfflineDetection from "./components/InternetCheck/OfflineDetection";

const App = () => {
  // loged or not check
  const loggedIn = window.localStorage.getItem("loggedIn");

  // aos section
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Router creating section */}
      <OfflineDetection>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={loggedIn ? <Layout /> : <Auth />}>
              <Route index element={<HomeScreen />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/best-places" element={<PlaceRouter />} />
              <Route path="/best-places/:id" element={<PlaceDetails />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="/services" element={<HomeScreen />} />
              <Route path="/mobile_brands" element={<Blogs />} />
              <Route path="/location" element={<About />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/panel" element={<Panel />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </OfflineDetection>
    </>
  );
};

export default App;
