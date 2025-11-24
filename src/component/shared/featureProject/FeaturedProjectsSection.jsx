"use client";
import React from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, EffectFade, Autoplay} from "swiper/modules";
import {motion} from "framer-motion";
import AnimatedItem from "../../wrappers/AnimatedItem";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./featuredProject.scss"

const projectGroups = [
    {
        id: "group1",
        projects: [
            {
                id: 3,
                img: "/images/projects/featured/Bitloc.ca.png",
                title: "Bitloc io",
                tech: ["React.js", "Node.js"]
            },
            {
                id: 4,
                img: "/images/projects/featured/Cable-Internet-Usa.png",
                title: "Cable internet USA",
                tech: ["PHP Laravel", "Api Integrations"]
            },
            {
                id: 6,
                img: "/images/projects/featured/Farabius-Music-Academy.png",
                title: "Farabius Music Academy",
                tech: ["PHP Laravel", "Api Integrations"]
            },
            {
                id: 7,
                img: "/images/projects/featured/M&S-Lab.png",
                title: "M&S Lab",
                tech: ["Wordpress", "Elementor"]
            },
            {
                id: 8,
                img: "/images/projects/featured/Reme-Health-Care.png",
                title: "Reme Health Care",
                tech: ["Wordpress", "Elementor"]
            },
            {
                id: 9,
                img: "/images/projects/featured/Wyndham-Wealth.png",
                title: "Wyndham Wealth",
                tech: ["Wordpress", "Elementor"]
            },
            {
                id: 1,
                img: "/images/projects/featured/AAT.png",
                title: "Angle Academy Uk",
                tech: ["Wordpress", "Custom Plugin"]
            },
            {
                id: 2,
                img: "/images/projects/featured/Addapad.png",
                title: "Add A Pad",
                tech: ["Wordpress", "Elementor"]
            },


            {
                id: 5,
                img: "/images/projects/featured/DD-Pool-Trading.png",
                title: "DD-Pool Trading",
                tech: ["WordPress", "Elementor"]
            },
        ]
    }
];

const CardItem = ({project}) => {
    return (
        <motion.div
            className="project-card"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <div className="image-wrapper">
                <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="project-img"
                />

                {/* Gradient Overlay */}
                <motion.div
                    className="overlay-gradient"
                    variants={{
                        rest: {opacity: 0},
                        hover: {opacity: 1}
                    }}
                    transition={{duration: 0.3}}
                />

                {/* Content appearing on hover */}
                <div className="card-content">
                    <motion.h3
                        variants={{
                            rest: {y: 20, opacity: 0},
                            hover: {y: 0, opacity: 1}
                        }}
                        transition={{duration: 0.4, type: "spring", stiffness: 100}}
                    >
                        {project.title}
                    </motion.h3>

                    <motion.div
                        className="tech-stack"
                        variants={{
                            rest: {y: 20, opacity: 0},
                            hover: {y: 0, opacity: 1}
                        }}
                        transition={{duration: 0.4, delay: 0.1, type: "spring", stiffness: 100}}
                    >
                        {project.tech.map((t, i) => (
                            <span key={i} className="tech-badge">{t}</span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default function FeaturedProjectsSection() {
    return (
        <section className="featured-projects-section">
            <div className="bg-pattern"></div>

            <div className="container position-relative z-2">
                <div className="row justify-content-center mb-5 text-center">
                    <div className="col-lg-8">
                        <AnimatedItem type="fadeUp">
                            <h2 className="section-title">
                                Our Featured <span className="highlight">Projects</span>
                            </h2>
                            <p className="section-desc">
                                Explore our latest work and see how we help brands grow.
                            </p>
                        </AnimatedItem>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Swiper
                            modules={[Pagination, EffectFade, Autoplay]}
                            pagination={{clickable: true}}
                            effect="fade"
                            fadeEffect={{crossFade: true}}
                            speed={800} // Slower speed for smoother fade
                            loop={true}
                            className="projects-swiper"
                        >
                            {projectGroups.map((group) => (
                                <SwiperSlide key={group.id}>
                                    <div className="row g-4 justify-content-center">
                                        {group.projects.map((project) => (
                                            <div className="col-lg-4 col-md-6" key={project.id}>
                                                <AnimatedItem type="fadeUp" delay={project.id * 0.1}>
                                                    <CardItem project={project}/>
                                                </AnimatedItem>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}