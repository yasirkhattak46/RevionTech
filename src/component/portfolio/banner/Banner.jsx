"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Layers, FolderOpen, Image as ImageIcon, Palette, ArrowDown } from 'lucide-react';
import styles from './banner.module.scss';

const PortfolioBanner = () => {
    // Portfolio-related floating shapes
    const portfolioShapes = [
        { Icon: Layers, delay: 0, position: { left: '8%', top: '20%' }, size: 50 },
        { Icon: FolderOpen, delay: 0.5, position: { right: '12%', top: '25%' }, size: 45 },
        { Icon: ImageIcon, delay: 1, position: { left: '12%', bottom: '25%' }, size: 40 },
        { Icon: Palette, delay: 1.5, position: { right: '15%', bottom: '30%' }, size: 55 },
    ];

    return (
        <section className={styles.portfolioBanner}>
            {/* Animated Background Shapes */}
            <div className={styles.bgShapes}>
                {/* Gradient Orbs */}
                <motion.div
                    className={styles.gradientOrb}
                    style={{ left: '10%', top: '15%' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className={styles.gradientOrb}
                    style={{ right: '15%', bottom: '20%' }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Floating Portfolio Icons */}
            {portfolioShapes.map((item, index) => (
                <motion.div
                    key={index}
                    className={styles.floatingIcon}
                    style={item.position}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: [0.15, 0.35, 0.15],
                        scale: [1, 1.15, 1],
                        y: [0, -15, 0]
                    }}
                    transition={{
                        opacity: { duration: 4, repeat: Infinity, delay: item.delay },
                        scale: { duration: 4, repeat: Infinity, delay: item.delay },
                        y: { duration: 5, repeat: Infinity, delay: item.delay }
                    }}
                >
                    <item.Icon size={item.size} />
                </motion.div>
            ))}

            <div className="container">
                <div className="row align-items-center">
                    {/* Left side - Content */}
                    <div className="col-lg-6">
                        <motion.div
                            className={styles.content}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.span 
                                className={styles.sectionTag}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Our Portfolio
                            </motion.span>
                            
                            <motion.h1 
                                className={styles.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Transforming Ideas into <span className={styles.highlight}>Digital Reality</span>
                            </motion.h1>
                            
                            <motion.p 
                                className={styles.subtitle}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Explore our showcase of successful projects across web development, mobile apps, AI solutions, and creative design.
                            </motion.p>
                            
                            <motion.p 
                                className={styles.description}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                Each project represents our commitment to excellence, innovation, and delivering exceptional results that help businesses thrive in the digital landscape.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9 }}
                            >
                                <Link href="#projects" className="primary-btn">
                                    <span className="btn-text"><span>Explore Projects</span></span>
                                    <span className="btn-icon"><ArrowDown size={20} /></span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right side - Feature Image Showcase */}
                    <div className="col-lg-6">
                        <motion.div 
                            className={styles.imageShowcase}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {/* Main Featured Image */}
                            <motion.div
                                className={styles.mainImage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Image
                                    src="/images/projects/featured/Bitloc.ca.png"
                                    alt="Featured project"
                                    fill
                                    className={styles.showcaseImage}
                                />
                                <div className={styles.imageOverlay}>
                                    <span className={styles.projectLabel}>Featured Work</span>
                                </div>
                            </motion.div>

                            {/* Small Floating Cards */}
                            <motion.div
                                className={`${styles.floatingCard} ${styles.card1}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <Image
                                    src="/images/projects/featured/Cable-Internet-Usa.png"
                                    alt="Project thumbnail"
                                    fill
                                    className={styles.cardImage}
                                />
                            </motion.div>

                            <motion.div
                                className={`${styles.floatingCard} ${styles.card2}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                            >
                                <Image
                                    src="/images/projects/featured/Farabius-Music-Academy.png"
                                    alt="Project thumbnail"
                                    fill
                                    className={styles.cardImage}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioBanner;