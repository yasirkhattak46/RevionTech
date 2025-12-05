import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import '../ServiceDetail.scss';
import AppDevelopmentBanner from "../../../component/services/banners/AppDevelopment/AppDevelopmentBanner";
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';
import ServiceSchema from "../../../component/shared/ServiceSchema";

export const metadata = {
    title: 'Mobile App Development Services - iOS & Android App Developers',
    description:
        'Professional mobile app development services for iOS and Android. We build high-performance native and cross-platform mobile apps using React Native, Flutter, and modern technologies to help businesses scale.',
    keywords: [
        'mobile app development services',
        'iOS app development',
        'Android app development',
        'React Native developers',
        'Flutter app development',
        'cross platform app development',
        'custom mobile apps',
        'mobile application development company'
    ],
    alternates: {
        canonical: 'https://reviontech.com/services/app-development-services',
    },
    openGraph: {
        title: 'Mobile App Development Services - RevionTech',
        description:
            'Build fast, secure, and scalable iOS & Android mobile apps with RevionTech. Expert native and cross-platform app development solutions.',
        url: 'https://reviontech.com/services/app-development-services',
        type: 'website',
    },
};


export default function AppDevelopmentPage() {
    const whyChooseUsData = getWhyChooseUsData('app-development');
    const subServices = getSubServices('app-development');
    const serviceSchemaData = {
        name: 'Mobile App Development Services',
        description: 'Professional mobile app development services for iOS and Android. We build high-performance native and cross-platform mobile apps using React Native, Flutter, and modern technologies to help businesses scale.',
        url: 'https://reviontech.com/services/app-development-services',
        serviceType: 'Mobile App Development',
        subServices: subServices?.services?.map(service => ({
            name: service.title,
            description: service.description
        })) || []
    };
    return (
        <>
            <ServiceSchema serviceData={serviceSchemaData} />

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
