"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import AnimatedItem from "../../wrappers/AnimatedItem";
import FaqSchema from "../FaqSchema";
import "./faqs.scss";

const defaultFaqsData = [
    {
        id: 1,
        question: "What services does RevionTech offer?",
        answer: "RevionTech provides comprehensive digital solutions including professional website development Services, mobile app development, AI & SaaS solutions, graphic design, and digital marketing services. We help businesses build scalable, high-performing digital products tailored to their needs."
    },
    {
        id: 2,
        question: "How long does it take to develop a Professional website?",
        answer: "The timeline varies based on project complexity and requirements. A simple website typically takes 2-4 weeks, while more complex platforms with custom features may take 6-12 weeks. We provide a detailed timeline after understanding your specific needs."
    },
    {
        id: 3,
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive ongoing support and maintenance packages. This includes regular updates, security patches, performance optimization, bug fixes, and technical support to ensure your digital products run smoothly."
    },
    {
        id: 4,
        question: "What technologies do you specialize in?",
        answer: "We work with modern technologies including React, Next.js, Node.js, Python, PHP, and various frameworks for mobile app development. Our team stays updated with the latest tech trends to deliver cutting-edge solutions."
    },
    {
        id: 5,
        question: "Can you help with digital marketing and SEO?",
        answer: "Absolutely! Our digital marketing services include SEO optimization, content marketing, social media management, and paid advertising campaigns. We create comprehensive strategies to increase your online visibility and drive results."
    },
    {
        id: 6,
        question: "What is your pricing model?",
        answer: "We offer flexible pricing models based on project scope and requirements. This includes fixed-price projects, hourly rates, and retainer packages. Contact us for a customized quote tailored to your specific needs and budget."
    }
];


export default function FaqsSection({ faqs, title, subtitle }) {
    const faqsData = faqs || defaultFaqsData;
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faqs-section">
            <FaqSchema faqs={faqsData} />
            <div className="container">
                {/* Section Header */}
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <AnimatedItem type="fadeUp">
                            <h2 className="section-title">
                                {title || (
                                    <>
                                        Frequently Asked <br />
                                        <span className="highlight">Questions</span>
                                    </>
                                )}
                            </h2>
                            <p className="section-subtitle">
                                {subtitle || "Find answers to common questions about our services, process, and how we can help your business grow."}
                            </p>
                        </AnimatedItem>
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <AnimatedItem type="fadeUp">
                            <div className="faqs-wrapper">
                                {faqsData.map((faq, index) => (
                                    <div
                                        key={faq.id}
                                        className={`faq-item ${openIndex === index ? "active" : ""}`}
                                    >
                                        <button
                                            className="faq-question"
                                            onClick={() => toggleFaq(index)}
                                            aria-expanded={openIndex === index}
                                        >
                                            <span className="question-text">{faq.question}</span>
                                            <span className="icon-wrapper">
                                                {openIndex === index ? (
                                                    <FiMinus className="icon" />
                                                ) : (
                                                    <FiPlus className="icon" />
                                                )}
                                            </span>
                                        </button>
                                        <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                                            <div className="answer-content">
                                                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedItem>
                    </div>
                </div>
            </div>
        </section>
    );
}
