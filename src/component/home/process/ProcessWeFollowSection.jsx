"use client";
import React from "react";
import { FileSearch, PenTool, Code, ShieldCheck, Rocket, Activity } from "lucide-react"; // Assuming you have lucide-react or use react-icons
import AnimatedItem from "../../wrappers/AnimatedItem";
import "./process.scss";
const steps = [
    {
        id: "01",
        title: "Requirement Gathering",
        desc: "We analyze your goals, target audience, and business needs to create a solid roadmap.",
        icon: <FileSearch size={32} />
    },
    {
        id: "02",
        title: "UI/UX Design",
        desc: "Creating intuitive, user-centric designs that align with your brand identity.",
        icon: <PenTool size={32} />
    },
    {
        id: "03",
        title: "Development",
        desc: "Coding robust, scalable solutions using the latest tech stack (Next.js, Node, etc).",
        icon: <Code size={32} />
    },
    {
        id: "04",
        title: "Testing & Q/A",
        desc: "Rigorous testing across devices to ensure a bug-free and smooth experience.",
        icon: <ShieldCheck size={32} />
    },
    {
        id: "05",
        title: "Deployment",
        desc: "Seamless launch of your product to the live server with optimized performance.",
        icon: <Rocket size={32} />
    },
    {
        id: "06",
        title: "Monitoring & Support",
        desc: "Continuous tracking of performance and user behavior to ensure long-term success.",
        icon: <Activity size={32} />
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
                                A streamlined workflow designed to deliver excellence from concept to launch.
                            </p>
                        </AnimatedItem>
                    </div>
                </div>

                <div className="row g-4">
                    {steps.map((step, index) => (
                        <div className="col-lg-4 col-md-6" key={step.id}>
                            <AnimatedItem type="fadeUp" delay={index * 0.1}>
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