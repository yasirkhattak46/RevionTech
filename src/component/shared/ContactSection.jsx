"use client";
import React, {useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {MapPin, Phone, Mail, SendHorizontal} from "lucide-react";
import AnimatedItem from "../wrappers/AnimatedItem";


export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "", email: "", subject: "", message: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="contact-section">
        <div className="bg-pattern"></div>
        <div className="glow-bg top-right"></div>
        <div className="glow-bg bottom-left"></div>
        <div className="container position-relative z-2">
            <div className="row justify-content-center mb-5 text-center">
                <div className="col-lg-8">
                    <AnimatedItem type="fadeUp">
                        <h2 className="section-title">
                            Let's Start a <span className="highlight">Conversation</span>
                        </h2>
                        <p className="section-desc">
                            Have an idea? Let's build something amazing together.
                        </p>
                    </AnimatedItem>
                </div>
            </div>

            <div className="row g-0 contact-wrapper">
                <div className="col-lg-6 map-column">
                    <AnimatedItem type="fadeRight">
                        <div className="map-container">
                            <div className="map-image-wrapper">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
                                    alt="World Map"
                                    fill
                                    style={{objectFit: 'contain', opacity: 0.3, filter: 'invert(1)'}}
                                />
                            </div>
                            <motion.div
                                className="location-pin-wrapper"
                                style={{
                                    top: '42%', left: '68%'
                                }} // Approx coordinates for Pakistan on a standard Mercator map
                                whileHover="hover"
                                initial="initial"
                            >
                                {/* Pulse Effect */}
                                <div className="pin-pulse"></div>

                                {/* The Pin Icon */}
                                <div className="pin-point">
                                    <div className="inner-dot"></div>
                                </div>

                                {/* Tooltip Card */}
                                <motion.div
                                    className="map-tooltip"
                                    variants={{
                                        initial: {opacity: 0, y: 10, scale: 0.9, pointerEvents: 'none'},
                                        hover: {opacity: 1, y: -10, scale: 1, pointerEvents: 'auto'}
                                    }}
                                    transition={{duration: 0.2}}
                                >
                                    <div className="info-card">
                                        <h5>RevionTech HQ</h5>
                                        <div className="info-row">
                                            <MapPin size={14} className="icon"/>
                                            <span>Islamabad, Pakistan</span>
                                        </div>
                                        <div className="info-row">
                                            <Phone size={14} className="icon"/>
                                            <span>+92 330 5858969</span>
                                        </div>
                                        <div className="info-row">
                                            <Mail size={14} className="icon"/>
                                            <span>info@reviontech.com</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </AnimatedItem>
                </div>

                <div className="col-lg-6 form-column">
                    <AnimatedItem type="fadeLeft">
                        <div className="form-box">
                            <h3>Send us a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="subject"
                                                className="form-control"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                        <textarea
                            name="message"
                            className="form-control"
                            rows="5"
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="transparent-btn">
                                            <span className="btn-text"><span>Send Message</span></span>
                                            <span className="btn-icon"><SendHorizontal/></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </AnimatedItem>
                </div>
            </div>
        </div>
    </section>
    );
}