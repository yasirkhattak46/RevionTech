import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, Database, Layers, Smartphone, Globe, Zap } from 'lucide-react';
import styles from './WebDevelopmentBanner.module.scss';

const WebsiteDevelopmentBanner = ({ data }) => {
    // Default data if not provided
    const bannerData = data || {
        title: "Expert Website Development Services",
        subtitle: "Custom, Scalable, and High-Performance Websites for Your Business",
        description: "Transform your digital presence with cutting-edge web solutions.",
        ctaText: "Get Free Consultation",
        ctaLink: "/contact-us"
    };

    // Tech icons for floating animation
    const techIcons = [
        { Icon: Code2, delay: 0, position: { left: '10%', top: '20%' } },
        { Icon: Database, delay: 0.5, position: { right: '15%', top: '25%' } },
        { Icon: Layers, delay: 1, position: { left: '15%', bottom: '25%' } },
        { Icon: Smartphone, delay: 1.5, position: { right: '20%', bottom: '30%' } },
        { Icon: Globe, delay: 2, position: { left: '25%', top: '40%' } },
        { Icon: Zap, delay: 2.5, position: { right: '10%', top: '50%' } },
    ];

    return (
        <section className={styles.heroBanner}>
            {/* Code snippets background */}
            <div className={styles.codeSnippets}>
                <motion.div 
                    className={styles.codeBlock}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className={styles.codeLine}>{'<div className="container">'}</div>
                    <div className={styles.codeLine}>{'  <h1>Hello World</h1>'}</div>
                    <div className={styles.codeLine}>{'</div>'}</div>
                </motion.div>
                <motion.div 
                    className={`${styles.codeBlock} ${styles.codeBlockRight}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <div className={styles.codeLine}>{'const app = () => {'}</div>
                    <div className={styles.codeLine}>{'  return <Component />'}</div>
                    <div className={styles.codeLine}>{'}'}</div>
                </motion.div>
            </div>

            {/* Floating Tech Icons */}
            {techIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className={styles.floatingIcon}
                    style={item.position}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.1, 1],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        opacity: { duration: 3, repeat: Infinity, delay: item.delay },
                        scale: { duration: 3, repeat: Infinity, delay: item.delay },
                        y: { duration: 4, repeat: Infinity, delay: item.delay }
                    }}
                >
                    <item.Icon size={40} />
                </motion.div>
            ))}

            {/* Browser Window Mock */}
            <motion.div 
                className={styles.browserWindow}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 0.15, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className={styles.browserHeader}>
                    <div className={styles.browserDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={styles.browserBody}>
                    <div className={styles.browserLine}></div>
                    <div className={styles.browserLine}></div>
                    <div className={styles.browserLine}></div>
                </div>
            </motion.div>

            <div className={styles.bgElements}>
                {/* Grid Pattern */}
                <div className={styles.gridPattern} />
                
                {/* Animated Brackets */}
                <motion.div
                    className={styles.bracket}
                    style={{ left: '8%', top: '30%' }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {'{ }'}
                </motion.div>
                <motion.div
                    className={styles.bracket}
                    style={{ right: '12%', bottom: '35%' }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, -5, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {'[ ]'}
                </motion.div>
                <motion.div
                    className={styles.bracket}
                    style={{ left: '15%', bottom: '20%' }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {'< >'}
                </motion.div>
            </div>

            {/* Content */}
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Tech Badge */}
                    <motion.div
                        className={styles.techBadge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Code2 size={20} />
                        <span>Professional Web Development</span>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {bannerData.title}
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {bannerData.subtitle}
                    </motion.p>

                    {/* Tech Stack Pills */}
                    <motion.div
                        className={styles.techStack}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <span className={styles.techPill}>React</span>
                        <span className={styles.techPill}>Next.js</span>
                        <span className={styles.techPill}>Node.js</span>
                        <span className={styles.techPill}>TypeScript</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link href={bannerData.ctaLink || '/contact-us'} className="transparent-btn">
                            <span className="btn-text"><span>{bannerData.ctaText}</span></span>
                            <span className="btn-icon"><Zap size={20} /></span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WebsiteDevelopmentBanner;