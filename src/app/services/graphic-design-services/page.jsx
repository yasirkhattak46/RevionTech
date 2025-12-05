import UxUiDesignBanner from "../../../component/services/banners/graphic-design/GraphicDesignBanner";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';
import ServiceSchema from "../../../component/shared/ServiceSchema";

export const metadata = {
    title: 'Graphic Design Services | UI/UX Design, Branding & Creative Visual Design',
    description:
        'RevionTech offers professional Graphic Design Services including UI/UX design, branding, logo creation, marketing materials, and complete visual identity design. Elevate your brand with stunning, user-focused and modern creative designs.',
    keywords: [
        'graphic design services',
        'ui ux design',
        'branding and identity design',
        'logo design services',
        'visual identity design',
        'creative design agency',
        'user interface design',
        'user experience design',
        'brand design company'
    ],
    alternates: {
        canonical: 'https://reviontech.com/services/graphic-design-services',
    },
    openGraph: {
        title: 'Graphic Design Services | RevionTech',
        description:
            'Transform your brand with professional graphic design, UI/UX design, and creative visual identity solutions from RevionTech.',
        url: 'https://reviontech.com/services/graphic-design-services',
        type: 'website',
    },
};


export default function UiUxDesignPage() {
    const whyChooseUsData = getWhyChooseUsData('graphic-design');
    const subServices = getSubServices('graphic-design');
    const serviceSchemaData = {
        name: 'Graphic Design Services',
        description: 'RevionTech offers professional Graphic Design Services including UI/UX design, branding, logo creation, marketing materials, and complete visual identity design. Elevate your brand with stunning, user-focused and modern creative designs.',
        url: 'https://reviontech.com/services/graphic-design-services',
        serviceType: 'Graphic Design',
        subServices: subServices?.services?.map(service => ({
            name: service.title,
            description: service.description
        })) || []
    };

    return (
        <>
            <ServiceSchema serviceData={serviceSchemaData} />
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
