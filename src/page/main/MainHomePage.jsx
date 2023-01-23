import React from "react";
import HeroBanner from "../../domain/main/HeroBanner";
import MainSeason from "../../domain/main/MainSeason";
import SpecialBanner from "../../domain/main/MainSpecialBanner";

function MainHome() {
  return (
    <>
      <HeroBanner />
      <MainSeason />
      <SpecialBanner />
    </>
  );
}

export default MainHome;
