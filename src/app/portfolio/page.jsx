"use client";
import Header from "../../component/layout/Header";
import Footer from "../../component/layout/Footer";
import PortfolioBanner from "../../component/portfolio/banner/Banner";
import PortfolioProjects from "../../component/portfolio/PortfolioProjects";
import ServicesSection from "../../component/home/services/ServicesSection";
import ProcessWeFollowSection from "../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../component/shared/BrandSlider";
import ContactSection from "../../component/shared/ContactSection";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <PortfolioBanner />
      <PortfolioProjects />
      <ServicesSection />
      <ProcessWeFollowSection />
      <TestimonialsSection />
      <BrandSlider />
      <ContactSection />
      <Footer />
    </>
  );
}