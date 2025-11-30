"use client";

import PortfolioBanner from "../../component/portfolio/banner/Banner";
import FeaturedProjectsSection from "../../component/shared/featureProject/FeaturedProjectsSection";
import StatsSection from "../../component/shared/statsSection/Stats";
import ContactSection from "../../component/shared/ContactSection";

export default function PortfolioPage() {
  return (
    <>
        <PortfolioBanner/>
        <StatsSection />
        <FeaturedProjectsSection isPortfolioPage={true} />
        <ContactSection />
    </>
  );
}