import HeroSection from "../component/home/hero/HeroSection";
import TechnologiesSlider from "../component/shared/TechnologiesSlider";
import BrandSlider from "../component/shared/BrandSlider";
import ServicesSection from "../component/home/services/ServicesSection";
import AboutSection from "../component/home/about/AboutSection";
import ProcessWeFollowSection from "../component/home/process/ProcessWeFollowSection";
import WhyChooseUsSection from "../component/home/whyChoseUse/WhyChooseUsSection";
import TestimonialsSection from "../component/home/testimonials/TestimonialsSection";
import ContactSection from "../component/shared/ContactSection";
import FeaturedProjectsSection from "../component/shared/featureProject/FeaturedProjectsSection";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <TechnologiesSlider/>
            <AboutSection/>
            <ServicesSection/>
            <ProcessWeFollowSection/>
            <WhyChooseUsSection/>
            <FeaturedProjectsSection/>
            <BrandSlider/>
            <TestimonialsSection/>
            <ContactSection/>
        </>

    );
}
