"use client";
import React from "react";
import Image from "next/image";
import {Cpu, Users, Clock} from "lucide-react"; // Assuming you have lucide-react or use react-icons
import AnimatedItem from "../../wrappers/AnimatedItem";
import "./whyChoseUs.scss";
import StatsSection from "../../shared/statsSection/Stats";

const features = [
    {
        title: "Tailored Digital Strategies",
        desc: "We create unique digital products designed specifically for your goals.",
        icon: <Cpu size={25}/>
    },
    {
        title: "Expert Creative Team",
        desc: "Skilled developers and designers delivering stunning visuals and clean code.",
        icon: <Users size={25}/>
    },
    {
        title: "24/7 Support",
        desc: "We are always here to help you with any issues or questions you may have.",
        icon: <Clock size={25}/>

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
                                Partner with Revion Tech to elevate your brand presence. We blend creative design with
                                advanced AI and development to deliver robust solutions that guarantee faster business
                                growth and efficiency.
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
