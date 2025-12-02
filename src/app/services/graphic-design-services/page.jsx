import UxUiDesignBanner from "../../../component/services/banners/graphic-design/GraphicDesignBanner";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export const metadata = {
    title: 'Graphic Design Services - UI/UX Design & Branding',
    description: 'Professional graphic design services including UI/UX design, branding, logo design, and visual identity. Create stunning designs that engage your audience and elevate your brand.',
    keywords: ['graphic design', 'UI UX design', 'branding services', 'logo design', 'visual identity', 'user interface design', 'user experience design'],
    alternates: {
        canonical: 'https://www.reviontech.com/services/graphic-design-services',
    },
    openGraph: {
        title: 'Graphic Design Services - RevionTech',
        description: 'Beautiful, user-centered designs that make your brand stand out.',
        url: 'https://www.reviontech.com/services/graphic-design-services',
        type: 'website',
    },
};

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
