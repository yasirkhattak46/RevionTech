import AboutBanner from "../../component/about/banner/Banner";
import QualityDesignSection from "../../component/about/quality/QualityDesignSection";
import TechnologiesSlider from "../../component/shared/TechnologiesSlider";
import FounderSection from "../../component/about/founder/FounderSection";
import ContactSection from "../../component/shared/ContactSection";

export const metadata = {
    title: 'About RevionTech | Website Development Services, App Development & AI Solutions Company',
    description:
        'RevionTech is a leading technology solutions company specializing in Website Development Services, Mobile App Development, AI & SaaS Solutions, Digital Marketing, and UI/UX Design. Learn about our mission, values, and the expert team driving innovation for businesses worldwide.',
    keywords: [
        'about RevionTech',
        'website development Services',
        'web development agency',
        'mobile app development Services',
        'AI solutions provider',
        'SaaS development Services',
        'IT solutions Services',
        'digital marketing agency',
        'software development team'
    ],
    alternates: {
        canonical: 'https://reviontech.com/about-us',
    },
    openGraph: {
        title:
            'About RevionTech | Leading Website Development Services, App Development & AI Solutions Company',
        description:
            'Learn about RevionTech’s mission, vision, and expert team delivering Website Development, App Development, AI Solutions, and Digital Marketing for businesses worldwide.',
        url: 'https://reviontech.com/about-us',
        type: 'website',
    },
};


export default function AboutUs() {
    return (
        <>
            <AboutBanner/>
            <TechnologiesSlider/>
            <QualityDesignSection/>
            <FounderSection/>
            <ContactSection/>
        </>

    );
}
