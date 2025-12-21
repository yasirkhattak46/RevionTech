import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import FaqsSection from "../../../component/shared/faqs/FaqsSection";
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
        canonical: 'https://reviontech.com/services/digital-marketing-services',
    },
    openGraph: {
        title: 'Digital Marketing Services | RevionTech',
        description:
            'Grow your online presence with ROI-driven digital marketing, SEO, social media management, PPC advertising, and content marketing strategies.',
        url: 'https://reviontech.com/services/digital-marketing-services',
        type: 'website',
    },
};


export default function DigitalMarketingPage() {
    const whyChooseUsData = getWhyChooseUsData('digital-marketing');
    const subServices = getSubServices('digital-marketing');
    
    const digitalMarketingFaqs = [
        {
            id: 1,
            question: "What digital marketing services does RevionTech offer?",
            answer: "RevionTech provides full-service digital marketing solutions including SEO, social media marketing, content marketing, PPC advertising, email marketing, brand strategy, and conversion rate optimization. Our goal is to increase visibility, drive targeted traffic, and generate measurable business growth."
        },
        {
            id: 2,
            question: "How can digital marketing help grow my business?",
            answer: "Digital marketing helps your business reach the right audience at the right time. Through data-driven strategies, we improve brand awareness, attract qualified leads, increase engagement, and boost conversions across search engines and social platforms."
        },
        {
            id: 3,
            question: "Do you provide customized digital marketing strategies?",
            answer: "Yes, every business is unique. RevionTech creates customized digital marketing strategies based on your industry, target audience, competition, and business goals to ensure maximum ROI and long-term success."
        },
        {
            id: 4,
            question: "How long does it take to see results from digital marketing?",
            answer: "Results depend on the strategy used. SEO typically shows noticeable improvements within 3–6 months, while paid campaigns and social media advertising can generate quicker results. We focus on both short-term wins and sustainable long-term growth."
        },
        {
            id: 5,
            question: "Do you manage social media accounts and ad campaigns?",
            answer: "Yes, we manage social media profiles, create engaging content, run targeted ad campaigns, and monitor performance across platforms like Facebook, Instagram, LinkedIn, and Google Ads to maximize reach and conversions."
        },
        {
            id: 6,
            question: "Is SEO included in your digital marketing services?",
            answer: "Absolutely. SEO is a core part of our digital marketing services. We handle on-page SEO, technical SEO, content optimization, keyword research, and link-building strategies to improve your website’s search engine rankings."
        },
        {
            id: 7,
            question: "Do you provide performance tracking and reports?",
            answer: "Yes, RevionTech provides transparent reporting with detailed performance insights, including traffic growth, keyword rankings, lead generation, conversions, and campaign ROI, so you always know how your marketing is performing."
        },
        {
            id: 8,
            question: "Can you help with lead generation and conversions?",
            answer: "Yes, our digital marketing strategies are designed to attract high-quality leads and convert them into customers. We optimize landing pages, ad creatives, funnels, and user journeys to improve conversion rates."
        },
        {
            id: 9,
            question: "Do you work with startups and small businesses?",
            answer: "Yes, we work with startups, small businesses, and enterprises. Our digital marketing solutions are scalable and budget-friendly, allowing businesses of all sizes to grow effectively."
        },
        {
            id: 10,
            question: "How do I get started with RevionTech’s digital marketing services?",
            answer: "Getting started is simple. Contact RevionTech to discuss your goals, and our team will create a tailored digital marketing plan aligned with your business objectives."
        }
    ];
    const serviceSchemaData = {
        name: 'Digital Marketing Services',
        description: 'RevionTech offers complete Digital Marketing Services including SEO optimization, social media marketing, PPC advertising, content marketing, email marketing, and data-driven online growth strategies. Increase traffic, generate leads, and grow your brand online.',
        url: 'https://reviontech.com/services/digital-marketing-services',
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
            <FaqsSection faqs={digitalMarketingFaqs} />
            <BrandSlider />
        </>
    );
}
