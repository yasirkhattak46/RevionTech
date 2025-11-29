'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedItem from '../../wrappers/AnimatedItem';
import styles from './FounderSection.module.scss';


const FounderSection = () => {
    return (
        <section className={styles.founderSection}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    {/* Section Heading */}
                    <AnimatedItem type="fadeUp" delay={0}>
                        <div className={styles.sectionHeading}>
                            <h2>
                                The Mind Behind <span className={styles.highlight}>RevionTech</span>
                            </h2>
                        </div>
                    </AnimatedItem>

                    {/* Founder Content */}
                    <div className="row g-4 align-items-start">
                        {/* Left Column - Image & Basic Info */}
                        <div className="col-lg-4 col-md-5">
                            <AnimatedItem type="fadeRight" delay={0.2}>
                                <div className={styles.leftColumn}>
                                    {/* Founder Image */}
                                    <div className={styles.imageWrapper}>
                                        <div className={styles.imageFrame}>
                                            <Image
                                                src="/images/about/Yasir-Khattak.png"
                                                alt="Yasir Khattak - Founder"
                                                width={350}
                                                height={420}
                                                className={styles.founderImage}
                                            />
                                            <div className={styles.imageOverlay}></div>
                                        </div>
                                    </div>

                                    {/* Name Card */}
                                    <div className={styles.nameCard}>
                                        <h2 className={styles.founderName}>Yasir Khattak</h2>
                                        <p className={styles.founderRole}>Founder & CEO</p>
                                        <div className={styles.divider}></div>
                                        <p className={styles.founderTagline}>
                                            Leadership with vision, experience, and integrity.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedItem>
                        </div>

                        {/* Right Column - Content */}
                        <div className="col-lg-8 col-md-7">
                            <div className={styles.rightColumn}>
                                {/* Bio Section */}
                                <AnimatedItem type="fadeLeft" delay={0.3}>
                                    <div className={styles.bioSection}>
                                        <p className={styles.bioText}>
                                            Yasir Khattak is the driving force behind RevionTech — a full-stack
                                            developer and digital strategist with over 10+ years of hands-on experience
                                            in
                                            modern web development, UI/UX, and digital growth solutions. His passion for
                                            building meaningful products and solving real business problems has shaped
                                            RevionTech into a reliable, quality-focused tech studio. </p>
                                        <p className={styles.bioText}>
                                            From crafting pixel-perfect websites to leading high-impact development
                                            teams, Yasir believes in one clear principle: <b>every project deserves
                                            honesty, quality, and innovation.</b> His blend of technical expertise and
                                            business understanding helps clients turn ideas into powerful digital
                                            results.
                                        </p>
                                    </div>
                                </AnimatedItem>

                                {/* Philosophy Section */}
                                <AnimatedItem type="fadeLeft" delay={0.4}>
                                    <div className={styles.philosophySection}>
                                        <h4 className={styles.sectionTitle}>Philosophy:</h4>
                                        <p className={styles.philosophyText}>
                                            At RevionTech, our philosophy is simple: quality over quantity, purpose over
                                            trend.
                                        </p>
                                        <p className={styles.philosophyText}>
                                            We believe every project deserves attention, creativity, and deep
                                            understanding.
                                        </p>
                                        <p className={styles.philosophyText}>
                                            By combining technical expertise with real-world thinking, we create
                                            solutions that feel intuitive, perform beautifully, and help businesses move
                                            forward with confidence.
                                        </p>
                                    </div>
                                </AnimatedItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;