import React from "react";
import HeroBanner from "../../domain/main/HeroBanner";
import MainSeason from "../../domain/main/MainSeason";
import SpecialBanner from "../../domain/main/MainSpecialBanner";
import BestSeller from "../../domain/main/MainBestSeller";

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
