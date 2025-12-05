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
    title: 'Website Development Services | Custom Websites, Web Applications & E-commerce',
    description:
        'RevionTech offers professional Website Development Services including custom websites, web applications, e-commerce development, CMS solutions, and modern frameworks like React and Next.js. Build fast, secure, and SEO-optimized websites tailored to your business.',
    keywords: [
        'website development services',
        'custom website development',
        'web application development',
        'e-commerce website development',
        'CMS website development',
        'responsive web design',
        'React website development',
        'Next.js development company',
        'professional web development agency',
        'Wordpress Development Services',
    ],
    alternates: {
        canonical: 'https://reviontech.com/services/web-development-services',
    },
    openGraph: {
        title: 'Website Development Services | RevionTech',
        description:
            'Build high-performance websites and scalable web applications with RevionTech’s expert Website Development Services.',
        url: 'https://reviontech.com/services/web-development-services',
        type: 'website',
    },
};


export default function WebDevelopmentPage() {
    const whyChooseUsData = getWhyChooseUsData('web-development');
    const subServices = getSubServices('web-development');
    
    const serviceSchemaData = {
        name: 'Web Development Services',
        description: 'Professional Website Development Services including custom websites, scalable web applications, e-commerce platforms, CMS development, responsive design, and modern frameworks like React and Next.js.',
        url: 'https://reviontech.com/services/web-development-services',
        serviceType: 'Website Development',
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
