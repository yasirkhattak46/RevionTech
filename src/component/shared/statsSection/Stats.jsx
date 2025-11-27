"use client";
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import AnimatedItem from "../../wrappers/AnimatedItem";
import "./stats.scss";

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

export default function StatsSection() {
    return (<section className="stats-section">
        <div className="container">
            <AnimatedItem type="fadeUp">
                <div className="row g-4 justify-content-center align-items-center">
                    {stats.map((stat, index) => (
                        <CountUpItem stat={stat} index={index} key={stat.id}/>
                    ))}
                </div>
            </AnimatedItem>
        </div>
    </section>)
}

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
