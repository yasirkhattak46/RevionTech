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
import StructuredData from "../component/shared/StructuredData";

export const metadata = {
    title: 'Home - Expert Web & App Development, AI Solutions & Digital Marketing',
    description: 'RevionTech is a leading technology solutions provider offering web development, mobile app development, AI & SaaS solutions, graphic design, and digital marketing services. Transform your business with innovative technology.',
    keywords: ['web development company', 'mobile app development', 'AI solutions', 'SaaS development', 'digital marketing agency', 'graphic design services', 'software development', 'technology solutions'],
    alternates: {
        canonical: 'https://www.reviontech.com',
    },
    openGraph: {
        title: 'RevionTech - Expert Web & App Development, AI Solutions & Digital Marketing',
        description: 'Transform your business with cutting-edge technology solutions. We specialize in web development, app development, AI solutions, and digital marketing.',
        url: 'https://www.reviontech.com',
        type: 'website',
    },
};

export default function Home() {
    return (
        <>
            <StructuredData />
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
