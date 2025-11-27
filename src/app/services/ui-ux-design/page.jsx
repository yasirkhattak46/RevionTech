"use client";
import UxUiDesignBanner from "../../../component/services/banners/ux-ui-design/UxUiDesignBanner";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import ServicesSection from "../../../component/home/services/ServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import { getWhyChooseUsData } from '../../../data/servicesData';

export default function UiUxDesignPage() {
    const whyChooseUsData = getWhyChooseUsData('ui-ux-design');
    
    return (
        <>
            <UxUiDesignBanner />
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
