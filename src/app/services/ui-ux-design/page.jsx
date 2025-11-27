"use client";
import UxUiDesignBanner from "../../../component/services/banners/ux-ui-design/UxUiDesignBanner";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import ServicesSection from "../../../component/home/services/ServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';

export default function UiUxDesignPage() {
    return (
        <>
            <UxUiDesignBanner />
            <WhyChooseUs />
            <StatsSection />
            <ServicesSection />
            <ProcessWeFollowSection />
            <TestimonialsSection />
            <BrandSlider />
        </>
    );
}
