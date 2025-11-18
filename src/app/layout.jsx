"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.scss"

export default function RootLayout({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            mirror: false,
        });
        AOS.refresh(); // <-- refresh ensures all elements are registered
    }, []);

    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
