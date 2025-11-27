import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FolderGit2, Eye, Zap } from 'lucide-react';
import styles from './banner.module.scss';

const PortfolioBanner = () => {
    const bannerData = {
        title: "Our Creative Portfolio",
        subtitle: "Showcasing Excellence in Digital Innovation",
        description: "Discover our diverse range of successful projects that demonstrate our expertise and creativity.",
        ctaText: "View All Projects",
        ctaLink: "#projects"
    };

    // Tech icons for floating animation
    const techIcons = [
        { Icon: FolderGit2, delay: 0, position: { left: '10%', top: '20%' } },
        { Icon: Eye, delay: 0.5, position: { right: '15%', top: '25%' } },
        { Icon: Zap, delay: 1, position: { left: '15%', bottom: '25%' } },
        { Icon: FolderGit2, delay: 1.5, position: { right: '20%', bottom: '30%' } },
        { Icon: Eye, delay: 2, position: { left: '25%', top: '40%' } },
        { Icon: Zap, delay: 2.5, position: { right: '10%', top: '50%' } },
    ];

    return (
        <section className={styles.heroBanner}>
            {/* Background Elements */}
            <div className={styles.bgElements}>
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
                        <FolderGit2 size={20} />
                        <span>Showcasing Our Work</span>
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

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link href={bannerData.ctaLink} className="transparent-btn">
                            <span className="btn-text"><span>{bannerData.ctaText}</span></span>
                            <span className="btn-icon"><Zap size={20} /></span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioBanner;