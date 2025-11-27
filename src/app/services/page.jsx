"use client";
import './ServiceDetail.scss';
import HeroBanner from "../../component/services/banners/webDevelopment/WebDevelopmentBanner";
import WhyChooseUs from "../../component/services/whyChoseUs/WhyChooseUs";
import ServicesSection from "../../component/home/services/ServicesSection";
import StatsSection from "../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../component/shared/BrandSlider";

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
