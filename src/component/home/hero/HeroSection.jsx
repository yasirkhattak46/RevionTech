"use client";

import Image from "next/image";
import React, {useState, useEffect} from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import {PiContactlessPayment} from "react-icons/pi";
import {Code2, Palette, Target, Smartphone, Brain} from "lucide-react";
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

    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        // Set image as loaded after a short delay to ensure smooth animation
        const timer = setTimeout(() => {
            setImageLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

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
                             Transforming Ideas into Powerful Digital Solutions
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
                                <Link href={'#'} className="transparent-btn">
                                    <span className="btn-text"><span>Get Insights</span></span>
                                    <span className="btn-icon"><HiArrowNarrowRight/></span>
                                </Link>
                                <Link href={'/contact-us'} className="transparent-btn">
                                    <span className="btn-text"><span>Contact Now</span></span>
                                    <span className="btn-icon"><PiContactlessPayment/></span>
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
