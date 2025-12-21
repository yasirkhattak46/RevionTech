import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import FaqsSection from "../../../component/shared/faqs/FaqsSection";
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
        canonical: 'https://reviontech.com/services/ai-solutions-services',
    },
    openGraph: {
        title:
            'AI Solutions & SaaS Development Services | RevionTech',
        description:
            'Transform your business with intelligent AI solutions and scalable SaaS development. Build automation systems, AI-driven applications, and cloud-based platforms with RevionTech.',
        url: 'https://reviontech.com/services/ai-solutions-services',
        type: 'website',
    },
};

export default function AiSolutionsPage() {
    const whyChooseUsData = getWhyChooseUsData('ai-solutions');
    const subServices = getSubServices('ai-solutions');
    
    const aiSolutionsFaqs = [
        {
            id: 1,
            question: "What AI solutions does RevionTech offer?",
            answer: "RevionTech provides intelligent AI solutions including AI-powered chatbots, process automation, predictive analytics, recommendation systems, and custom AI integrations. Our solutions help businesses improve efficiency, enhance customer experience, and make data-driven decisions."
        },
        {
            id: 2,
            question: "What types of SaaS products do you develop?",
            answer: "We develop scalable SaaS products such as CRM systems, business management platforms, subscription-based applications, analytics dashboards, and custom cloud-based software. Our SaaS solutions are built to support multi-tenancy, security, and future growth."
        },
        {
            id: 3,
            question: "Can you build a custom AI chatbot for my business?",
            answer: "Yes, RevionTech specializes in custom AI chatbot development for websites, mobile apps, and customer support platforms. Our chatbots can handle FAQs, lead generation, appointment booking, customer support, and system automation while integrating seamlessly with your existing tools."
        },
        {
            id: 4,
            question: "How long does it take to develop an AI or SaaS solution?",
            answer: "The development timeline depends on the project’s complexity, data requirements, and integrations. A basic SaaS MVP or AI solution can take 6–10 weeks, while advanced platforms with custom workflows and analytics may take 3–6 months or more."
        },
        {
            id: 5,
            question: "Do you offer MVP development for startups?",
            answer: "Yes, we help startups and entrepreneurs build MVPs for AI and SaaS products. Our MVP development approach focuses on core features, fast deployment, cost efficiency, and real-user feedback to validate ideas before scaling."
        },
        {
            id: 6,
            question: "How do you ensure scalability and performance for SaaS platforms?",
            answer: "We design SaaS applications using scalable cloud architectures, optimized databases, secure APIs, and performance-focused development practices. Our solutions are built to handle growing users, data, and traffic without compromising speed or reliability."
        },
        {
            id: 7,
            question: "Is data security and privacy ensured in AI and SaaS projects?",
            answer: "Absolutely. We follow strict security standards including data encryption, secure authentication, access controls, and compliance-ready development practices. Our team ensures your AI and SaaS platforms protect user data and meet industry security requirements."
        },
        {
            id: 8,
            question: "Can you integrate AI features into an existing SaaS or website?",
            answer: "Yes, RevionTech can integrate AI-powered features such as chatbots, automation, analytics, and recommendation engines into your existing websites or SaaS platforms without disrupting current operations."
        },
        {
            id: 9,
            question: "Do you provide post-launch support and optimization?",
            answer: "Yes, we offer continuous support after launch, including system monitoring, performance optimization, feature enhancements, bug fixes, and AI model improvements to ensure long-term success."
        },
        {
            id: 10,
            question: "How can I start an AI or SaaS project with RevionTech?",
            answer: "You can get started by contacting RevionTech with your idea or requirements. Our team will evaluate your goals, suggest the best AI or SaaS solution, provide a clear roadmap, and begin development after approval."
        }
    ];
    const serviceSchemaData = {
        name: 'AI Solutions & SaaS Development Services',
        description:
            'RevionTech delivers advanced AI Solutions and custom SaaS Development Services, including machine learning models, AI integration, automation systems, cloud-based platforms, and intelligent software tailored to scale your business.',
        url: 'https://reviontech.com/services/ai-solutions-services',
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
            <FaqsSection faqs={aiSolutionsFaqs} />
            <BrandSlider />
        </>
    );
}
