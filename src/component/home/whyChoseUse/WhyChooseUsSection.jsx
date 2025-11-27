"use client";
import React from "react";
import Image from "next/image";
import {AiOutlineTeam} from "react-icons/ai";
import {MdOutlineDisplaySettings} from "react-icons/md";
import {BiSupport} from "react-icons/bi";
import AnimatedItem from "../../wrappers/AnimatedItem";
import "./whyChoseUs.scss";
import StatsSection from "../../shared/statsSection/Stats";

const features = [
    {
        title: "Dedicated Team",
        desc: "Our team of experts is committed to delivering excellence in every project we undertake.",
        icon: <AiOutlineTeam size={25}/>
    },
    {
        title: "Agile Methodology",
        desc: "We use agile practices to ensure flexibility, speed, and high-quality delivery.",
        icon: <MdOutlineDisplaySettings size={25}/>
    },
    {
        title: "24/7 Support",
        desc: "We are always here to help you with any issues or questions you may have.",
        icon: <BiSupport size={25}/>

    }
];
export default function WhyChooseUsSection() {
    return (
        <section className="why-choose-us-section">
            <div className="container">
                <div className="row align-items-center pb-5">

                    {/* Left Column: Image */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <AnimatedItem type="fadeRight">
                            <div className="image-wrapper">
                                <div className="image-container">
                                    <Image
                                        src="/images/home/why-chose-us.webp"
                                        alt="Why Choose RevionTech"
                                        fill
                                        style={{objectFit: "cover"}}
                                        className="main-img"
                                    />
                                </div>
                                <div className="deco-shape shape-1"></div>
                                <div className="deco-shape shape-2"></div>
                            </div>
                        </AnimatedItem>
                    </div>

                    {/* Right Column: Content */}
                    <div className="col-lg-6 ps-lg-5">
                        <AnimatedItem type="fadeLeft">
                            <h2 className="section-title">Why Choose <span className="highlight">Us?</span></h2>
                            <p className="section-desc">
                                We don't just build software; we build relationships and success stories.
                                Here is why leading brands trust us with their digital vision.
                            </p>

                            <div className="features-list">
                                {features.map((item, idx) => (
                                    <div className="feature-item" key={idx}>
                                        <div className="icon-box">
                                            {item.icon}
                                        </div>
                                        <div className="text">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedItem>
                    </div>
                </div>
            </div>
            <StatsSection/>
        </section>
    );
}
