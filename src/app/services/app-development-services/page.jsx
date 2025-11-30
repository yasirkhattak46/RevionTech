"use client";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import AppDevelopmentBanner from "../../../component/services/banners/AppDevelopment/AppDevelopmentBanner";
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export default function AppDevelopmentPage() {
    const whyChooseUsData = getWhyChooseUsData('app-development');
    const subServices = getSubServices('app-development');
    
    return (
        <>
            <AppDevelopmentBanner />
            <WhyChooseUs 
                title={whyChooseUsData.title}
                subtitle={whyChooseUsData.subtitle}
                features={whyChooseUsData.features}
            />
            <StatsSection />
            <SubServicesSection 
                subServices={subServices}
                serviceSlug="app-development"
            />
            <ProcessWeFollowSection />
            <TestimonialsSection />
            <BrandSlider />
        </>
    );
}
