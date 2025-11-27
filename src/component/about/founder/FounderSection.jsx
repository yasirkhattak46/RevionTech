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
                                Meet <span className={styles.highlight}>Our Founder</span>
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
                                        <h3 className={styles.founderName}>Yasir Khattak</h3>
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
                                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                        <p className={styles.bioText}>
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>
                                </AnimatedItem>

                                {/* Philosophy Section */}
                                <AnimatedItem type="fadeLeft" delay={0.4}>
                                    <div className={styles.philosophySection}>
                                        <h4 className={styles.sectionTitle}>Philosophy:</h4>
                                        <p className={styles.philosophyText}>
                                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem passages.
                                        </p>
                                        <p className={styles.philosophyText}>
                                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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