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
        title: "UI/UX & Graphic Design",
        desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.",
        link: "/services/ui-ux-design",
        image: "/images/home/services/Ui-UX-&-Graphic-Design.webp"
    },
    {
        id: 2,
        title: "Website Development",
        desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.",
        link: "/services/web-development",
        image: "/images/home/services/Website-Development-services.webp"
    },
    {
        id: 3,
        title: "App Development",
        desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.",
        link: "/services/app-development",
        image: "/images/home/services/Mobile-App-Development.webp"
    },
    {
        id: 4,
        title: "Saas & AI Solutions",
        desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.",
        link: "/services/ai-solutions",
        image: "/images/home/services/Saas-&-Ai-Solution.webp"
    },
    {
        id: 5,
        title: "Digital Marketing",
        desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.",
        link: "/services/digital-marketing",
        image: "/images/home/services/Digital-Marketing.webp"
    },
    {
        id: 6,
        title: "E-Commerce Development",
        desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard.",
        link: "/services/ecommerce-development",
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
                            {servicesData.map((service,key) => (
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
                                                <h3>{service.title}</h3>
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