import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, Cpu, Network, Zap, Bot, Sparkles } from 'lucide-react';
import styles from './AiSolutionsBanner.module.scss';

const AiSolutionsBanner = ({ data }) => {
    // Default data if not provided
    const bannerData = data || {
        title: "SaaS & AI Solutions for Modern Business",
        subtitle: "Intelligent Software Solutions Powered by AI",
        description: "Harness cutting-edge AI and cloud technologies to transform your business operations.",
        ctaText: "Explore Solutions",
        ctaLink: "/contact-us"
    };

    // AI/Tech icons for floating animation
    const aiIcons = [
        { Icon: Brain, delay: 0, position: { left: '3%', top: '10%' } },
        { Icon: Cpu, delay: 0.5, position: { right: '3%', top: '15%' } },
        { Icon: Network, delay: 1, position: { left: '5%', bottom: '15%' } },
        { Icon: Bot, delay: 1.5, position: { right: '5%', bottom: '20%' } },
        { Icon: Sparkles, delay: 2, position: { left: '10%', top: '25%' } },
        { Icon: Zap, delay: 2.5, position: { right: '10%', top: '30%' } },
    ];

    return (
        <section className={styles.heroBanner}>
            {/* Neural Network Nodes */}
            <div className={styles.neuralNetwork}>
                <motion.div 
                    className={styles.neuralNode}
                    style={{ left: '10%', top: '15%' }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className={styles.nodeCore}></div>
                    <div className={styles.nodeRing}></div>
                </motion.div>
                <motion.div 
                    className={styles.neuralNode}
                    style={{ right: '10%', top: '25%' }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <div className={styles.nodeCore}></div>
                    <div className={styles.nodeRing}></div>
                </motion.div>
                <motion.div 
                    className={styles.neuralNode}
                    style={{ left: '12%', bottom: '20%' }}
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className={styles.nodeCore}></div>
                    <div className={styles.nodeRing}></div>
                </motion.div>
                <motion.div 
                    className={styles.neuralNode}
                    style={{ right: '12%', bottom: '25%' }}
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                    <div className={styles.nodeCore}></div>
                    <div className={styles.nodeRing}></div>
                </motion.div>
            </div>

            {/* Floating AI Icons */}
            {aiIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className={styles.floatingIcon}
                    style={{ ...item.position, position: 'absolute' }}
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

            {/* AI Circuit Pattern */}
            <motion.div 
                className={styles.circuitPattern}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.5 }}
            >
                <svg className={styles.circuitSvg} viewBox="0 0 1000 1000">
                    <motion.path
                        d="M 100 200 L 300 200 L 300 400 L 500 400"
                        stroke="rgba(20, 184, 166, 0.4)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M 900 300 L 700 300 L 700 600 L 500 600"
                        stroke="rgba(20, 184, 166, 0.4)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />
                </svg>
            </motion.div>

            <div className={styles.bgElements}>
                {/* Gradient Mesh for AI feel */}
                <div className={styles.aiGradientMesh} />
                
                {/* Animated Data Streams */}
                <motion.div
                    className={styles.dataStream}
                    style={{ left: '5%', top: '30%' }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className={styles.dataStream}
                    style={{ right: '10%', bottom: '35%' }}
                    animate={{
                        y: [0, 100, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            {/* Content */}
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* AI Badge */}
                    <motion.div
                        className={styles.techBadge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Brain size={20} />
                        <span>Artificial Intelligence & SaaS</span>
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

                    {/* AI Technologies Pills */}
                    <motion.div
                        className={styles.techStack}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <span className={styles.techPill}>Machine Learning</span>
                        <span className={styles.techPill}>Deep Learning</span>
                        <span className={styles.techPill}>NLP</span>
                        <span className={styles.techPill}>Computer Vision</span>
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

export default AiSolutionsBanner;