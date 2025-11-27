"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';
import {GoArrowUpRight} from "react-icons/go";
import "./services.scss"
import AnimatedItem from "../../wrappers/AnimatedItem";

const servicesData = [
    {
        id: 1,
        title: "Graphic Designing",
        desc: "We design creative branding, logos, and marketing visuals that strengthen your identity and help your business stand out with professional design.",
        link: "/services/ui-ux-design",
        image: "/images/home/services/Ui-UX-&-Graphic-Design.webp"
    },
    {
        id: 2,
        title: "Website Development",
        desc: "We build fast, modern, and responsive websites that deliver great user experience and support your business growth across all devices.",
        link: "/services/web-development",
        image: "/images/home/services/Website-Development-services.webp"
    },
    {
        id: 3,
        title: "App Development",
        desc: "We develop user friendly and scalable mobile apps for Android and iOS that turn your ideas into powerful digital products.",
        link: "/services/app-development",
        image: "/images/home/services/Mobile-App-Development.webp"
    },
    {
        id: 4,
        title: "Saas & AI Solutions",
        desc: "We create custom SaaS platforms and AI tools that automate tasks, improve efficiency, and help businesses make smarter decisions.",
        link: "/services/ai-solutions",
        image: "/images/home/services/Saas-&-Ai-Solution.webp"
    },
    {
        id: 5,
        title: "Digital Marketing ",
        desc: "We create targeted digital marketing strategies including SEO, social media, and paid ads to boost visibility, attract customers, and grow your brand online.",
        link: "/services/digital-marketing",
        image: "/images/home/services/Digital-Marketing.webp"
    }
];

const DigitalServices = () => {
    const [activeService, setActiveService] = useState(servicesData[0]);

    return (
        <section className="digital-services-section">
            <div className="bg-pattern"/>
            <div className="container">
                <div className="row text-center section-header">
                    <div className="col-12">
                        <AnimatedItem type="fadeUp" delay={0.2}>
                            <h2>Our Digital <span> Services</span></h2>
                        </AnimatedItem>
                        <AnimatedItem type="fadeUp" delay={0.5}>
                            <p>
                                Reviontech not only builds digital marketing tools but also facilitates
                                networking among local business owners.
                            </p>
                        </AnimatedItem>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="image-wrapper">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeService.image}
                                    src={activeService.image}
                                    alt={activeService.title}
                                    initial={{opacity: 0, scale: 1.05}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 0.4}}
                                />
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="services-list">
                            {servicesData.map((service, key) => (
                                <Link
                                    href={service.link}
                                    key={service.id}
                                    className="text-decoration-none"
                                >
                                    <AnimatedItem type="fadeRight" delay={key * 0.1}>
                                        <div
                                            className={`service-item ${activeService.id === service.id ? 'active' : ''}`}
                                            onMouseEnter={() => setActiveService(service)}
                                        >
                                            <div className="service-header">
                                                <h2>{service.title}</h2>
                                                <GoArrowUpRight className="icon-arrow" size={35}/>
                                            </div>
                                            <p className="service-desc">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </AnimatedItem>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalServices;