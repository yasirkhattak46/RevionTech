"use client";
import React from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";
import {FaStar} from "react-icons/fa";
import AnimatedItem from "../../wrappers/AnimatedItem";
import "./testimonials.scss";
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
    {
        id: 1,
        name: "Ireen Jung",
        role: "Founder, The-Kaddy",
        avatar: "/images/testimonials/ireen.jpg",
        rating: 5,
        reviewTitle: "Outstanding Website Development Partner",
        review: "I’ve been using RevionTech services for almost two years, and I’m very happy with his work. He’s always, friendly, reliable, and consistently delivers excellent results. I highly recommend him to anyone."
    },
    {
        id: 2,
        name: "farabius",
        role: "CEO, Farabius Music Academy",
        avatar: "/images/testimonials/farabius.webp",
        rating: 5,
        reviewTitle: "Reliable, Creative, and Results-Driven Team",
        review: "RevionTech delivered exactly what they promised—and more. Our website is fast, modern, and perfectly aligned with our brand. The team was responsive, transparent, and extremely professional throughout the project. We’ve already seen improved engagement and inquiries after launch. Highly recommended for anyone serious about their online presence."
    },
    {
        id: 3,
        name: "Adam Levit",
        role: "Founder, 53 Design & GC Solar",
        avatar: "/images/testimonials/adam-Levit.webp",
        rating: 5,
        reviewTitle: "Great Experience from Start to Finish",
        review: "he team at RevionTech is highly skilled and easy to work with. They understood our vision and brought it to life with a powerful website that reflects our brand perfectly. We are extremely satisfied with the results and would definitely work with them again."
    },
    {
        id: 4,
        name: "David Chen",
        role: "CTO, TechFlow",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
        reviewTitle: "Perfect Choice for Startups & Businesses",
        review: "As a startup, we needed a tech partner who could guide us—not just build a website. RevionTech did exactly that. They understood our vision, suggested improvements, and delivered a scalable solution that supports our growth. Exceptional service and great value for money."
    }
];

export default function TestimonialsSection() {
    return (
        <section className="testimonials-section">
            {/* Background Pattern */}
            <div className="bg-pattern"></div>

            <div className="container position-relative z-2">
                {/* Section Header */}
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <AnimatedItem type="fadeUp">
                            <h2 className="section-title">
                                Clients Who Believe in <br/>
                                <span className="highlight">RevionTech</span>
                            </h2>
                        </AnimatedItem>
                    </div>
                </div>

                <div className="row align-items-center g-5">
                    {/* Left Side: Swiper Slider Content */}
                    <div className="col-lg-7 order-2 order-lg-1">
                        <AnimatedItem type="fadeRight">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{clickable: true}}
                                autoplay={{delay: 5000, disableOnInteraction: false}}
                                loop={true}
                                spaceBetween={30}
                                className="testimonials-swiper"
                            >
                                {testimonials.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="testimonial-card">
                                            <div className="content-box">
                                                <span className="guest-rating-label">GUEST RATING</span>
                                                <h3 className="review-title">{item.reviewTitle}</h3>

                                                <div className="stars-wrapper">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className={i < item.rating ? "star active" : "star"}
                                                            size={18}
                                                        />
                                                    ))}
                                                </div>

                                                <p className="review-text">{item.review}</p>

                                                <div className="user-profile">
                                                    <div className="avatar-wrapper">
                                                        <Image
                                                            src={item.avatar}
                                                            alt={item.name}
                                                            width={60}
                                                            height={60}
                                                            className="avatar"
                                                        />
                                                    </div>
                                                    <div className="user-info">
                                                        <h5 className="name">{item.name}</h5>
                                                        <p className="role">{item.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </AnimatedItem>
                    </div>

                    {/* Right Side: STATIC Image */}
                    <div className="col-lg-5 order-1 order-lg-2">
                        <AnimatedItem type="fadeLeft">
                            <div className="static-image-wrapper">
                                <Image
                                    src="/images/home/Customer-reviews.webp"
                                    alt="Active Client Project"
                                    fill
                                    className="static-img"
                                />
                            </div>
                        </AnimatedItem>
                    </div>
                </div>
            </div>
        </section>
    );
}