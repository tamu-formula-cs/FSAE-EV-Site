"use client";
import { motion } from "framer-motion";
import styles from "./Button.module.css";

interface ButtonProps {
    text: string;
    arrowWhite: boolean;
    link: string;
    target: string;
}

export default function Button({ text, arrowWhite, link, target }: ButtonProps) {
    return (
        <motion.a
            href={link}
            className={styles.link}
            target={target}
            rel="noopener noreferrer"
        >
            <motion.button
                className={styles.button}
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={{
                    rest: {},
                    hover: {}
                }}
            >
                <div className={styles.labelContainer}>
                    <span className={styles.label}>{text}</span>
                    <motion.div 
                        className={styles.underlinePrimary}
                        variants={{
                            rest: { x: "0%", transition: { duration: 0 } },
                            hover: { x: "100%", transition: { duration: 0.4, ease: "easeInOut" } }
                        }}
                    />
                    <motion.div 
                        className={styles.underlineSecondary}
                        variants={{
                            rest: { x: "-100%", transition: { duration: 0 } },
                            hover: { x: "0%", transition: { delay: 0.1, duration: 0.4, ease: "easeInOut" } }
                        }}
                    />
                </div>
                
                <div className={styles.arrowContainer}>
                    <div className={`${styles.circle} ${arrowWhite ? styles.circleBlackBg : styles.circleWhiteBg}`} />
                    <motion.svg 
                        className={`${styles.arrowPrimary} ${arrowWhite ? styles.arrowWhite : styles.arrowBlack}`} 
                        width="24" 
                        height="24" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        variants={{
                            rest: { x: 0 },
                            hover: { x: 35, transition: { duration: 0.4, ease: "easeInOut" } }
                        }}
                    >
                        <path d="M5 4L10 8L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>

                    <motion.svg 
                        className={`${styles.arrowSecondary} ${arrowWhite ? styles.arrowWhite : styles.arrowBlack}`} 
                        width="24" 
                        height="24" 
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        variants={{
                            rest: { x: -35 },
                            hover: { x: 0, transition: { duration: 0.4, ease: "easeInOut" } }
                        }}
                    >
                        <path d="M5 4L10 8L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </motion.svg>
                </div>
            </motion.button>
        </motion.a>
    );
}
