"use client";
import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {Brain, Cpu, Network, Zap, Bot, Sparkles, MoveRight} from 'lucide-react';
import styles from './AiSolutionsBanner.module.scss';

const AiSolutionsBanner = ({data}) => {
    // Default data if not provided
    const bannerData = data || {
        title: "SaaS & AI Solutions for Modern Business",
        subtitle: "Intelligent Software Solutions Powered by AI",
        description: "Harness cutting-edge AI and cloud technologies to transform your business operations.",
        ctaText: "Explore Solutions",
        ctaLink: "/contact-us"
    };

    // AI/Tech icons for floating animation
    const aiIcons = [
        {Icon: Brain, delay: 0, position: {left: '3%', top: '10%'}},
        {Icon: Cpu, delay: 0.5, position: {right: '3%', top: '15%'}},
        {Icon: Network, delay: 1, position: {left: '5%', bottom: '15%'}},
        {Icon: Bot, delay: 1.5, position: {right: '5%', bottom: '20%'}},
        {Icon: Sparkles, delay: 2, position: {left: '10%', top: '25%'}},
        {Icon: Zap, delay: 2.5, position: {right: '10%', top: '30%'}},
    ];

    return (
        <section className={styles.heroBanner}>
            {/* Floating AI Icons */}
            {aiIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className={styles.floatingIcon}
                    style={{...item.position, position: 'absolute'}}
                    initial={{opacity: 0, scale: 0}}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.1, 1],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        opacity: {duration: 3, repeat: Infinity, delay: item.delay},
                        scale: {duration: 3, repeat: Infinity, delay: item.delay},
                        y: {duration: 4, repeat: Infinity, delay: item.delay}
                    }}
                >
                    <item.Icon size={40}/>
                </motion.div>
            ))}

            {/* Content */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left Content */}
                    <motion.div
                        className={styles.content}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
                        {/* AI Badge */}
                        <motion.div
                            className={styles.techBadge}
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6, delay: 0.1}}
                        >
                            <Brain size={20}/>
                            <span>AI & SaaS Services</span>
                        </motion.div>

                        <motion.h1
                            className={styles.title}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            Custom <span>AI and SaaS</span> Services for Modern Businesses
                        </motion.h1>

                        <motion.p
                            className={styles.subtitle}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                        >
                            Revion Tech delivers custom AI and SaaS Services that automate business processes, enhance
                            decision making, and improve scalability. From intelligent automation, machine learning,
                            predictive analytics, to cloud-based SaaS platforms, we create smart, reliable, and innovative
                            digital tools that help businesses grow efficiently and stay ahead in a competitive market.
                        </motion.p>

                        {/* AI Technologies Pills */}
                        <motion.div
                            className={styles.techStack}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.5}}
                        >
                            <span className={styles.techPill}>Machine Learning</span>
                            <span className={styles.techPill}>Deep Learning</span>
                            <span className={styles.techPill}>NLP</span>
                            <span className={styles.techPill}>Computer Vision</span>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.6}}
                        >
                            <Link href={bannerData.ctaLink || '/contact-us'} className="transparent-btn">
                                <span className="btn-text"><span>Transform Your Business with AI & SaaS</span></span>
                                <span className="btn-icon"><MoveRight size={20}/></span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        className={styles.imageSection}
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/home/services/Saas-&-Ai-Solution.webp"
                                alt="AI Solutions"
                                fill
                                className={styles.bannerImage}
                                sizes="(max-width: 991px) 100vw, 50vw"
                                priority
                            />

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AiSolutionsBanner;