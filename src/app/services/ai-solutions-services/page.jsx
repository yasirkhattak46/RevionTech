import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import AiSolutionsBanner from "../../../component/services/banners/AiSolutions/AiSolutionsBanner";
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export const metadata = {
    title: 'AI Solutions & SaaS Development Services',
    description: 'Cutting-edge AI solutions and SaaS development services. Machine learning, AI integration, custom SaaS platforms, and intelligent automation solutions to transform your business.',
    keywords: ['AI solutions', 'SaaS development', 'machine learning', 'AI integration', 'artificial intelligence', 'cloud-based software', 'automation solutions'],
    alternates: {
        canonical: 'https://www.reviontech.com/services/ai-solutions-services',
    },
    openGraph: {
        title: 'AI Solutions & SaaS Development - RevionTech',
        description: 'Harness the power of AI and cloud-based SaaS solutions for your business.',
        url: 'https://www.reviontech.com/services/ai-solutions-services',
        type: 'website',
    },
};

export default function AiSolutionsPage() {
    const whyChooseUsData = getWhyChooseUsData('ai-solutions');
    const subServices = getSubServices('ai-solutions');
    
    return (
        <>
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
