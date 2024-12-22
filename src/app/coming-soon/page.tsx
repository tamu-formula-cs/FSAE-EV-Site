"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styles from "./soon.module.css";
import ScrollToTopButton from "../components/scroll-button/ScrollToTopButton";

interface ParticleProps {
    key: number;
    top: string;
    left: string;
    delay: string;
}

export default function ComingSoon() {
    const [typewriterText, setTypewriterText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const phrasesRef = useRef([
        "Building this page...",
        "Drafting some designs...",
        "Thinking very carefully...",
        "Writing some code...",
        "In the shop..."
    ]);
    const [carPosition, setCarPosition] = useState(0);
    const [direction, setDirection] = useState(1);
    const [particles, setParticles] = useState<ParticleProps[]>([]);

    useEffect(() => {
        const updateTypewriter = () => {
            const phrase = phrasesRef.current[currentPhraseIndex];
            if (typewriterText.length < phrase.length) {
                const timeout = setTimeout(() => {
                    setTypewriterText(phrase.slice(0, typewriterText.length + 1));
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setCurrentPhraseIndex((prev) => (prev + 1) % phrasesRef.current.length);
                    setTypewriterText('');
                }, 2000);
                return () => clearTimeout(timeout);
            }
        };

        updateTypewriter();
    }, [typewriterText, currentPhraseIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
        setCarPosition((prev) => {
            let newPos = prev + direction;
            if (newPos >= 100) {
            newPos = 100;
            setDirection(-1);
            } else if (newPos <= 0) {
            newPos = 0;
            setDirection(1);
            }
            return newPos;
        });
        }, 30);
        return () => clearInterval(interval);
    }, [direction]);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { ease: "easeInOut" } },
    };

    return (
        <main
            className={styles.main}
            >
            <Header noTransparent={true} />
            <div className={styles.overlay}>
                {particles.map((particle) => (
                <div
                    key={particle.key}
                    className={styles.particle}
                    style={{
                    top: particle.top,
                    left: particle.left,
                    }}
                />
                ))}

                <motion.div
                className={styles.container}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                >
                <h2 className={styles.subtitle}>WE&apos;RE STILL</h2>
                <div className={styles.typewriterContainer}>
                    <h1 className={styles.typewriter}>
                    {typewriterText}
                    <span className={styles.cursor}>|</span>
                    </h1>
                </div>
                <div className={styles.racingContainer}>
                    <div className={styles.raceTrack}>
                    <div className={styles.raceTrackOverlay}></div>
                    </div>
                    <div
                    className={styles.car}
                    style={{ left: `${carPosition}%` }}
                    >
                    <div className={styles.carBody}>
                        <div className={styles.carTop}></div>
                        <div className={styles.wheelLeft}></div>
                        <div className={styles.wheelRight}></div>
                    </div>
                    </div>
                </div>
                <p className={styles.description}>This page is still under development. Check back soon!</p>
                </motion.div>
            </div>
            <ScrollToTopButton offset={200} />
            <Footer />
        </main>
    );
}
