"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import AnimatedItem from "../../wrappers/AnimatedItem";
import { FaEye } from "react-icons/fa";

import "./featuredProject.scss";

// Updated project data with featured flag
const allProjects = [
    {
        id: 3,
        img: "/images/projects/featured/Bitloc.ca.png",
        title: "Bitloc io",
        category: "Web Development",
        description: "Modern web application with real-time data processing",
        tech: ["React.js", "Node.js"],
        link: "https://bitloc.ca",
        featured: true
    },
    {
        id: 4,
        img: "/images/projects/featured/Cable-Internet-Usa.png",
        title: "Cable internet USA",
        category: "API Integration",
        description: "Service comparison platform with automated data sync",
        tech: ["PHP Laravel", "Api Integrations"],
        link: "https://cableinternetusa.com",
        featured: true
    },
    {
        id: 6,
        img: "/images/projects/featured/Farabius-Music-Academy.png",
        title: "Farabius Music Academy",
        category: "Web Development",
        description: "Interactive music education platform with video streaming",
        tech: ["PHP Laravel", "Api Integrations"],
        link: "https://farabius.com",
        featured: true
    },
    {
        id: 7,
        img: "/images/projects/featured/M&S-Lab.png",
        title: "M&S Lab",
        category: "UI/UX Design",
        description: "Modern laboratory website with booking system",
        tech: ["Wordpress", "Elementor"],
        link: "https://mslab.com",
        featured: false
    },
    {
        id: 8,
        img: "/images/projects/featured/Reme-Health-Care.png",
        title: "Reme Health Care",
        category: "Web Development",
        description: "Healthcare platform with patient management system",
        tech: ["Wordpress", "Elementor"],
        link: "https://remehealthcare.com",
        featured: true
    },
    {
        id: 9,
        img: "/images/projects/featured/Wyndham-Wealth.png",
        title: "Wyndham Wealth",
        category: "Digital Marketing",
        description: "Financial consulting website with lead generation",
        tech: ["Wordpress", "Elementor"],
        link: "https://wyndhamwealth.com",
        featured: false
    },
    {
        id: 1,
        img: "/images/projects/featured/AAT.png",
        title: "Angle Academy Uk",
        category: "Web Development",
        description: "Educational platform with course management system",
        tech: ["Wordpress", "Custom Plugin"],
        link: "https://angleacademy.uk",
        featured: true
    },
    {
        id: 2,
        img: "/images/projects/featured/Addapad.png",
        title: "Add A Pad",
        category: "Web Development",
        description: "Property listing platform with advanced search",
        tech: ["Wordpress", "Elementor"],
        link: "https://addapad.com",
        featured: false
    },
    {
        id: 5,
        img: "/images/projects/featured/DD-Pool-Trading.png",
        title: "DD-Pool Trading",
        category: "E-Commerce",
        description: "Online trading platform with payment integration",
        tech: ["WordPress", "Elementor"],
        link: "https://ddpooltrading.com",
        featured: true
    },
];

const ITEMS_PER_PAGE = 6;

const CardItem = ({ project }) => {
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
                
                {/* Category badge */}
                <div className="category-badge">
                    {project.category}
                </div>

                {/* Gradient Overlay */}
                <motion.div
                    className="overlay-gradient"
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Content appearing on hover */}
                <div className="card-content">
                    <div className="title-container">

                        <motion.h3
                            variants={{
                                rest: { y: 20, opacity: 0 },
                                hover: { y: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                        >
                            {project.title}
                        </motion.h3>
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-link-small"
                            variants={{
                                rest: { y: 20, opacity: 0 },
                                hover: { y: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 100, delay: 0.15 }}
                        >
                            <FaEye />
                        </motion.a>
                    </div>
                    
                    <motion.p
                        className="project-description"
                        variants={{
                            rest: { y: 20, opacity: 0 },
                            hover: { y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.4, delay: 0.05, type: "spring", stiffness: 100 }}
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        className="tech-stack"
                        variants={{
                            rest: { y: 20, opacity: 0 },
                            hover: { y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 100 }}
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

export default function FeaturedProjectsSection({ isPortfolioPage = false }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsToShow, setProjectsToShow] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    // Filter projects based on context
    const filteredProjects = isPortfolioPage 
        ? allProjects 
        : allProjects.filter(project => project.featured).slice(0, 6); // Only 6 featured for homepage
    
    // Calculate pagination
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    
    // Update projects to show when page changes
    useEffect(() => {
        const startIndex = 0;
        const endIndex = currentPage * ITEMS_PER_PAGE;
        setProjectsToShow(filteredProjects.slice(startIndex, endIndex));
        setIsLoading(false);
    }, [currentPage, isPortfolioPage]);
    
    // Reset to first page when switching contexts
    useEffect(() => {
        setCurrentPage(1);
    }, [isPortfolioPage]);
    
    const handleLoadMore = () => {
        if (currentPage < totalPages) {
            setIsLoading(true);
            // Smooth scroll to new content position after a brief delay
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                // Scroll smoothly to the first new item after state updates
                setTimeout(() => {
                    const currentItems = currentPage * ITEMS_PER_PAGE;
                    const newItemElements = document.querySelectorAll('.project-card');
                    if (newItemElements[currentItems]) {
                        newItemElements[currentItems].scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                    }
                }, 150);
            }, 100);
        }
    };
    
    // For homepage, show only 6 featured projects in a simple grid
    if (!isPortfolioPage) {
        const featuredProjects = allProjects.filter(project => project.featured).slice(0, 6);
        
        return (
            <section className="featured-projects-section">
                <div className="bg-pattern"></div>

                <div className="container position-relative z-2">
                    <div className="row justify-content-center mb-5 text-center">
                        <div className="col-lg-10">
                            <AnimatedItem type="fadeUp">
                                <h2 className="section-title">
                                    Recent Projects and <span className="highlight">Achievements</span>
                                </h2>
                                <p className="section-desc">
                                    Explore a collection of our completed projects showcasing creativity, clean design, strong development, and real results for brands worldwide.
                                </p>
                            </AnimatedItem>
                        </div>
                    </div>

                    <div className="row g-4">
                        {featuredProjects.map((project, index) => (
                            <div className="col-lg-4 col-md-6" key={project.id}>
                                <AnimatedItem type="fadeUp" delay={index * 0.1}>
                                    <CardItem project={project} />
                                </AnimatedItem>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <AnimatedItem type="fadeUp" delay={0.2}>
                                <Link href="/portfolio" className="primary-btn">
                                    <span className="btn-text"><span>View All Projects</span></span>
                                    <span className="btn-icon"><HiArrowNarrowRight /></span>
                                </Link>
                            </AnimatedItem>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    
    // For portfolio page, show paginated grid with load more button
    return (
        <section className="featured-projects-section">
            <div className="bg-pattern"></div>

            <div className="container position-relative z-2">
                <div className="row justify-content-center mb-5 text-center">
                    <div className="col-lg-8">
                        <AnimatedItem type="fadeUp">
                            <h2 className="section-title">
                                Our <span className="highlight">Projects</span>
                            </h2>
                            <p className="section-desc">
                                Explore our diverse portfolio of successful projects.
                            </p>
                        </AnimatedItem>
                    </div>
                </div>

                <div className="row g-4">
                    {projectsToShow.map((project, index) => {
                        // Check if this is a newly loaded item
                        const previousPageItems = (currentPage - 1) * ITEMS_PER_PAGE;
                        const isNewItem = index >= previousPageItems;
                        const animationDelay = isNewItem ? (index - previousPageItems) * 0.1 : 0;
                        
                        return (
                            <div className="col-lg-4 col-md-6" key={project.id}>
                                <AnimatedItem type="fadeUp" delay={animationDelay}>
                                    <CardItem project={project} />
                                </AnimatedItem>
                            </div>
                        );
                    })}
                </div>

                {/* Load More Button */}
                {currentPage < totalPages && (
                    <div className="load-more-container mt-5 d-flex justify-content-center">
                        <button 
                            className="primary-btn"
                            onClick={handleLoadMore}
                            disabled={isLoading}
                        >
                            <span className="btn-text">
                                <span>{isLoading ? 'Loading...' : 'Load More'}</span>
                            </span>
                            <span className="btn-icon"><HiArrowNarrowDown /></span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}