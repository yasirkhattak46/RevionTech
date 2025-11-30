"use client";
import WebsiteDevelopmentBanner from "../../../component/services/banners/webDevelopment/WebDevelopmentBanner";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export default function WebDevelopmentPage() {
    const whyChooseUsData = getWhyChooseUsData('web-development');
    const subServices = getSubServices('web-development');
    
    return (
        <>
            <WebsiteDevelopmentBanner />
            <WhyChooseUs 
                title={whyChooseUsData.title}
                subtitle={whyChooseUsData.subtitle}
                features={whyChooseUsData.features}
            />
            <BrandSlider />
            <StatsSection />
            <SubServicesSection 
                subServices={subServices}
                serviceSlug="web-development"
            />
            <ProcessWeFollowSection />
            <TestimonialsSection />
        </>
    );
}
