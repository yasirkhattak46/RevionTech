import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
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
            {/* Color Palette Swatches */}
            <div className={styles.colorSwatches}>
                <motion.div
                    className={styles.swatch}
                    style={{background: '#C44569', left: '5%', top: '15%'}}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{duration: 8, repeat: Infinity}}
                />
                <motion.div
                    className={styles.swatch}
                    style={{background: '#2C7A7B', right: '8%', top: '20%'}}
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -180, -360]
                    }}
                    transition={{duration: 10, repeat: Infinity}}
                />
                <motion.div
                    className={styles.swatch}
                    style={{background: '#D97706', left: '12%', bottom: '25%'}}
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 90, 180]
                    }}
                    transition={{duration: 7, repeat: Infinity}}
                />
                <motion.div
                    className={styles.swatch}
                    style={{background: '#059669', right: '15%', bottom: '30%'}}
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, -180]
                    }}
                    transition={{duration: 9, repeat: Infinity}}
                />
            </div>

            {/* Floating Design Icons */}
            {designIcons.map((item, index) => (
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

            {/* Design Frame Mock */}
            <motion.div
                className={styles.designFrame}
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 0.2, scale: 1}}
                transition={{duration: 1, delay: 1}}
            >
                <div className={styles.frameHeader}>
                    <div className={styles.frameLayers}>
                        <div className={styles.layerItem}></div>
                        <div className={styles.layerItem}></div>
                        <div className={styles.layerItem}></div>
                    </div>
                </div>
                <div className={styles.frameBody}>
                    <div className={styles.designElement}></div>
                    <div className={styles.designElement}></div>
                </div>
            </motion.div>

            {/* Bezier Curve Paths */}
            <svg className={styles.bezierCurves} viewBox="0 0 1000 1000">
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

            <div className={styles.bgElements}>
                {/* Gradient Mesh */}
                <div className={styles.gradientMesh}/>

                {/* Floating Design Shapes */}
                <motion.div
                    className={styles.designShape}
                    style={{left: '5%', top: '35%'}}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className={styles.triangle}/>
                </motion.div>
                <motion.div
                    className={styles.designShape}
                    style={{right: '10%', bottom: '35%'}}
                    animate={{
                        y: [0, 25, 0],
                        rotate: [0, -15, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className={styles.circle}/>
                </motion.div>
                <motion.div
                    className={styles.designShape}
                    style={{left: '18%', bottom: '20%'}}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 45, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className={styles.square}/>
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
            </div>
        </section>
    );
};

export default HeroBanner;