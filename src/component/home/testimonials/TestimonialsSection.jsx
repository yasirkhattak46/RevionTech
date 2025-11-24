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
        name: "Mitchel",
        role: "Co-Founder, Youk",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
        reviewTitle: "User Review Feedback",
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        name: "David Chen",
        role: "CTO, TechFlow",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
        reviewTitle: "Exceptional Delivery",
        review: "The team at RevionTech went above and beyond our expectations. Their attention to detail in the UI/UX phase really set the foundation for a successful product launch. Highly recommended for complex projects."
    },
    {
        id: 3,
        name: "David Chen",
        role: "CTO, TechFlow",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
        reviewTitle: "Exceptional Delivery",
        review: "The team at RevionTech went above and beyond our expectations. Their attention to detail in the UI/UX phase really set the foundation for a successful product launch. Highly recommended for complex projects."
    },
    {
        id: 4,
        name: "David Chen",
        role: "CTO, TechFlow",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        rating: 5,
        reviewTitle: "Exceptional Delivery",
        review: "The team at RevionTech went above and beyond our expectations. Their attention to detail in the UI/UX phase really set the foundation for a successful product launch. Highly recommended for complex projects."
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