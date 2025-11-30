import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {Palette, Layers, Pen, Figma, Layout, Sparkles} from 'lucide-react';
import styles from './GraphicDesignBanner.module.scss';

const HeroBanner = () => {

    // Design icons for floating animation
    const designIcons = [
        {Icon: Palette, delay: 0, position: {left: '10%', top: '20%'}},
        {Icon: Pen, delay: 0.5, position: {right: '15%', top: '25%'}},
        {Icon: Layers, delay: 1, position: {left: '15%', bottom: '25%'}},
        {Icon: Figma, delay: 1.5, position: {right: '20%', bottom: '30%'}},
        {Icon: Layout, delay: 2, position: {left: '25%', top: '40%'}},
        {Icon: Sparkles, delay: 2.5, position: {right: '10%', top: '50%'}},
    ];

    return (
        <section className={styles.heroBanner}>
            {/* Floating Design Icons */}
            {designIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className={styles.floatingIcon}
                    style={item.position}
                    initial={{opacity: 0, scale: 0}}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
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

            {/* Content */}
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    {/* Left Content */}
                    <motion.div
                        className={styles.content}
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
                        {/* Design Badge */}
                        <motion.div
                            className={styles.techBadge}
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6, delay: 0.1}}
                        >
                            <Palette size={20}/>
                            <span>Creative Design Solutions</span>
                        </motion.div>

                        <motion.h1
                            className={styles.title}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            Professional Graphic Design Services to Elevate <span>Your Brand</span>
                        </motion.h1>

                        <motion.p
                            className={styles.subtitle}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                        >
                            Revion Tech provides<b> professional graphic design services</b> to help brands stand out. From logo
                            design, branding, social media visuals, and marketing materials, we deliver creative,
                            high-quality, and engaging designs that capture attention, strengthen brand identity, and drive
                            meaningful audience engagement across all platforms.
                        </motion.p>

                        {/* Design Tools */}
                        <motion.div
                            className={styles.techStack}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.5}}
                        >
                            <span className={styles.techPill}>Figma</span>
                            <span className={styles.techPill}>Adobe XD</span>
                            <span className={styles.techPill}>Photoshop</span>
                            <span className={styles.techPill}>Illustrator</span>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.6}}
                        >
                            <Link href={'/contact-us'} className="transparent-btn">
                                <span className="btn-text"><span>Bring Your Brand to Life</span></span>
                                <span className="btn-icon"><Sparkles size={20}/></span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        className={styles.imageSection}
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
                                alt="Graphic Design"
                                fill
                                className={styles.bannerImage}
                                sizes="(max-width: 991px) 100vw, 50vw"
                                priority
                            />
                            <div className={styles.imageOverlay}></div>
                            
                            {/* Floating Cards */}
                            <motion.div 
                                className={styles.floatingCard} 
                                style={{top: '15%', left: '10%'}}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.8}}
                            >
                                <div className={styles.cardIcon}><Palette size={24}/></div>
                                <div className={styles.cardContent}>
                                    <h4>500+</h4>
                                    <p>Designs Created</p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className={styles.floatingCard} 
                                style={{bottom: '20%', right: '10%'}}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 1}}
                            >
                                <div className={styles.cardIcon}><Sparkles size={24}/></div>
                                <div className={styles.cardContent}>
                                    <h4>100%</h4>
                                    <p>Creative</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;