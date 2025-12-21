import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import FaqsSection from "../../../component/shared/faqs/FaqsSection";
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
    
    const appDevFaqs = [
        {
            id: 1,
            question: "What mobile app development services does RevionTech provide?",
            answer: "RevionTech offers complete mobile app development services including custom app design, native and cross-platform app development, UI/UX design, API integration, app testing, deployment, and post-launch support. We build secure, scalable, and high-performance mobile applications."
        },
        {
            id: 2,
            question: "Do you develop apps for both Android and iOS?",
            answer: "Yes, we develop mobile applications for both Android and iOS platforms. Depending on your requirements, we offer native app development as well as cross-platform solutions using modern frameworks to ensure optimal performance and cost efficiency."
        },
        {
            id: 3,
            question: "Which technologies do you use for mobile app development?",
            answer: "We use industry-leading technologies such as React Native, Flutter, Swift, Kotlin, and modern backend frameworks. Our technology stack is selected based on your project goals, performance needs, and scalability requirements."
        },
        {
            id: 4,
            question: "How long does it take to develop a mobile application?",
            answer: "The development timeline depends on app complexity, features, and integrations. A basic mobile app may take 6–8 weeks, while feature-rich or enterprise-level applications can take 3–6 months or more. We provide a clear roadmap before starting the project."
        },
        {
            id: 5,
            question: "Can you build cross-platform mobile apps?",
            answer: "Yes, RevionTech specializes in cross-platform mobile app development using frameworks like React Native and Flutter, allowing a single codebase to run smoothly on both Android and iOS while reducing development time and cost."
        },
        {
            id: 6,
            question: "Do you provide UI/UX design for mobile apps?",
            answer: "Absolutely. Our UI/UX experts design intuitive, user-friendly, and visually appealing mobile app interfaces focused on user engagement, accessibility, and seamless navigation."
        },
        {
            id: 7,
            question: "Do you help with app store submission and launch?",
            answer: "Yes, we handle the complete app deployment process including Google Play Store and Apple App Store submission, compliance checks, app optimization, and launch support to ensure a smooth release."
        },
        {
            id: 8,
            question: "Is app security considered during development?",
            answer: "Security is a top priority at RevionTech. We implement secure authentication, encrypted data storage, protected APIs, and industry best practices to ensure your mobile application is safe and reliable."
        },
        {
            id: 9,
            question: "Do you offer post-launch maintenance and updates?",
            answer: "Yes, we provide ongoing app maintenance and support services including performance optimization, bug fixes, feature updates, security patches, and compatibility updates for new OS versions."
        },
        {
            id: 10,
            question: "How do I get started with mobile app development at RevionTech?",
            answer: "Getting started is easy. Contact RevionTech with your app idea or requirements, and our team will analyze your needs, suggest the best development approach, and begin the project with a clear plan and timeline."
        }
    ];
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
            <FaqsSection faqs={appDevFaqs} />
            <BrandSlider />
        </>
    );
}
