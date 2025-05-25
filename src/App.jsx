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

import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";

const BannerData = {
  image: Img1,
  title: "Lorem ipsum dolor sit",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus commodi placeat consequuntur optio quaerat. At facere maxime architecto labore et? Veritatis aspernatur et, explicabo aliquid nulla quos amet voluptatem.",
  link: "#",
};

const Banner2Data = {
  image: Img2,
  title: "Lorem ipsum dolor sit",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus commodi placeat consequuntur optio quaerat. At facere maxime architecto labore et? Veritatis aspernatur et, explicabo aliquid nulla quos amet voluptatem.",
  link: "#",
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

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
