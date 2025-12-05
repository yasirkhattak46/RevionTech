import ContactBanner from "../../component/contact/banner";
import ContactInfo from "../../component/contact/ContactInfo";

export const metadata = {
    title: 'Contact Us - Get in Touch with RevionTech',
    description: 'Contact RevionTech for web development, app development, AI solutions, and digital marketing services. Get a free consultation and quote for your next project. Call +92 330 5858969 or email contact@reviontech.com',
    keywords: ['contact RevionTech', 'get quote', 'free consultation', 'web development inquiry', 'app development contact', 'digital marketing services'],
    alternates: {
        canonical: 'https://reviontech.com/contact-us',
    },
    openGraph: {
        title: 'Contact RevionTech - Get Your Free Consultation',
        description: 'Ready to transform your business? Contact us today for expert technology solutions.',
        url: 'https://reviontech.com/contact-us',
        type: 'website',
    },
};

export default function ContactUs() {
    return (
        <>
            <ContactBanner/>
            <ContactInfo/>
        </>
    );
}
