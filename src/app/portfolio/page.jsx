import PortfolioBanner from "../../component/portfolio/banner/Banner";
import FeaturedProjectsSection from "../../component/shared/featureProject/FeaturedProjectsSection";
import StatsSection from "../../component/shared/statsSection/Stats";
import ContactSection from "../../component/shared/ContactSection";
import BrandSlider from "../../component/shared/BrandSlider";
import TestimonialsSection from "../../component/home/testimonials/TestimonialsSection";

export const metadata = {
    title: 'Portfolio - Our Web & App Development Projects | RevionTech',
    description: 'Explore RevionTech portfolio featuring successful web development, mobile app development, AI solutions, and digital marketing projects. See our work for clients across various industries.',
    keywords: ['portfolio', 'web development projects', 'app development showcase', 'client projects', 'case studies', 'RevionTech work', 'successful projects'],
    alternates: {
        canonical: 'https://www.reviontech.com/portfolio',
    },
    openGraph: {
        title: 'RevionTech Portfolio - Our Best Projects & Case Studies',
        description: 'Discover our portfolio of successful projects in web development, app development, and digital solutions.',
        url: 'https://www.reviontech.com/portfolio',
        type: 'website',
    },
};

export default function PortfolioPage() {
  return (
    <>
        <PortfolioBanner/>
        <StatsSection />
        <FeaturedProjectsSection isPortfolioPage={true} />
        <BrandSlider/>
        <TestimonialsSection/>
        <ContactSection />
    </>
  );
}