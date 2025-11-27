import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Search, Shield } from 'lucide-react';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
    const features = [
        {
            icon: Monitor,
            title: 'Responsive Design',
            description: 'Responsive Design ensures your website adapts seamlessly across all devices, providing an optimal viewing experience for your customers on desktop, tablet, and mobile.'
        },
        {
            icon: Search,
            title: 'SEO Optimization',
            description: 'Our cutting-edge SEO optimization strategies improve your search rankings, drive organic traffic, and enhance your online visibility to reach more potential customers.'
        },
        {
            icon: Shield,
            title: 'Secure & Fast',
            description: 'Secure & Fast development practices ensure your website is protected with advanced security measures while maintaining lightning-fast performance and reliability.'
        }
    ];

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
                        Why <span className={styles.highlight}>Choose Us</span>
                    </h2>
                    <p className={styles.subtitle}>
                        We can complete web development projects that are scalable website development services at a state,
                        scalably-examined high-performance websites for your business.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.featuresGrid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
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