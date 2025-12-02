"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    CodeXml, BrushIcon, ShieldCheck, TabletSmartphone, Headset, SmartphoneIcon, 
    LayoutTemplate, Gauge, AppWindow, Users, Zap, Code, Palette, LightbulbIcon, 
    TrendingUp, Brain, Layers, Megaphone, PenTool, PieChart, Target, Sparkles, 
    Headphones, LayoutGrid, Lightbulb
} from 'lucide-react';
import styles from './WhyChooseUs.module.scss';

// Icon mapping object
const iconMap = {
    CodeXml, BrushIcon, ShieldCheck, TabletSmartphone, Headset, SmartphoneIcon,
    LayoutTemplate, Gauge, AppWindow, Users, Zap, Code, Palette, LightbulbIcon,
    TrendingUp, Brain, Layers, Megaphone, PenTool, PieChart, Target, Sparkles,
    Headphones, LayoutGrid, Lightbulb
};

const WhyChooseUs = ({ title, subtitle, features }) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className={styles.whyChooseUs}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>
                        {title || 'Why Choose Us'}
                    </h2>
                    <p className={styles.subtitle}>
                        {subtitle || 'Partner with a team that combines technical expertise with creative innovation to deliver exceptional digital solutions that drive business growth and exceed expectations.'}
                    </p>
                </motion.div>

                <motion.div
                    className={styles.featuresGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features && features.map((feature, index) => {
                        // Get the icon component from the string name
                        const IconComponent = typeof feature.icon === 'string' 
                            ? iconMap[feature.icon] 
                            : feature.icon;
                        
                        return (
                            <motion.div
                                key={index}
                                className={styles.featureCard}
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <motion.div
                                    className={styles.iconWrapper}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <IconComponent className={styles.icon} />
                                </motion.div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;