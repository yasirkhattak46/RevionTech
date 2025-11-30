"use client";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import DigitalMarketingBanner from "../../../component/services/banners/digitaMarketing/DigitalMarketingBanner";
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export default function DigitalMarketingPage() {
    const whyChooseUsData = getWhyChooseUsData('digital-marketing');
    const subServices = getSubServices('digital-marketing');
    
    return (
        <>
            <DigitalMarketingBanner/>
            <WhyChooseUs 
                title={whyChooseUsData.title}
                subtitle={whyChooseUsData.subtitle}
                features={whyChooseUsData.features}
            />
            <StatsSection />
            <SubServicesSection 
                subServices={subServices}
                serviceSlug="digital-marketing"
            />
            <ProcessWeFollowSection />
            <TestimonialsSection />
            <BrandSlider />
        </>
    );
}
