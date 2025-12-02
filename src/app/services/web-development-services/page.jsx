import WebsiteDevelopmentBanner from "../../../component/services/banners/webDevelopment/WebDevelopmentBanner";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import ServiceSchema from "../../../component/shared/ServiceSchema";
import '../ServiceDetail.scss';
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export const metadata = {
    title: 'Web Development Services - Custom Websites & Web Applications',
    description: 'Professional web development services including custom websites, e-commerce solutions, CMS development, and progressive web apps. Expert developers delivering responsive, fast, and SEO-optimized websites.',
    keywords: ['web development', 'custom website development', 'e-commerce development', 'CMS development', 'responsive web design', 'React development', 'Next.js development'],
    alternates: {
        canonical: 'https://www.reviontech.com/services/web-development-services',
    },
    openGraph: {
        title: 'Web Development Services - RevionTech',
        description: 'Build powerful, scalable websites and web applications with our expert web development team.',
        url: 'https://www.reviontech.com/services/web-development-services',
        type: 'website',
    },
};

export default function WebDevelopmentPage() {
    const whyChooseUsData = getWhyChooseUsData('web-development');
    const subServices = getSubServices('web-development');
    
    const serviceSchemaData = {
        name: 'Web Development Services',
        description: 'Professional web development services including custom websites, e-commerce solutions, CMS development, and progressive web apps.',
        url: 'https://www.reviontech.com/services/web-development-services',
        serviceType: 'Web Development',
        subServices: subServices?.services?.map(service => ({
            name: service.title,
            description: service.description
        })) || []
    };
    
    return (
        <>
            <ServiceSchema serviceData={serviceSchemaData} />
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
