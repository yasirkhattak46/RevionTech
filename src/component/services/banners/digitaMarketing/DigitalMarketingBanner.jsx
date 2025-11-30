import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {TrendingUp, Search, BarChart3, Megaphone, Target, Globe} from 'lucide-react';
import styles from './DigitalMarketingBanner.module.scss';

const DigitalMarketingBanner = () => {
    // Marketing icons for floating animation
    const marketingIcons = [
        {Icon: TrendingUp, delay: 0, position: {left: '10%', top: '20%'}},
        {Icon: Search, delay: 0.5, position: {right: '15%', top: '25%'}},
        {Icon: BarChart3, delay: 1, position: {left: '15%', bottom: '25%'}},
        {Icon: Megaphone, delay: 1.5, position: {right: '20%', bottom: '30%'}},
        {Icon: Target, delay: 2, position: {left: '25%', top: '40%'}},
        {Icon: Globe, delay: 2.5, position: {right: '10%', top: '50%'}},
    ];

    return (
        <section className={styles.heroBanner}>
            {/* Analytics Charts */}
            <div className={styles.analyticsCharts}>
                <motion.div
                    className={`${styles.chart} ${styles.chart1}`}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{duration: 6, repeat: Infinity}}
                />
                <motion.div
                    className={`${styles.chart} ${styles.chart2}`}
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{duration: 8, repeat: Infinity, delay: 1}}
                />
                <motion.div
                    className={`${styles.chart} ${styles.chart3}`}
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{duration: 7, repeat: Infinity, delay: 2}}
                />
                <motion.div
                    className={`${styles.chart} ${styles.chart4}`}
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.2, 0.45, 0.2]
                    }}
                    transition={{duration: 9, repeat: Infinity, delay: 0.5}}
                />
            </div>

            {/* Floating Marketing Icons */}
            {marketingIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className={styles.floatingIcon}
                    style={item.position}
                    initial={{opacity: 0, scale: 0}}
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.1, 1],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        opacity: {duration: 3, repeat: Infinity, delay: item.delay},
                        scale: {duration: 3, repeat: Infinity, delay: item.delay},
                        y: {duration: 4, repeat: Infinity, delay: item.delay}
                    }}
                >
                    <item.Icon size={40}/>
                </motion.div>
            ))}

            {/* Marketing Dashboard */}
            <motion.div
                className={styles.marketingDashboard}
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 0.3, scale: 1}}
                transition={{duration: 1, delay: 1}}
            >
                <div className={styles.dashboardHeader}>
                    <div className={styles.headerIndicators}>
                        <div className={`${styles.indicator} ${styles.red}`}></div>
                        <div className={`${styles.indicator} ${styles.yellow}`}></div>
                        <div className={`${styles.indicator} ${styles.green}`}></div>
                    </div>
                </div>
                <div className={styles.dashboardBody}>
                    <div className={styles.metricCard}></div>
                    <div className={styles.metricCard}></div>
                    <div className={styles.metricCard}></div>
                </div>
            </motion.div>

            {/* Growth Trajectory Lines */}
            <svg className={styles.growthLines} viewBox="0 0 1000 1000">
                <motion.path
                    d="M 100 500 Q 250 200, 500 400 T 900 300"
                    stroke="#{color.adjust(#10b981, $alpha: -0.6)}"
                    strokeWidth="3"
                    fill="none"
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
                />
                <motion.path
                    d="M 100 300 Q 350 600, 600 200 T 900 500"
                    stroke="#{color.adjust(#3b82f6, $alpha: -0.6)}"
                    strokeWidth="3"
                    fill="none"
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5}}
                />
            </svg>

            {/* Marketing Growth Pattern */}
            <motion.div
                className={styles.circuitPattern}
                initial={{opacity: 0}}
                animate={{opacity: 0.2}}
                transition={{duration: 1.5}}
            >
                <svg viewBox="0 0 1000 1000">
                    <motion.path
                        d="M 100 500 Q 250 200, 500 400 T 900 300"
                        stroke="rgba(196, 69, 105, 0.4)"
                        strokeWidth="3"
                        fill="none"
                        initial={{pathLength: 0}}
                        animate={{pathLength: 1}}
                        transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
                    />
                    <motion.path
                        d="M 100 300 Q 350 600, 600 200 T 900 500"
                        stroke="rgba(44, 122, 123, 0.4)"
                        strokeWidth="3"
                        fill="none"
                        initial={{pathLength: 0}}
                        animate={{pathLength: 1}}
                        transition={{duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5}}
                    />
                </svg>
            </motion.div>

            <div className={styles.bgElements}>
                {/* Gradient Mesh for Marketing feel */}
                <div className={styles.gradientMesh}/>

                {/* Marketing Metrics */}
                <motion.div
                    className={`${styles.marketingMetric} ${styles.seoScore}`}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    SEO 92%
                </motion.div>
                <motion.div
                    className={`${styles.marketingMetric} ${styles.conversionRate}`}
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                >
                    4.7%
                </motion.div>
                <motion.div
                    className={`${styles.marketingMetric} ${styles.trafficGrowth}`}
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                >
                    +68%
                </motion.div>
            </div>

            {/* Content */}
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    {/* Marketing Badge */}
                    <motion.div
                        className={styles.techBadge}
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.6, delay: 0.1}}
                    >
                        <TrendingUp size={20}/>
                        <span>Digital Marketing & SEO</span>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                       <span> Result-Driven</span> Digital Marketing & SEO Services
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                    >
                        Revion Tech offers comprehensive digital marketing services designed to increase online
                        visibility, attract targeted customers, and boost conversions. From SEO, social media marketing,
                        paid ads, and content marketing, we deliver strategic campaigns that drive traffic, engagement,
                        and measurable business growth.
                    </motion.p>

                    {/* Marketing Services Pills */}
                    <motion.div
                        className={styles.techStack}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.5}}
                    >
                        <span className={styles.techPill}>SEO Optimization</span>
                        <span className={styles.techPill}>PPC Campaigns</span>
                        <span className={styles.techPill}>Social Media</span>
                        <span className={styles.techPill}>Content Strategy</span>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.6}}
                    >
                        <Link href={'/contact-us'} className="transparent-btn">
                            <span className="btn-text"><span>Grow Your Business Online</span></span>
                            <span className="btn-icon"><Target size={20}/></span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default DigitalMarketingBanner;