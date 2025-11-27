import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Smartphone, Tablet, Monitor, Download, Zap, AppWindow } from 'lucide-react';
import styles from './AppDevelopmentBanner.module.scss';

const AppDevelopmentBanner = ({ data }) => {
    // Default data if not provided
    const bannerData = data || {
        title: "Custom Mobile App Development",
        subtitle: "Native & Cross-Platform Apps for iOS & Android",
        description: "Transform your business ideas into powerful mobile applications.",
        ctaText: "Start Your Project",
        ctaLink: "/contact-us"
    };

    // App Development icons for floating animation
    const appIcons = [
        { Icon: Smartphone, delay: 0, position: { left: '10%', top: '20%' } },
        { Icon: Tablet, delay: 0.5, position: { right: '15%', top: '25%' } },
        { Icon: Monitor, delay: 1, position: { left: '15%', bottom: '25%' } },
        { Icon: Download, delay: 1.5, position: { right: '20%', bottom: '30%' } },
        { Icon: AppWindow, delay: 2, position: { left: '25%', top: '40%' } },
        { Icon: Zap, delay: 2.5, position: { right: '10%', top: '50%' } },
    ];

    return (
        <section className={styles.heroBanner}>
            {/* App UI Elements */}
            <div className={styles.appElements}>
                {/* Mobile Screens */}
                <motion.div 
                    className={`${styles.appScreen} ${styles.screen1}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className={styles.appHeader}>
                        <div className={styles.statusBar}>
                            <span>9:41</span>
                            <span>📶 🔋</span>
                        </div>
                    </div>
                    <div className={styles.appContent}>
                        <div className={styles.contentBlock}></div>
                        <div className={styles.contentBlock}></div>
                        <div className={styles.contentBlock}></div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className={`${styles.appScreen} ${styles.screen2}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <div className={styles.appHeader}>
                        <div className={styles.statusBar}>
                            <span>9:41</span>
                            <span>📶 🔋</span>
                        </div>
                    </div>
                    <div className={styles.appContent}>
                        <div className={styles.contentBlock}></div>
                        <div className={styles.contentBlock}></div>
                        <div className={styles.contentBlock}></div>
                    </div>
                </motion.div>
            </div>

            {/* Floating App Development Icons */}
            {appIcons.map((item, index) => (
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

            {/* App Development Framework */}
            <motion.div 
                className={styles.appFramework}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 0.2, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className={styles.frameworkHeader}>
                    App Architecture
                </div>
                <div className={styles.frameworkLayers}>
                    <div className={styles.layer}>UI/UX Layer</div>
                    <div className={styles.layer}>Business Logic</div>
                    <div className={styles.layer}>Data Layer</div>
                </div>
            </motion.div>

            <div className={styles.bgElements}>
                {/* Grid Pattern */}
                <div className={styles.gridPattern} />
                
                {/* App Icons */}
                <div className={styles.appIcons}>
                    <motion.div
                        className={`${styles.appIcon} ${styles.icon1}`}
                        animate={{
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Smartphone size={24} />
                    </motion.div>
                    <motion.div
                        className={`${styles.appIcon} ${styles.icon2}`}
                        animate={{
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        <Tablet size={24} />
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* App Development Badge */}
                    <motion.div
                        className={styles.techBadge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Smartphone size={20} />
                        <span>Mobile App Development</span>
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

                    {/* App Development Tech Stack Pills */}
                    <motion.div
                        className={styles.techStack}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <span className={styles.techPill}>React Native</span>
                        <span className={styles.techPill}>Flutter</span>
                        <span className={styles.techPill}>Swift</span>
                        <span className={styles.techPill}>Kotlin</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link href={bannerData.ctaLink || '/contact-us'} className="transparent-btn">
                            <span className="btn-text"><span>{bannerData.ctaText}</span></span>
                            <span className="btn-icon"><Download size={20} /></span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AppDevelopmentBanner;