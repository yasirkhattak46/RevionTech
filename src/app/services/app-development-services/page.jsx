import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import AppDevelopmentBanner from "../../../component/services/banners/AppDevelopment/AppDevelopmentBanner";
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export const metadata = {
    title: 'Mobile App Development Services - iOS & Android Apps',
    description: 'Expert mobile app development services for iOS and Android. We build native and cross-platform mobile applications using React Native, Flutter, and native technologies.',
    keywords: ['mobile app development', 'iOS app development', 'Android app development', 'React Native', 'Flutter development', 'cross-platform apps', 'native app development'],
    alternates: {
        canonical: 'https://www.reviontech.com/services/app-development-services',
    },
    openGraph: {
        title: 'Mobile App Development Services - RevionTech',
        description: 'Transform your ideas into powerful mobile applications for iOS and Android platforms.',
        url: 'https://www.reviontech.com/services/app-development-services',
        type: 'website',
    },
};

export default function AppDevelopmentPage() {
    const whyChooseUsData = getWhyChooseUsData('app-development');
    const subServices = getSubServices('app-development');
    
    return (
        <>
            <AppDevelopmentBanner />
            <WhyChooseUs 
                title={whyChooseUsData.title}
                subtitle={whyChooseUsData.subtitle}
                features={whyChooseUsData.features}
            />
            <StatsSection />
            <SubServicesSection 
                subServices={subServices}
                serviceSlug="app-development"
            />
            <ProcessWeFollowSection />
            <TestimonialsSection />
            <BrandSlider />
        </>
    );
}
