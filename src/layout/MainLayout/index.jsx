import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import ScrollTop from "../../components/ScrollTop";
import ScrollProgressBar from "../../components/ScrollProgressBar";

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <ScrollProgressBar />
      <Header />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default MainLayout;
