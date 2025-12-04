import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import DigitalMarketingBanner from "../../../component/services/banners/digitaMarketing/DigitalMarketingBanner";
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';
import ServiceSchema from "../../../component/shared/ServiceSchema";

export const metadata = {
    title: 'Digital Marketing Services | SEO, Social Media Marketing & PPC Campaigns',
    description:
        'RevionTech offers complete Digital Marketing Services including SEO optimization, social media marketing, PPC advertising, content marketing, email marketing, and data-driven online growth strategies. Increase traffic, generate leads, and grow your brand online.',
    keywords: [
        'digital marketing services',
        'SEO services',
        'social media marketing',
        'PPC advertising',
        'content marketing',
        'email marketing campaigns',
        'online marketing agency',
        'search engine optimization',
        'digital advertising services'
    ],
    alternates: {
        canonical: 'https://www.reviontech.com/services/digital-marketing-services',
    },
    openGraph: {
        title: 'Digital Marketing Services | RevionTech',
        description:
            'Grow your online presence with ROI-driven digital marketing, SEO, social media management, PPC advertising, and content marketing strategies.',
        url: 'https://www.reviontech.com/services/digital-marketing-services',
        type: 'website',
    },
};


export default function DigitalMarketingPage() {
    const whyChooseUsData = getWhyChooseUsData('digital-marketing');
    const subServices = getSubServices('digital-marketing');
    const serviceSchemaData = {
        name: 'Digital Marketing Services',
        description: 'RevionTech offers complete Digital Marketing Services including SEO optimization, social media marketing, PPC advertising, content marketing, email marketing, and data-driven online growth strategies. Increase traffic, generate leads, and grow your brand online.',
        url: 'https://www.reviontech.com/services/digital-marketing-services',
        serviceType: 'Digital Marketing',
        subServices: subServices?.services?.map(service => ({
            name: service.title,
            description: service.description
        })) || []
    };
    return (
        <>
            <ServiceSchema serviceData={serviceSchemaData} />
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
