import HeroSection from "../component/home/hero/HeroSection";
import TechnologiesSlider from "../component/shared/TechnologiesSlider";
import BrandSlider from "../component/shared/BrandSlider";
import ServicesSection from "../component/home/services/ServicesSection";
import AboutSection from "../component/home/about/AboutSection";
import ProcessWeFollowSection from "../component/home/process/ProcessWeFollowSection";
import WhyChooseUsSection from "../component/home/whyChoseUse/WhyChooseUsSection";
import TestimonialsSection from "../component/home/testimonials/TestimonialsSection";
import FaqsSection from "../component/shared/faqs/FaqsSection";
import ContactSection from "../component/shared/ContactSection";
import FeaturedProjectsSection from "../component/shared/featureProject/FeaturedProjectsSection";
import StructuredData from "../component/shared/StructuredData";

export const metadata = {
    title: 'RevionTech | Professional Website Development Services, App Development, AI Solutions & Digital Marketing',
    description:
        'RevionTech provides professional Website Development Services, Mobile App Development, AI & SaaS solutions, Graphic Design, and Digital Marketing. Empowering businesses with high-performing, modern, and scalable digital solutions.',
    keywords: [
        'website development services',
        'professional website development',
        'custom web development',
        'mobile app development',
        'AI solutions',
        'SaaS development',
        'digital marketing services',
        'graphic design services',
        'IT solutions company',
        'software development agency'
    ],
    alternates: {
        canonical: 'https://reviontech.com',
    },
    openGraph: {
        title:
            'RevionTech | Professional Website Development Services, App Development, AI Solutions & Digital Marketing',
        description:
            'RevionTech delivers innovative Website Development, App Development, AI solutions, SaaS platforms, and Digital Marketing to help businesses grow and scale.',
        url: 'https://reviontech.com',
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
            <FaqsSection/>
            <ContactSection/>
        </>

    );
}
