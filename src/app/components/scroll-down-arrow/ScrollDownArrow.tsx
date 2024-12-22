import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './ScrollDownArrow.module.css';

const ScrollDownArrow = ({ color = "rgba(0, 0, 0, 0.8)" }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition <= 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
        {isVisible && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.arrowContainer}
            >
            <motion.div
                animate={{
                y: [0, 8, 0],
                }}
                transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
                }}
                className={styles.arrowWrapper}
            >
                <ChevronDown 
                className={styles.arrow}
                color={color}
                strokeWidth={1.5}
                size={32}
                />
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
};

export default ScrollDownArrow;