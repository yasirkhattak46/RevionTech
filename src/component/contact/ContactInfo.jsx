"use client"

import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Phone, MapPin, Mail, SendHorizontal} from 'lucide-react';
import "./contactInfo.scss";
import AnimatedItem from "../wrappers/AnimatedItem";


const cardVariants = {
    hidden: {opacity: 0, y: 30},
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.4 + (i * 0.15),
            ease: "easeOut"
        }
    })
};


const ContactInfo = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    const contactItems = [
        {
            icon: Phone,
            title: 'CALL',
            info: '+92 330 5858969',
            link: 'tel:+923305858969'
        },
        {
            icon: MapPin,
            title: 'LOCATION',
            info: '54th Street "I" Block F',
            subInfo: 'Islamabad, Pakistan',
            link: '#'
        },
        {
            icon: Mail,
            title: 'EMAIL',
            info: 'info@reviontech.com',
            link: 'mailto:contact@reviontech.com'
        }
    ];

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

                <div className="row g-0 contact-wrapper" ref={ref}>
                    <div className="col-lg-6 map-column">
                        <div className="contact-cards-vertical">
                            {contactItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="mb-4"
                                    custom={index}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={cardVariants}
                                >
                                    <a href={item.link} className="contact-card">
                                        <div className="icon-wrapper">
                                            <item.icon className="contact-icon"/>
                                        </div>
                                        <div className="card-content">
                                            <h3 className="contact-title">{item.title}</h3>
                                            <p className="contact-info">{item.info}</p>
                                            {item.subInfo && <p className="contact-subinfo">{item.subInfo}</p>}
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
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
};

export default ContactInfo;
