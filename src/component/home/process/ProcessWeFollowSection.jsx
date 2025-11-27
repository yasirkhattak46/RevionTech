"use client";
import React from "react";
import {Search, ClipboardPen, Layers, Code, ShieldCheck,Rocket} from "lucide-react"; // Assuming you have lucide-react or use react-icons
import AnimatedItem from "../../wrappers/AnimatedItem";

import "./process.scss";

const steps = [
    {
        id: "01",
        title: "Discovery and Requirements",
        desc: "Project goals, audience, and key features are defined to set a clear direction.",
        icon: <Search size={32}/>
    },
    {
        id: "02",
        title: "Strategy and Planning",
        desc: "A solid roadmap is prepared, outlining structure, timeline, and technology flow.",
        icon: <ClipboardPen size={32}/>
    },
    {
        id: "03",
        title: "Design and Prototyping",
        desc: "User friendly layouts and prototypes are crafted to match brand style and enhance experience.",
        icon: <Layers size={32}/>
    },
    {
        id: "04",
        title: "Development Phase",
        desc: "The approved design is transformed into a fast, secure, and scalable digital product.",
        icon: <Code size={32}/>
    },
    {
        id: "05",
        title: "Testing and Review",
        desc: "Every element is tested for speed, functionality, security, and smooth performance across all devices.",
        icon: <ShieldCheck size={32}/>
    },
    {
        id: "06",
        title: "Launch and Support",
        desc: "The project goes live with full optimization, followed by ongoing improvements and support.",
        icon: <Rocket size={32}/>
    }
];

export default function ProcessWeFollowSection() {
    return (
        <section className="process-section">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8 text-center">
                        <AnimatedItem type="fadeUp">
                            <h2 className="section-title">Process We <span className="highlight">Follow</span></h2>
                            <p className="section-desc">
                                A simple and effective process designed to deliver high quality digital products with clarity, speed, and a seamless experience.
                            </p>
                        </AnimatedItem>
                    </div>
                </div>

                <div className="row g-4">
                    {steps.map((step, index) => (
                        <div className="col-lg-4 col-md-6" key={step.id}>
                            <AnimatedItem type="fadeUp" className="h-100" delay={index * 0.1}>
                                <div className="process-card">
                                    <div className="card-bg-number">{step.id}</div>
                                    <div className="icon-wrapper">
                                        {step.icon}
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                    <div className="card-glow"></div>
                                </div>
                            </AnimatedItem>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}