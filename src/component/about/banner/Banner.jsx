 "use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import "./banner.scss"
 import {HiArrowNarrowRight} from "react-icons/hi";


const AboutBanner = () => {
    return (
        <section className={'about-banner'}>
            <div className="container">
                <div className="row">
                    {/* Left side - Image Grid */}
                    <div className="col-lg-6 left-grid">
                        <div className="image-grid">
                            <motion.div 
                                className="grid-item grid-item-1"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Image
                                    src="/images/about/Reavion-tech.webp"
                                    alt="Team collaboration"
                                    fill
                                    className="grid-image"
                                />
                            </motion.div>
                            <motion.div 
                                className="grid-item grid-item-2"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Image
                                    src="/images/about/team-work.webp"
                                    alt="Working together"
                                    fill
                                    className="grid-image"
                                />
                            </motion.div>
                            <motion.div 
                                className="grid-item grid-item-3"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Image
                                    src="/images/about/Team-meeting.webp"
                                    alt="Team meeting"
                                    fill
                                    className="grid-image"
                                />
                            </motion.div>
                            <motion.div 
                                className="grid-item grid-item-4"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <Image
                                    src="/images/about/creative-work.webp"
                                    alt="Creative work"
                                    fill
                                    className="grid-image"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="col-lg-6 right-content">
                        <motion.div 
                            className="content-wrapper"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="section-tag">About us</span>
                            <h1 className="banner-title">
                                Masters Of <span className="highlight">Digital</span> And Design
                            </h1>
                            <p className="banner-subtitle">Infusing Creativity into Your Digital Presences.</p>
                            <p className="banner-description">
                                Reviontech works as your digital agent with a care of valuing client satisfaction. 
                                Our expertise lies in various market niches, involving digital marketing, content creation, 
                                logo design, branding, and web development.
                            </p>
                            <Link href={'#'} className="transparent-btn">
                                <span className="btn-text"><span>Contact Us Now</span></span>
                                <span className="btn-icon"><HiArrowNarrowRight/></span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;