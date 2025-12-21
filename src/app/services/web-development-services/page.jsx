import WebsiteDevelopmentBanner from "../../../component/services/banners/webDevelopment/WebDevelopmentBanner";
import WhyChooseUs from "../../../component/services/whyChoseUs/WhyChooseUs";
import SubServicesSection from "../../../component/services/subServices/SubServicesSection";
import StatsSection from "../../../component/shared/statsSection/Stats";
import ProcessWeFollowSection from "../../../component/home/process/ProcessWeFollowSection";
import TestimonialsSection from "../../../component/home/testimonials/TestimonialsSection";
import BrandSlider from "../../../component/shared/BrandSlider";
import FaqsSection from "../../../component/shared/faqs/FaqsSection";
import ServiceSchema from "../../../component/shared/ServiceSchema";
import '../ServiceDetail.scss';
import { getWhyChooseUsData, getSubServices } from '../../../data/servicesData';

export const metadata = {
    title: 'Professional Website Development Services',
    description:
        'RevionTech offers professional Website Development Services including custom websites, web applications, e-commerce development, CMS solutions, and modern frameworks like React and Next.js. Build fast, secure, and SEO-optimized websites tailored to your business.',
    keywords: [
        'Professional website development services',
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

    const webDevFaqs = [
        {
            id: 1,
            question: "What types of Professional Website Development Services does RevionTech Offer?",
            answer: "RevionTech develops a wide range of Professional websites including business and corporate websites, eCommerce stores, SaaS and startup websites, landing pages, portfolio sites, and custom web platforms. All our websites are designed to be scalable, secure, and aligned with your business objectives."
        },
        {
            id: 2,
            question: "Do you build custom websites or use templates?",
            answer: "We primarily focus on custom website development tailored to your brand identity and business needs. While templates can be used for faster delivery if requested, our custom approach ensures better performance, scalability, SEO optimization, and a unique user experience."
        },
        {
            id: 3,
            question: "How long does it take to develop a website?",
            answer: "The development timeline depends on the project scope and complexity. A standard business website usually takes 2–4 weeks, while advanced websites such as eCommerce platforms or SaaS dashboards may take 6–10 weeks or longer. We provide a clear timeline after project evaluation."
        },
        {
            id: 4,
            question: "Are your websites mobile-friendly and responsive?",
            answer: "Yes, every website we build is fully responsive and optimized for all devices including mobiles, tablets, and desktops. We follow a mobile-first design approach to ensure excellent performance and user experience across all screen sizes."
        },
        {
            id: 5,
            question: "Do you provide SEO-friendly website development?",
            answer: "Absolutely. Our website development process includes SEO best practices such as clean code structure, fast loading speed, optimized images, schema-ready layouts, and search-engine-friendly URLs to help your website rank better on Google and other search engines."
        },
        {
            id: 6,
            question: "Can you redesign or improve an existing website?",
            answer: "Yes, RevionTech offers website redesign and optimization services. We can modernize your existing website by improving UI/UX, performance, security, content structure, and SEO while maintaining or upgrading your current functionality."
        },
        {
            id: 7,
            question: "Do you offer website maintenance and support after launch?",
            answer: "Yes, we provide ongoing website maintenance and support services including updates, bug fixes, security monitoring, backups, performance optimization, and feature enhancements to ensure long-term stability and growth."
        },
        {
            id: 8,
            question: "Will I be able to manage website content myself?",
            answer: "Yes. We build websites with user-friendly content management systems (CMS) or custom admin panels, allowing you to easily update content, images, blogs, and pages without any technical knowledge."
        },
        {
            id: 9,
            question: "Do you integrate third-party tools and services?",
            answer: "Yes, we integrate third-party tools such as payment gateways, CRM systems, marketing automation tools, analytics, live chat, AI chatbots, and other APIs to enhance your website’s functionality and efficiency."
        },
        {
            id: 10,
            question: "How do I get started with RevionTech for website development?",
            answer: "Getting started is simple. Contact RevionTech with your requirements, and our team will analyze your needs, propose the best solution, share a clear roadmap, and begin development once everything is finalized."
        }
    ];
    
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
            <FaqsSection faqs={webDevFaqs} />
        </>
    );
}
