'use client';

import React from 'react';
import { FaClock, FaLayerGroup, FaGem, FaDollarSign, FaBolt, FaMicrochip } from 'react-icons/fa';
import AnimatedItem from './../../wrappers/AnimatedItem'; // Adjust path as needed
import styles from './QualityDesign.module.scss';

const QualityDesignSection = () => {
    const features = [
        {
            id: 1,
            number: '#1 Experienced Team',
            title: 'Skilled People Behind Every Project',
            description: 'A dedicated team with real world experience in design, development, and strategy to bring your ideas to life.',
            icon: FaClock
        },
        {
            id: 2,
            number: '#2 Quality Work',
            title: 'High Standards in Every Detail',
            description: 'From design to development, every step is crafted with quality to ensure smooth performance and lasting results.',
            icon: FaLayerGroup
        },
        {
            id: 3,
            number: '#3 Creative Approach',
            title: 'Ideas That Stand Out',
            description: 'Fresh thinking and smart solutions that make your business look modern, unique, and professional.',
            icon: FaGem
        },
        {
            id: 4,
            number: '#4 Clear Communication',
            title: 'Always In Touch',
            description: 'Transparent updates and easy communication so you always know what’s happening with your project.',
            icon: FaDollarSign
        },
        {
            id: 5,
            number: '#5 Trust & Reliability',
            title: 'Delivering on Every Promise',
            description: 'Accurate timelines, consistent progress, and results you can confidently rely on.',
            icon: FaBolt
        },
        {
            id: 6,
            number: '#6 Ongoing Support',
            title: 'Support That Never Stops',
            description: 'After launch, we stay with you to maintain, improve, and grow your digital product.',
            icon: FaMicrochip
        }
    ];

    return (
        <section className={styles.qualityDesignSection}>
            {/* Background Effects */}
            <div className={styles.glowBg}></div>
            <div className={styles.bgGrid}></div>

            {/* Content Wrapper */}
            <div className={styles.contentWrapper}>
                <div className="container">
                    {/* Section Heading */}
                    <AnimatedItem type="fadeUp" delay={0}>
                        <div className={styles.sectionHeading}>
                            <h2>
                                Your <span className={styles.highlight}> Vision</span>  Our<span className={styles.highlight}> Expertise.</span>
                            </h2>
                            <p className={styles.subtitle}>
                                At Revion Tech, every project is handled by an experienced team focused on delivering clean, creative, and high quality digital solutions that truly support your business growth.                            </p>
                            <p className={styles.description}>
                                From planning to launch, everything is built with clarity, care, and dedication. Our goal is simple — make your digital journey easy, stress free, and successful.                            </p>
                        </div>
                    </AnimatedItem>

                    {/* Feature Cards with Grid Lines */}
                    <div className={styles.featureCards}>
                        <div className={styles.gridContainer}>
                            {/* Horizontal Lines */}
                            <AnimatedItem type="fadeRight" delay={0.3}>
                                <div className={`${styles.horizontalLine} ${styles.line1}`} />
                            </AnimatedItem>
                            <AnimatedItem type="fadeRight" delay={0.4}>
                                <div className={`${styles.horizontalLine} ${styles.line2}`} />
                            </AnimatedItem>


                            {/* Vertical Lines */}
                            <AnimatedItem type="fadeUp" delay={0.3}>
                                <div className={`${styles.verticalLine} ${styles.vLine1}`} />
                            </AnimatedItem>
                            <AnimatedItem type="fadeUp" delay={0.5}>
                                <div className={`${styles.verticalLine} ${styles.vLine3}`} />
                            </AnimatedItem>

                            {/* Cards Grid */}
                            <div className="row" style={{'--bs-gutter-x': '1.5rem', '--bs-gutter-y': '1.5rem'}}>
                                {features.map((feature, index) => (
                                    <div key={feature.id} className="col-lg-6 col-md-6 mb-4">
                                        <AnimatedItem className={'h-100'} type="scaleUp" delay={index * 0.15}>
                                            <div className={styles.featureCard}>
                                                <div className={styles.iconWrapper}>
                                                    <feature.icon />
                                                </div>
                                                <span className={styles.cardNumber}>{feature.number}</span>
                                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                                <p className={styles.cardDescription}>{feature.description}</p>
                                            </div>
                                        </AnimatedItem>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityDesignSection;