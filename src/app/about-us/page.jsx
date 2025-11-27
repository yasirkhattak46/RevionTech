import AboutBanner from "../../component/about/banner/Banner";
import QualityDesignSection from "../../component/about/quality/QualityDesignSection";
import TechnologiesSlider from "../../component/shared/TechnologiesSlider";
import FounderSection from "../../component/about/founder/FounderSection";
import ContactSection from "../../component/shared/ContactSection";

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
