import './ServiceDetail.scss';
import HeroBanner from "../../component/services/banners/webDevelopment/WebDevelopmentBanner";
import WhyChooseUs from "../../component/services/whyChoseUs/WhyChooseUs";
import ServicesSection from "../../component/home/services/ServicesSection";
import StatsSection from "../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../component/shared/BrandSlider";

export const metadata = {
    title: 'Our Services - Web Development, App Development, AI & Digital Marketing',
    description: 'Explore RevionTech comprehensive technology services including custom web development, mobile app development, AI solutions, graphic design, and digital marketing. Transform your business with our expert solutions.',
    keywords: ['technology services', 'web development services', 'app development', 'AI solutions', 'digital marketing', 'graphic design', 'IT consulting'],
    alternates: {
        canonical: 'https://www.reviontech.com/services',
    },
    openGraph: {
        title: 'RevionTech Services - Complete Technology Solutions',
        description: 'Discover our full range of technology services to accelerate your business growth.',
        url: 'https://www.reviontech.com/services',
        type: 'website',
    },
};

export default function ServiceDetail() {

    return (
        <>
            <HeroBanner/>
            <WhyChooseUs/>
            <StatsSection/>
            <ServicesSection/>
            <ProcessWeFollowSection/>
            <TestimonialsSection/>
            <BrandSlider/>
        </>
    );
}
