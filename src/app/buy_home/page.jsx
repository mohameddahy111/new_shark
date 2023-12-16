import React from "react";
import SwiperHome from "../components/home/SwiperHome";
import AboutTitle from "../components/home/AboutTitle";
import HowDo from "../components/home/HowDo";
import BadgeLabel from "../components/home/BadgeLabel";
import BuyTitle from "../components/buyHome/BuyTitle";
import '../css/buyhome.css'
import HomeSection from "../components/buyHome/HomeSection";
import SectionWitnColorsPoint from "../components/buyHome/SectionWitnColorsPoint";

export default function page() {
  return (
    <div >
      <BuyTitle />
      <HomeSection />
      <SectionWitnColorsPoint/>
      <AboutTitle />
      <SwiperHome />
      <HowDo />
      <BadgeLabel color={"#00FC83"} text={"Wanna Learn More?"} />
    </div>
  );
}
