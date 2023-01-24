import React from "react";
import HeroBanner from "../../domain/main/HeroBanner";
import MainSeason from "../../domain/main/SeasonSlider";
import SpecialBanner from "../../domain/main/SpecialBanner";
import BestSeller from "../../domain/main/BestSeller";

function MainHome() {
  return (
    <>
      <HeroBanner />
      <MainSeason />
      <SpecialBanner />
      <BestSeller />
    </>
  );
}

export default MainHome;
