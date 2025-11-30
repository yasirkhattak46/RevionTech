"use client";

import PortfolioBanner from "../../component/portfolio/banner/Banner";
import FeaturedProjectsSection from "../../component/shared/featureProject/FeaturedProjectsSection";
import StatsSection from "../../component/shared/statsSection/Stats";
import ContactSection from "../../component/shared/ContactSection";
import BrandSlider from "../../component/shared/BrandSlider";
import TestimonialsSection from "../../component/home/testimonials/TestimonialsSection";

export default function PortfolioPage() {
  return (
    <>
        <PortfolioBanner/>
        <StatsSection />
        <FeaturedProjectsSection isPortfolioPage={true} />
        <BrandSlider/>
        <TestimonialsSection/>
        <ContactSection />
    </>
  );
}