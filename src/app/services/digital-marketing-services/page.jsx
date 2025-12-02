import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import DigitalMarketingBanner from "../../../component/services/banners/digitaMarketing/DigitalMarketingBanner";
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export const metadata = {
    title: 'Digital Marketing Services - SEO, Social Media & PPC',
    description: 'Comprehensive digital marketing services including SEO, social media marketing, PPC advertising, content marketing, and email campaigns. Grow your online presence and drive results.',
    keywords: ['digital marketing', 'SEO services', 'social media marketing', 'PPC advertising', 'content marketing', 'email marketing', 'online marketing'],
    alternates: {
        canonical: 'https://www.reviontech.com/services/digital-marketing-services',
    },
    openGraph: {
        title: 'Digital Marketing Services - RevionTech',
        description: 'Boost your online presence with data-driven digital marketing strategies.',
        url: 'https://www.reviontech.com/services/digital-marketing-services',
        type: 'website',
    },
};

export default function DigitalMarketingPage() {
    const whyChooseUsData = getWhyChooseUsData('digital-marketing');
    const subServices = getSubServices('digital-marketing');
    
    return (
        <>
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
