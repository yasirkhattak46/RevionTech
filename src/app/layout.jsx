"use client";
import "aos/dist/aos.css";
import "./globals.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import SmoothScroll from "../component/UI/SmoothScroll";
import { Space_Grotesk, Manrope } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
    weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ["400", "500", "600", "700"],
});

// export const metadata = {
//     title: "RevionTech",
//     description: "Grow your digital business",
// };

export default function RootLayout({children}) {


    return (
        <html lang="en">
        <body className={`${spaceGrotesk.variable} ${manrope.variable}`}>
        <SmoothScroll />
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
