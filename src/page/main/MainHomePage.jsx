import React from "react";
import HeroBanner from "../../domain/main/HeroBanner";
import MainSeason from "../../domain/main/SeasonSlider";
import SpecialBanner from "../../domain/main/SpecialBanner";
import BestSeller from "../../domain/main/BestSeller";
import LineSlider from "../../domain/main/LineSlider";
import LookbookBanner from "../../domain/main/LookbookBanner";

function MainHome() {
  return (
    <>
      <HeroBanner />
      <MainSeason />
      <SpecialBanner />
      <BestSeller />
      <LookbookBanner />
      <LineSlider />
    </>
  );
}

export default MainHome;
