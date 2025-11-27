'use client';

import React from 'react';
import { FaClock, FaLayerGroup, FaGem, FaDollarSign, FaBolt, FaMicrochip } from 'react-icons/fa';
import AnimatedItem from './../../wrappers/AnimatedItem'; // Adjust path as needed
import styles from './QualityDesign.module.scss';

const QualityDesignSection = () => {
    const features = [
        {
            id: 1,
            number: '#1',
            title: 'Years Of Experience',
            description: 'Reviontech has certified its position as a leading digital branding agency with more than decades of years of extensive experience. Reviontech professionals speak of knowledge, proficiency and expertise in the tasks. ',
            icon: FaClock
        },
        {
            id: 2,
            number: '#2',
            title: 'Full-Service Studio',
            description: 'The highly skilled Reviontech where you can get the best and all in works. We providing you all kind of service ranging from our digital needs to anything and everything as applied to your business schemes.',
            icon: FaLayerGroup
        },
        {
            id: 3,
            number: '#3',
            title: 'Quality Work',
            description: 'Quality work is our signature at Reviontech. We focus on exceeding our customer\'s expectations in every project we undertake. A team of well experienced and passionate, highly focus and quality work remains in every task.',
            icon: FaGem
        },
        {
            id: 4,
            number: '#4',
            title: 'Affordability',
            description: 'We cost of quality digital services at Reviontech shouldn\'t break the bank. That is why we continue to provide affordable digital services without compromising on quality.',
            icon: FaDollarSign
        },
        {
            id: 5,
            number: '#5',
            title: 'Quick Turnaround Time',
            description: 'Reviontech professionals are experienced enough process speedily solutions in the range of various services. Engaging these processes that have been developed thoroughly ensures speedy delivery regardless of the project.',
            icon: FaBolt
        },
        {
            id: 6,
            number: '#6',
            title: 'Latest Technology',
            description: 'With Reviontech professional services, explore the reach of the latest technology. We use of the cutting edge of innovation, constantly incorporating state-of-the-art technologies to our service provision to ensure superior solutions on the market.',
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
                                Digitally Focused <span className={styles.highlight}>Quality Design</span> Services
                            </h2>
                            <p className={styles.subtitle}>
                                Reviontech is Committed To Creating A Digital Presence That Has A Lasting Impact. We Strive To Ensure That Your Brand Resonates Strongly Across All Online Platforms.
                            </p>
                            <p className={styles.description}>
                                Here At Reviontech, We Can Make Your Brand Stand Out On Any And All Digital Platforms.
                            </p>
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
                                                <span className={styles.cardNumber}>{feature.number} {feature.title}</span>
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