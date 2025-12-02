import AboutBanner from "../../component/about/banner/Banner";
import QualityDesignSection from "../../component/about/quality/QualityDesignSection";
import TechnologiesSlider from "../../component/shared/TechnologiesSlider";
import FounderSection from "../../component/about/founder/FounderSection";
import ContactSection from "../../component/shared/ContactSection";

export const metadata = {
    title: 'About Us - Leading Technology Solutions Provider',
    description: 'Learn about RevionTech, a premier technology solutions company specializing in web development, app development, AI solutions, and digital marketing. Meet our team and discover our mission to transform businesses through innovation.',
    keywords: ['about RevionTech', 'technology company', 'software development team', 'IT solutions provider', 'web development company', 'app development experts'],
    alternates: {
        canonical: 'https://www.reviontech.com/about-us',
    },
    openGraph: {
        title: 'About RevionTech - Leading Technology Solutions Provider',
        description: 'Discover how RevionTech delivers innovative technology solutions to transform businesses worldwide.',
        url: 'https://www.reviontech.com/about-us',
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
