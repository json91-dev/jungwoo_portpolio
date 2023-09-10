import Head from "next/head";
import React from "react";
import Introduce from "../components/Introduce";
import Skills from "../components/pages/Skills/Skills";
import Profile from "../components/Profile";
import Header from "../components/Header";
import Experience from "../components/Experience";
import MouseEffect from "../components/mouseEffect";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      <div className="absolute">
        {/*헤더*/}
        <Header />
        {/*<Footer />*/}
        <div className="h-screen w-screen border-4 border-black-200"></div>
        <div className="h-screen w-screen border-4 border-black-200"></div>
      </div>
      {/*<MouseEffect />*/}
    </>
  );
};

export default MainPage;
