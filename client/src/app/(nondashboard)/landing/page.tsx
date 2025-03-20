import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./featureSection/FeaturesSection";
import DiscoverSection from "./discoverSection/DiscoverSection";
import CallToActionSection from "./CallToAcctionSection";
import FooterSection from "./FooterSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default Landing;
