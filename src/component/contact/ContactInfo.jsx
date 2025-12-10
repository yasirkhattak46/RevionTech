"use client"

import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Phone, MapPin, Mail} from 'lucide-react';
import "./contactInfo.scss";
import AnimatedItem from "../wrappers/AnimatedItem";
import ContactForm from "../shared/ContactForm";


const cardVariants = {
    hidden: {opacity: 0, y: 30},
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.4 + (i * 0.15),
            ease: "easeOut"
        }
    })
};


const ContactInfo = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    const contactItems = [
        {
            icon: Phone,
            title: 'CALL',
            info: '+92 330 5858969',
            link: 'tel:+923305858969'
        },
        {
            icon: MapPin,
            title: 'LOCATION',
            info: 'Jinnah Ave, Block G G-7',
            subInfo: 'Islamabad, Pakistan',
            link: 'https://maps.google.com/?q=Islamabad,Pakistan'
        },
        {
            icon: Mail,
            title: 'EMAIL',
            info: 'contact@reviontech.com',
            link: 'mailto:contact@reviontech.com'
        }
    ];

    return (
        <section className="contact-section">
            <div className="bg-pattern"></div>
            <div className="glow-bg top-right"></div>
            <div className="glow-bg bottom-left"></div>
            <div className="container position-relative z-2">
                <div className="row justify-content-center mb-5 text-center">
                    <div className="col-lg-8">
                        <AnimatedItem type="fadeUp">
                            <h2 className="section-title">
                                Let's Start a <span className="highlight">Conversation</span>
                            </h2>
                            <p className="section-desc">
                                Have an idea? Let's build something amazing together.
                            </p>
                        </AnimatedItem>
                    </div>
                </div>

                <div className="row g-0 contact-wrapper" ref={ref}>
                    <div className="col-lg-6 map-column">
                        <div className="contact-cards-vertical">
                            {contactItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="mb-4"
                                    custom={index}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={cardVariants}
                                >
                                    <a href={item.link} className="contact-card">
                                        <div className="icon-wrapper">
                                            <item.icon className="contact-icon"/>
                                        </div>
                                        <div className="card-content">
                                            <h3 className="contact-title">{item.title}</h3>
                                            <p className="contact-info">{item.info}</p>
                                            {item.subInfo && <p className="contact-subinfo">{item.subInfo}</p>}
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-6 form-column">
                        <AnimatedItem type="fadeLeft">
                            <ContactForm />
                        </AnimatedItem>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactInfo;
