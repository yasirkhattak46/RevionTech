"use client";
import React from "react";
import Image from "next/image";
import AnimatedItem from "../../wrappers/AnimatedItem";
import "./aboutSection.scss"

const images = {
    main: "/images/home/about/About-RevionTech-mission.webp",
    secondary: "/images/home/about/About-RevionTech-vission.webp"
};

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="glow-bg"></div>
            <div className="bg-grid"></div>
            <div className="container position-relative z-1">
                {/* Main Heading */}
                <div className="row justify-content-center mb-3 pb-lg-4">
                    <div className="col-lg-10 text-center">
                        <AnimatedItem type="scaleUp" delay={0.1}>
                            <h2 className="section-title">About <span className="highlight">RevionTech</span></h2>
                        </AnimatedItem>
                        <AnimatedItem type="scaleUp" delay={0.3}>
                            <p className="section-desc">
                                Revion Tech is a digital solutions company dedicated to building modern websites,
                                scalable mobile apps, smart AI tools, and creative design experiences. We combine
                                strategy, innovation, and technology to help businesses grow, improve their digital
                                presence, and achieve long lasting success across every platform.
                            </p>
                        </AnimatedItem>
                    </div>
                </div>

                <div className="row align-items-center gy-5">
                    <div className="col-lg-6">
                        <AnimatedItem type="fadeRight">
                            <div className="about-image-composition">
                                <div className="img-main">
                                    <Image
                                        src={images.main}
                                        alt="Team working at RevionTech"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{objectFit: "cover"}}
                                    />
                                </div>
                                <div className="img-overlay">
                                    <Image
                                        src={images.secondary}
                                        alt="Digital work"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{objectFit: "cover"}}
                                    />
                                </div>
                            </div>
                        </AnimatedItem>
                    </div>

                    {/* Right Column: Content */}
                    <div className="col-lg-6 ps-lg-5">
                        <div className="content-wrapper">

                            {/* Mission Block */}
                            <AnimatedItem type="fadeLeft" delay={0.2}>
                                <div className="text-block mb-5">
                                    <h3>Our <span className="highlight">Mission</span></h3>
                                    <p>
                                        Our mission is to deliver innovative digital solutions that empower businesses
                                        to grow online by providing high quality websites, mobile apps, AI integrations,
                                        creative design, and strategic digital marketing.
                                    </p>
                                    <ul className="feature-list">
                                        <li>Deliver reliable and scalable digital products</li>
                                        <li>Bring creativity and technology together for every project</li>
                                        <li>Help businesses achieve measurable and sustainable digital growth</li>
                                    </ul>
                                </div>
                            </AnimatedItem>

                            {/* Vision Block */}
                            <AnimatedItem type="fadeLeft" delay={0.4}>
                                <div className="text-block">
                                    <h3>Our <span className="highlight">Vision</span></h3>
                                    <p>
                                        Our vision is to become a leading global technology partner known for building
                                        future ready digital solutions that inspire innovation, create impact, and help
                                        brands succeed in a constantly evolving digital world.
                                    </p>
                                    <ul className="feature-list">
                                        <li>Lead with innovation and long term value</li>
                                        <li>Build technology that shapes the future of digital brands</li>
                                        <li>Create meaningful digital experiences for businesses worldwide</li>
                                    </ul>
                                </div>
                            </AnimatedItem>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}