"use client";
import UxUiDesignBanner from "../../../component/services/banners/graphic-design/GraphicDesignBanner";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export default function UiUxDesignPage() {
    const whyChooseUsData = getWhyChooseUsData('graphic-design');
    const subServices = getSubServices('graphic-design');
    return (
        <>
            <UxUiDesignBanner />
            <WhyChooseUs 
                title={whyChooseUsData.title}
                subtitle={whyChooseUsData.subtitle}
                features={whyChooseUsData.features}
            />
            <StatsSection />
            <SubServicesSection 
                subServices={subServices}
                serviceSlug="graphic-design"
            />
            <ProcessWeFollowSection />
            <TestimonialsSection />
            <BrandSlider />
        </>
    );
}
