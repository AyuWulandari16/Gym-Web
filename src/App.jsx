import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.png";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import TabComp from "./components/Tab/TabComp";
import Testimonials from "./components/Testimonials/Testimonials";
import BannerBottom from "./components/Banner/BannerBottom";
import Footer from "./components/Footer/Footer";
import { BannerData, Banner2Data, bgStyle } from "./mockData/data.js";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments></Equipments>
      <Banner {...BannerData}></Banner>
      <TabComp></TabComp>
      <Banner {...Banner2Data}></Banner>
      <Testimonials></Testimonials>
      <BannerBottom />
      <Footer></Footer>
    </div>
  );
};

export default App;
