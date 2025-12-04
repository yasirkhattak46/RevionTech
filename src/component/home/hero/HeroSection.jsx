"use client";

import Image from "next/image";
import React, {useState, useEffect} from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import {Code2, Palette, Target, Smartphone, Brain, SendHorizontal} from "lucide-react";
import Link from "next/link";
import "./hero.scss";
import AnimatedItem from "../../wrappers/AnimatedItem";

export default function HeroSection() {
    const services = [
        {icon: Code2, name: "Web Development", link: "/services/web-development-services"},
        {icon: Palette, name: "Graphic Design", link: "/services/graphic-design-services"},
        {icon: Smartphone, name: "App Development", link: "/services/app-development-services"},
        {icon: Target, name: "Digital Marketing", link: "/services/digital-marketing-services"},
        {icon: Brain, name: "AI Solutions", link: "/services/ai-solutions-services"},
    ];

    const serviceTitles = [
        "Professional Website Development Services",
        "Mobile App Development Services",
        "AI & SaaS Solutions for Business Growth",
        "Creative Graphic Design & Branding Services",
        "Result-Driven Digital Marketing Strategies"
    ];

    const [imageLoaded, setImageLoaded] = useState(false);
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('Professional Website Development Services');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        // Set image as loaded after a short delay to ensure smooth animation
        const timer = setTimeout(() => {
            setImageLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Typing animation effect
    useEffect(() => {
        const currentTitle = serviceTitles[currentTitleIndex];

        const typingSpeed = isDeleting ? 30 : 80;
        const pauseEnd = 2000; // Pause at end of typing

        if (!isDeleting && displayedText === currentTitle) {
            // Finished typing, wait then start deleting
            const timer = setTimeout(() => setIsDeleting(true), pauseEnd);
            return () => clearTimeout(timer);
        }

        if (isDeleting && displayedText === '') {
            // Finished deleting, move to next title
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % serviceTitles.length);
            return;
        }

        // Type or delete one character
        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
            } else {
                setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTitleIndex, serviceTitles]);

    return (
        <section className="hero-section">
            <div className="floating-elements">
                <div className="float-circle circle-1"></div>
                <div className="float-circle circle-2"></div>
                <div className="float-circle circle-3"></div>
                {/* Service background icons */}
                <Code2 className="service-background-icon icon-web"/>
                <Palette className="service-background-icon icon-ui"/>
                <Smartphone className="service-background-icon icon-app"/>
                <Target className="service-background-icon icon-marketing"/>
                <Brain className="service-background-icon icon-ai"/>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <AnimatedItem type="fadeLeft" className="w-100 hero-badge-container">
                            <div className="hero-badge">
                                <span>🚀 Your Digital Success Partner</span>
                            </div>
                        </AnimatedItem>

                        <AnimatedItem type="fadeLeft">
                            <h1 className="hero-title">
                                {displayedText}
                                <span className="typing-cursor">|</span>
                            </h1>
                        </AnimatedItem>

                        <AnimatedItem type="fadeLeft">
                            <p className={'banner-description'}>
                                At RevionTech we create modern websites, scalable mobile apps, smart AI tools, creative
                                designs, and powerful marketing strategies that elevate your brand and drive long term
                                digital growth and success.
                            </p>
                        </AnimatedItem>

                        <AnimatedItem type="fadeLeft">
                            <div className="services-quick-links">
                                {services.map((service, index) => (
                                    <Link
                                        key={index}
                                        href={service.link}
                                        className="service-chip"
                                        style={{animationDelay: `${index * 0.1}s`}}
                                    >
                                        <service.icon size={16}/>
                                        <span>{service.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </AnimatedItem>

                        <AnimatedItem type="fadeUp">
                            <div
                                className="hero-buttons mt-4 d-flex gap-3 justify-content-center justify-content-lg-start">
                                <Link href={'/portfolio'} className="primary-btn">
                                    <span className="btn-text"><span>View Portfolio</span></span>
                                    <span className="btn-icon"><HiArrowNarrowRight/></span>
                                </Link>
                                <Link href={'/contact-us'} className="transparent-btn">
                                    <span className="btn-text"><span>Contact Now</span></span>
                                    <span className="btn-icon"><SendHorizontal/></span>
                                </Link>
                            </div>
                        </AnimatedItem>
                        <hr className="hero-divider"/>
                    </div>
                    <div className="text-center">
                        <Image
                            src="/images/home/banner.webp"
                            alt="RevionTech Hero"
                            height={800}
                            width={800}
                            className={`hero-image img-fluid object-fit-contain ${imageLoaded ? 'image-loaded' : ''}`}
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
