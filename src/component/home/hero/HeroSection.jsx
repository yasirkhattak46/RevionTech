"use client";

import Image from "next/image";
import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi";
import {PiContactlessPayment} from "react-icons/pi";
import Link from "next/link";
import "./hero.scss";
import AnimatedItem from "../../wrappers/AnimatedItem";

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 ">
                        <AnimatedItem type="fadeLeft">
                            <h1 className="hero-title">
                                Grow your digital business with Widgets
                            </h1>
                        </AnimatedItem>
                        <AnimatedItem type="fadeUp" delay={0.01}>
                            <div
                                className="hero-buttons mt-4 d-flex gap-3 justify-content-center justify-content-md-start">
                                <Link href={'#'} className="transparent-btn">
                                    <span className="btn-text"><span>Get Insights</span></span>
                                    <span className="btn-icon"><HiArrowNarrowRight/></span>
                                </Link>
                                <Link href={'#'} className="transparent-btn">
                                    <span className="btn-text"><span>Contact Now</span></span>
                                    <span className="btn-icon"><PiContactlessPayment/></span>
                                </Link>
                            </div>
                        </AnimatedItem>
                        <hr className="hero-divider"/>
                    </div>
                    <div className="col-md-6 text-center">
                        <AnimatedItem type="fadeRight">
                        <Image
                            src="/images/home/banner.webp"
                            alt="RevionTech Hero"
                            height={800}
                            width={800}
                            className="hero-image img-fluid object-fit-contain"
                            priority
                        />
                        </AnimatedItem>
                    </div>

                </div>
            </div>
        </section>
    );
}
