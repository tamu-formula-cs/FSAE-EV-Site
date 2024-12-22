"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import UpArrow from "../../../../public/assets/icons/up_arrow.svg"
import styles from "./scrollToTopButton.module.css";

interface ScrollToTopButtonProps {
    offset: number;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ offset }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > offset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
    
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [offset]);
    

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
        {isVisible && (
            <motion.div
            className={styles.scrollToTop}
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
            <Image src={UpArrow.src} alt="Scroll to Top" width={12} height={12} />
            </motion.div>
        )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
