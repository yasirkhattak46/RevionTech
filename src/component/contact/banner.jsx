"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./banner.scss"
const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
};

const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4, ease: "easeOut" } },
};

const ContactBanner = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (
        <section className="contact-banner" ref={ref}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-11"> {/* Adjust column width as needed */}
                        <div className="contact-banner-content">
                            <motion.h2
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={titleVariants}
                            >
                                Ready to <span>Elevate</span> Your Digital Presence?
                            </motion.h2>
                            <motion.p
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={textVariants}
                            >
                                Let's discuss your project and turn your ideas into impactful digital solutions. Reach out to us today!
                            </motion.p>
                            <motion.div
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={buttonVariants}
                            >
                                <Link href="/contact" className="btn-primary-contact">
                                    Get a Free Consultation
                                </Link>
                                {/* Optional: Add a second button if needed, e.g., for Portfolio */}
                                <Link href="/portfolio" className="btn-secondary-contact">
                                    View Our Work
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;