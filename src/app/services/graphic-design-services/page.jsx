import UxUiDesignBanner from "../../../component/services/banners/graphic-design/GraphicDesignBanner";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import FaqsSection from "../../../component/shared/faqs/FaqsSection";
import '../ServiceDetail.scss';
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';
import ServiceSchema from "../../../component/shared/ServiceSchema";

export const metadata = {
    title: 'Graphic Design Services | UI/UX Design, Branding & Creative Visual Design',
    description:
        'RevionTech offers professional Graphic Design Services including UI/UX design, branding, logo creation, marketing materials, and complete visual identity design. Elevate your brand with stunning, user-focused and modern creative designs.',
    keywords: [
        'graphic design services',
        'ui ux design',
        'branding and identity design',
        'logo design services',
        'visual identity design',
        'creative design agency',
        'user interface design',
        'user experience design',
        'brand design company'
    ],
    alternates: {
        canonical: 'https://reviontech.com/services/graphic-design-services',
    },
    openGraph: {
        title: 'Graphic Design Services | RevionTech',
        description:
            'Transform your brand with professional graphic design, UI/UX design, and creative visual identity solutions from RevionTech.',
        url: 'https://reviontech.com/services/graphic-design-services',
        type: 'website',
    },
};


export default function UiUxDesignPage() {
    const whyChooseUsData = getWhyChooseUsData('graphic-design');
    const subServices = getSubServices('graphic-design');
    
    const graphicDesignFaqs = [
        {
            id: 1,
            question: "What graphic design services does RevionTech offer?",
            answer: "RevionTech provides creative graphic design services including brand identity design, logo design, website and app UI graphics, social media creatives, marketing materials, banners, presentations, and custom visual assets tailored to your brand."
        },
        {
            id: 2,
            question: "Do you create custom designs or use templates?",
            answer: "We focus on fully custom graphic design solutions. Every design is created from scratch to match your brand personality, target audience, and business goals, ensuring originality and a strong visual identity."
        },
        {
            id: 3,
            question: "Can you design branding materials for new businesses?",
            answer: "Yes, we help startups and new businesses build a strong brand identity from the ground up. This includes logo design, brand colors, typography, brand guidelines, and marketing visuals for a consistent brand presence."
        },
        {
            id: 4,
            question: "Do you design graphics for websites and mobile apps?",
            answer: "Absolutely. Our designers create modern, user-focused UI graphics for websites and mobile applications, ensuring visual consistency, usability, and an engaging user experience across all platforms."
        },
        {
            id: 5,
            question: "How long does a graphic design project take?",
            answer: "Project timelines vary depending on the scope and complexity. Simple designs may take a few days, while complete branding or UI design projects may take 2–4 weeks. We provide clear timelines before starting any project."
        },
        {
            id: 6,
            question: "Do you offer revisions on design projects?",
            answer: "Yes, RevionTech includes multiple revision rounds to ensure the final design meets your expectations. We value client feedback and collaborate closely to achieve the desired result."
        },
        {
            id: 7,
            question: "Will I receive editable source files?",
            answer: "Yes, upon project completion, we provide all necessary source files in standard formats, allowing you to use and scale your designs across different platforms without limitations."
        },
        {
            id: 8,
            question: "Can you design marketing and social media graphics?",
            answer: "Yes, we design eye-catching marketing and social media creatives such as posts, ads, banners, flyers, and promotional materials that align with your brand and help increase engagement."
        },
        {
            id: 9,
            question: "How do you ensure design quality and consistency?",
            answer: "We follow a structured design process including research, concept development, brand alignment, and quality checks to ensure consistency, creativity, and professional standards across all designs."
        },
        {
            id: 10,
            question: "How can I start a graphic design project with RevionTech?",
            answer: "You can get started by contacting RevionTech with your design requirements. Our team will understand your needs, share concepts and timelines, and begin the design process after approval."
        }
    ];
    const serviceSchemaData = {
        name: 'Graphic Design Services',
        description: 'RevionTech offers professional Graphic Design Services including UI/UX design, branding, logo creation, marketing materials, and complete visual identity design. Elevate your brand with stunning, user-focused and modern creative designs.',
        url: 'https://reviontech.com/services/graphic-design-services',
        serviceType: 'Graphic Design',
        subServices: subServices?.services?.map(service => ({
            name: service.title,
            description: service.description
        })) || []
    };

    return (
        <>
            <ServiceSchema serviceData={serviceSchemaData} />
            <UxUiDesignBanner />
            <WhyChooseUs 
                title={whyChooseUsData.title}
                subtitle={whyChooseUsData.subtitle}
                features={whyChooseUsData.features}
            />
            <StatsSection />
            <SubServicesSection 
                subServices={subServices}
                serviceSlug="graphic-design"
            />
            <ProcessWeFollowSection />
            <TestimonialsSection />
            <FaqsSection faqs={graphicDesignFaqs} />
            <BrandSlider />
        </>
    );
}
