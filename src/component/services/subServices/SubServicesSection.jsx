"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedItem from '../../wrappers/AnimatedItem';
import './SubServicesSection.scss';

const SubServicesSection = ({ subServices}) => {

    return (
        <section className="sub-services-section">
            <div className="container">
                <div className="row text-center section-header">
                    <div className="col-12">
                        <AnimatedItem type="fadeUp" delay={0.2}>
                            <h2>{subServices?.title}<span> Services</span> </h2>
                        </AnimatedItem>
                        <AnimatedItem type="fadeUp" delay={0.5}>
                            <p>
                                Comprehensive solutions tailored to meet your specific business needs and drive measurable results.
                            </p>
                        </AnimatedItem>
                    </div>
                </div>

                <div className="services-grid">
                    {subServices?.services.map((service, index) => (
                        <AnimatedItem key={service.id} type="fadeUp" delay={index * 0.1}>
                            <motion.div
                                className={`service-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Image Section */}
                                <div className="service-image-wrapper">
                                    <div className="image-container">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="service-image"
                                        />
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="service-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>

                                    {service.features && service.features.length > 0 && (
                                        <div className="features-list">
                                            {service.features.map((feature, idx) => (
                                                <span key={idx} className="feature-badge">
                                                    ✓ {feature}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SubServicesSection;
