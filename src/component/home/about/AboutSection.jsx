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
                <div className="row justify-content-center mb-5 pb-lg-4">
                    <div className="col-lg-10 text-center">
                        <AnimatedItem type="scaleUp" delay={0.1}>
                            <h2 className="section-title">About <span className="highlight">RevionTech</span></h2>
                        </AnimatedItem>
                        <AnimatedItem type="scaleUp" delay={0.3}>
                            <p className="section-desc">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen
                                book.
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
                                        To empower brands with next-gen digital solutions combining innovation,
                                        design, and strategy to help them grow faster and stand out globally.
                                    </p>
                                    <ul className="feature-list">
                                        <li>Innovative Design</li>
                                        <li>Strategic Marketing</li>
                                        <li>Smart Technology</li>
                                    </ul>
                                </div>
                            </AnimatedItem>

                            {/* Vision Block */}
                            <AnimatedItem type="fadeLeft" delay={0.4}>
                                <div className="text-block">
                                    <h3>Our <span className="highlight">Vision</span></h3>
                                    <p>
                                        To be a global creative tech agency that redefines how brands engage,
                                        communicate, and scale through innovation and digital transformation.
                                    </p>
                                    <ul className="feature-list">
                                        <li>Innovative Experiences</li>
                                        <li>Future-Ready Solutions</li>
                                        <li>Growth with Responsibility</li>
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