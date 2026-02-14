import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
    repeat?: boolean;
}

export function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    distance = 30,
    className = "",
    repeat = true,
}: ScrollRevealProps) {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -distance : direction === "right" ? distance : 0,
            y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: !repeat, amount: 0.1 }}
            variants={variants}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
