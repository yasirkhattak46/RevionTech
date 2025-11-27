"use client";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import ServicesSection from "../../../component/home/services/ServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import AiSolutionsBanner from "../../../component/services/banners/AiSolutions/AiSolutionsBanner";
import { getWhyChooseUsData } from '../../../data/servicesData';

export default function AiSolutionsPage() {
    const whyChooseUsData = getWhyChooseUsData('ai-solutions');
    
    return (
        <>
            <AiSolutionsBanner />
            <WhyChooseUs 
                title={whyChooseUsData.title}
                subtitle={whyChooseUsData.subtitle}
                features={whyChooseUsData.features}
            />
            <StatsSection />
            <ServicesSection />
            <ProcessWeFollowSection />
            <TestimonialsSection />
            <BrandSlider />
        </>
    );
}
