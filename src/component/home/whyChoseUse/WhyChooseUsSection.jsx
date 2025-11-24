"use client";
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {AiOutlineTeam} from "react-icons/ai";
import {MdOutlineDisplaySettings} from "react-icons/md";
import {BiSupport} from "react-icons/bi";
import AnimatedItem from "../../wrappers/AnimatedItem";
import "./whyChoseUs.scss";

// Stats based on your image
const stats = [
    {
        id: 1,
        number: 10,
        suffix: "+",
        label: "Years Of Experience",
        icon: "/images/home/stats/Experince.png"
    },
    {
        id: 2,
        number: 150,
        suffix: "+",
        label: "Projects Completed Successfully",
        icon: "/images/home/stats/Project-Completed.png"
    },
    {
        id: 3,
        number: 100,
        suffix: "+",
        label: "Satisfied Clients Reviews",
        icon: "/images/home/stats/Satified-Clients.png"
    }
];

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

            {/* ============================
                 COUNT-UP STATS SECTION
            ============================ */}
            <section className="stats-section">
                <div className="container">
                    <AnimatedItem type="fadeUp">
                        <div className="row g-4 justify-content-center align-items-center">
                            {stats.map((stat, index) => (
                                <CountUpItem stat={stat} index={index} key={stat.id}/>
                            ))}
                        </div>
                    </AnimatedItem>
                </div>
            </section>
        </section>
    );
}

/* ============================
   INTERNAL CountUp + JSX
============================ */
function CountUpItem({stat, index}) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    const animateCount = (end) => {
        let start = 0;
        const duration = 1500;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                setValue(end);
                clearInterval(counter);
            } else {
                setValue(Math.floor(start));
            }
        }, 16);
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started.current) {
                    started.current = true;
                    animateCount(stat.number);
                }
            },
            {threshold: 0.4}
        );

        if (ref.current) observer.observe(ref.current);
    }, []);
    return (
        <div className="col-lg-4 col-md-6">
            <div className={`stat-item ${index !== stats.length - 1 ? 'with-border' : ''}`}>
                <div className="stat-icon">
                    <Image src={stat.icon} height={60} width={60} alt={stat.label}/>
                </div>

                <div className="stat-content">
                    <h3 className="stat-number" ref={ref}>
                        {value}{stat.suffix}
                    </h3>
                    <p className="stat-label">{stat.label}</p>
                </div>
            </div>
        </div>
    );
}
