// importing section
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomeScreen from "./pages/HomeScreen";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import PlaceRouter from "./pages/PlaceRouter";
import NotFound from "./pages/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import PlaceDetails from "./components/Places/PlaceDetails";
import Auth from "./pages/Auth";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={loggedIn ? <Layout /> : <Auth />}>
            <Route index element={<HomeScreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/best-places" element={<PlaceRouter />} />
            <Route path="/best-places/:id" element={<PlaceDetails />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/auth" element={<Auth />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
