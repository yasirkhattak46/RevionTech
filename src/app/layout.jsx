import "aos/dist/aos.css";
import "./globals.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import SmoothScroll from "../component/UI/SmoothScroll";
import BreadcrumbSchema from "../component/shared/BreadcrumbSchema";
import {Poppins,Inter } from "next/font/google";


const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
});
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600", "700"],
});

// Viewport Configuration
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#6366f1',
};

// SEO Metadata
export const metadata = {
    metadataBase: new URL('https://reviontech.com'),
    title: {
        default: 'RevionTech | Web & App Development, AI Solutions & Digital Marketing',
        template: '%s | RevionTech'
    },
    description: 'RevionTech provides cutting-edge web development, app development, AI solutions, graphic design, and digital marketing services. Transform your business with innovative technology solutions.',
    keywords: ['web development', 'app development', 'AI solutions', 'digital marketing', 'graphic design', 'software development', 'RevionTech', 'tech solutions'],
    authors: [{ name: 'RevionTech' }],
    creator: 'RevionTech',
    publisher: 'RevionTech',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/images/icons/192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/images/icons/512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/images/icons/192x192.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { rel: 'mask-icon', url: '/images/icons/safari-pinned-tab.svg', color: '#6366f1' },
        ],
    },
    manifest: '/manifest.webmanifest',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://reviontech.com',
        siteName: 'RevionTech',
        title: 'RevionTech | Web & App Development, AI Solutions & Digital Marketing',
        description: 'RevionTech provides cutting-edge web development, app development, AI solutions, graphic design, and digital marketing services.',
        images: [
            {
                url: '/images/OgImages/RevionTech.png',
                width: 1200,
                height: 630,
                alt: 'RevionTech - Technology Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'RevionTech | Web & App Development, AI Solutions & Digital Marketing',
        description: 'Transform your business with innovative technology solutions from RevionTech.',
        images: ['/images/OgImages/RevionTech.png'],
        creator: '@reviontech',
        site: '@reviontech',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Add your Google Search Console verification code
    },
};

export default function RootLayout({children}) {


    return (
        <html lang="en">
        <head>
            {/* Google tag (gtag.js) */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-1X7ET8B6NV"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-1X7ET8B6NV');
                    `,
                }}
            />
        </head>
        <body className={`${poppins.variable} ${inter.variable}`}>
        <BreadcrumbSchema />
        <SmoothScroll />
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
