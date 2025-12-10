"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {HiArrowNarrowRight} from "react-icons/hi";
import {FiPhone, FiMail, FiFacebook, FiInstagram, FiLinkedin} from "react-icons/fi";
import {Code2, Palette, Target, Smartphone, Brain} from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock scroll when menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    return (
        <>
            {/* MAIN NAVBAR (Desktop + Mobile Trigger) */}
            <nav className={`navbar fixed-top navbar-expand-lg ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
                <div className="container">

                    {/* LOGO */}
                    <Link href="/" className="navbar-brand fw-bold header-logo">
                        <Image loading={"eager"}
                            src="/images/RevionTech-Logo.webp"
                            alt="RevionTech"
                            fill
                            style={{objectFit: "contain"}}
                        />
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className={`navbar-toggler d-lg-none ${mobileOpen ? 'open' : ''}`}
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span className="hamburger-line line1"></span>
                        <span className="hamburger-line line2"></span>
                        <span className="hamburger-line line3"></span>
                    </button>


                    {/* DESKTOP MENU */}
                    <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/about-us">About</Link></li>
                            <li className="nav-item dropdown"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}>
                                <Link href="#" className="nav-link dropdown-toggle border-0 bg-transparent">
                                    Services
                                    <span className={`dropdown-icon ${servicesOpen ? 'open' : ''}`}>+</span>
                                </Link>

                                <ul className={`dropdown-menu ${servicesOpen ? 'open' : ''}`}>
                                    <li>
                                        <Link href="/services/web-development-services" className="dropdown-item">
                                            <span className="service-icon"><Code2/></span>
                                            Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/app-development-services" className="dropdown-item">
                                            <span className="service-icon"><Smartphone/></span>
                                            App Development
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services/graphic-design-services" className="dropdown-item">
                                            <span className="service-icon"><Palette/></span>
                                            Graphic Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/digital-marketing-services" className="dropdown-item">
                                            <span className="service-icon"><Target/></span>
                                            Digital Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/ai-solutions-services" className="dropdown-item">
                                            <span className="service-icon"><Brain/></span>
                                            Saas & AI Solutions
                                        </Link>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item"><Link className="nav-link" href="/portfolio">Portfolio</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/contact-us">Contact</Link></li>
                        </ul>

                        {/* BUTTON */}
                        <Link href={"/contact-us"} className="transparent-btn">
                            <span className="btn-text"><span>Free Consultation</span></span>
                            <span className="btn-icon"><HiArrowNarrowRight/></span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* MOBILE SLIDE-IN MENU */}
            <div className={`mobile-slide ${mobileOpen ? "open" : ""}`}>
                <div className="mobile-header">
                    <button className="close-btn" onClick={() => setMobileOpen(false)}>✕</button>
                </div>

                <div className="mobile-links nav-item">
                    <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
                    <Link href="/about-us" onClick={() => setMobileOpen(false)}>About</Link>
                    <div className="mobile-dropdown-header dropdown-toggle"
                         onClick={() => setServicesOpen(prev => !prev)}>
                        Services <span className={`dropdown-icon ${servicesOpen ? 'open' : ''}`}>+</span>
                    </div>
                    {servicesOpen && (
                        <div className={`mobile-dropdown-list ${servicesOpen ? 'open' : ''}`}>
                            <Link href="/services/web-development-services" onClick={() => setMobileOpen(false)}>
                                <span className="service-icon"><Code2/></span>
                                Web Development
                            </Link>
                            <Link href="/services/app-development-services" onClick={() => setMobileOpen(false)}>
                                <span className="service-icon"><Smartphone/></span>
                                App Development
                            </Link>

                            <Link href="/services/graphic-design-services" onClick={() => setMobileOpen(false)}>
                                <span className="service-icon"><Palette/></span>
                               Graphic Design
                            </Link>
                            <Link href="/services/digital-marketing-services" onClick={() => setMobileOpen(false)}>
                                <span className="service-icon"><Target/></span>
                                Digital Marketing
                            </Link>
                            <Link href="/services/ai-solutions-services" onClick={() => setMobileOpen(false)}>
                                <span className="service-icon"><Brain/></span>
                                AI Solutions
                            </Link>
                        </div>
                    )}

                    <Link href="/portfolio" onClick={() => setMobileOpen(false)}>Portfolio</Link>
                                        <Link href="/contact-us" onClick={() => setMobileOpen(false)}>Contact</Link>
                </div>
                <div className="mobile-contact">
                    <a href="tel:+923305858969"><FiPhone/> +92 330 5858969</a>
                    <a href="mailto:contact@reviontech.com"><FiMail/> Contact@Reviontech.com</a>

                    <div className="social-links">
                        <a target={'_blank'} rel="noopener noreferrer" href="https://www.facebook.com/reviontech"><FiFacebook/></a>
                        <a target={'_blank'} rel="noopener noreferrer" href="https://www.instagram.com/revion_tech"><FiInstagram/></a>
                        <a target={'_blank'} rel="noopener noreferrer" href="https://www.linkedin.com/company/reviontech"><FiLinkedin/></a>
                    </div>
                </div>
            </div>
        </>
    );
}
