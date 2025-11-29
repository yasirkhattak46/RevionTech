"use client";

import PortfolioBanner from "../../component/portfolio/banner/Banner";
import FeaturedProjectsSection from "../../component/shared/featureProject/FeaturedProjectsSection";

export default function PortfolioPage() {
  return (
    <>
        <PortfolioBanner/>
        <FeaturedProjectsSection isPortfolioPage={true} />
    </>
  );
}