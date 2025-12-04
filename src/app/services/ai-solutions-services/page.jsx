import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import AiSolutionsBanner from "../../../component/services/banners/AiSolutions/AiSolutionsBanner";
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';
import ServiceSchema from "../../../component/shared/ServiceSchema";

export const metadata = {
    title: 'AI Solutions & SaaS Development Services | Intelligent Automation & Cloud Software',
    description:
        'RevionTech delivers advanced AI Solutions and custom SaaS Development Services, including machine learning models, AI integration, automation systems, cloud-based platforms, and intelligent software tailored to scale your business.',
    keywords: [
        'AI Services',
        'AI development company',
        'SaaS development services',
        'custom SaaS platforms',
        'machine learning solutions',
        'AI integration services',
        'cloud-based software',
        'intelligent automation',
        'AI-powered applications',
        'artificial intelligence company'
    ],
    alternates: {
        canonical: 'https://www.reviontech.com/services/ai-solutions-services',
    },
    openGraph: {
        title:
            'AI Solutions & SaaS Development Services | RevionTech',
        description:
            'Transform your business with intelligent AI solutions and scalable SaaS development. Build automation systems, AI-driven applications, and cloud-based platforms with RevionTech.',
        url: 'https://www.reviontech.com/services/ai-solutions-services',
        type: 'website',
    },
};

export default function AiSolutionsPage() {
    const whyChooseUsData = getWhyChooseUsData('ai-solutions');
    const subServices = getSubServices('ai-solutions');
    const serviceSchemaData = {
        name: 'AI Solutions & SaaS Development Services',
        description:
            'RevionTech delivers advanced AI Solutions and custom SaaS Development Services, including machine learning models, AI integration, automation systems, cloud-based platforms, and intelligent software tailored to scale your business.',
        url: 'https://www.reviontech.com/services/ai-solutions-services',
        serviceType: 'AI Solutions & SaaS Development',
        subServices: subServices?.services?.map(service => ({
            name: service.title,
            description: service.description
        })) || []
    };
    return (
        <>
            <ServiceSchema serviceData={serviceSchemaData} />
            <AiSolutionsBanner />
            <WhyChooseUs 
                title={whyChooseUsData.title}
                subtitle={whyChooseUsData.subtitle}
                features={whyChooseUsData.features}
            />
            <StatsSection />
            <SubServicesSection 
                subServices={subServices}
                serviceSlug="ai-solutions"
            />
            <ProcessWeFollowSection />
            <TestimonialsSection />
            <BrandSlider />
        </>
    );
}
