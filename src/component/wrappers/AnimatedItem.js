"use client";
import { motion } from "framer-motion";

export default function AnimatedItem({   className="",
                                         children,
                                         type = "fadeUp", // animation type: fadeUp, fadeLeft, fadeRight
                                         delay = 0,        // delay in seconds for stagger
                                         once = true       // animate only once when in view
                                     }) {

    // Define different animation types
    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } }
        },
        fadeLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } }
        },
        fadeRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } }
        },
        scaleUp: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay } }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            variants={variants[type]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
