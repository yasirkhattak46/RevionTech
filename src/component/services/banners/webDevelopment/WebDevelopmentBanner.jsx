import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {Code2, Database, Layers, Smartphone, Globe, Zap, MoveRight} from 'lucide-react';
import styles from './WebDevelopmentBanner.module.scss';

const WebsiteDevelopmentBanner = () => {
    // Tech icons for floating animation
    const techIcons = [
        {Icon: Code2, delay: 0, position: {left: '10%', top: '20%'}},
        {Icon: Database, delay: 0.5, position: {right: '15%', top: '25%'}},
        {Icon: Layers, delay: 1, position: {left: '15%', bottom: '25%'}},
        {Icon: Smartphone, delay: 1.5, position: {right: '20%', bottom: '30%'}},
        {Icon: Globe, delay: 2, position: {left: '25%', top: '40%'}},
        {Icon: Zap, delay: 2.5, position: {right: '10%', top: '50%'}},
    ];

    return (
        <section className={styles.heroBanner}>
            {/* Background Elements */}
            <div className={styles.bgElements}>
                <div className={styles.gridPattern}/>
            </div>

            {/* Floating Tech Icons */}
            {techIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className={styles.floatingIcon}
                    style={item.position}
                    initial={{opacity: 0, scale: 0}}
                    animate={{
                        opacity: [0.15, 0.3, 0.15],
                        scale: [1, 1.1, 1],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        opacity: {duration: 3, repeat: Infinity, delay: item.delay},
                        scale: {duration: 3, repeat: Infinity, delay: item.delay},
                        y: {duration: 4, repeat: Infinity, delay: item.delay}
                    }}
                >
                    <item.Icon size={35}/>
                </motion.div>
            ))}

            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left Content */}
                    <motion.div
                        className={styles.content}
                        initial={{opacity: 0, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
                        {/* Tech Badge */}
                        <motion.div
                            className={styles.techBadge}
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6, delay: 0.1}}
                        >
                            <Code2 size={20}/>
                            <span>Professional Web Development</span>
                        </motion.div>

                        <motion.h1
                            className={styles.title}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            Professional <span>Website Development</span> Services
                        </motion.h1>

                        <motion.p
                            className={styles.subtitle}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                        >
                            Boost your online presence with our professional website development services designed for
                            performance, security, and scalability. We build custom websites, business sites, portfolio
                            sites, and conversion-focused landing pages using modern technologies.
                        </motion.p>

                        {/* Tech Stack Pills */}
                        <motion.div
                            className={styles.techStack}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.5}}
                        >
                            <span className={styles.techPill}>React.js</span>
                            <span className={styles.techPill}>Next.js</span>
                            <span className={styles.techPill}>Node.js</span>
                            <span className={styles.techPill}>PHP Laravel</span>
                            <span className={styles.techPill}>TypeScript</span>
                            <span className={styles.techPill}>MongoDB</span>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.6}}
                        >
                            <Link href={'/contact-us'} className="transparent-btn">
                                <span className="btn-text"><span>Start Your Project Today</span></span>
                                <span className="btn-icon"><MoveRight size={20}/></span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className={styles.imageSection}
                        initial={{opacity: 0, x: 30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.3, ease: "easeOut"}}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                                alt="Web Development"
                                fill
                                className={styles.bannerImage}
                                priority
                            />
                            <div className={styles.imageOverlay}></div>
                            
                            {/* Floating Stats/Cards on Image */}
                            <motion.div
                                className={styles.floatingCard}
                                style={{top: '15%', left: '10%'}}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.8}}
                            >
                                <div className={styles.cardIcon}>
                                    <Globe size={24}/>
                                </div>
                                <div className={styles.cardContent}>
                                    <h4>100+</h4>
                                    <p>Projects Delivered</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className={styles.floatingCard}
                                style={{bottom: '20%', right: '10%'}}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 1}}
                            >
                                <div className={styles.cardIcon}>
                                    <Zap size={24}/>
                                </div>
                                <div className={styles.cardContent}>
                                    <h4>Fast</h4>
                                    <p>Performance</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteDevelopmentBanner;