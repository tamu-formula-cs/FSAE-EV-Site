"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './ame25.module.css';
import ScrollToTopButton from '../components/scroll-button/ScrollToTopButton';

const AME25 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the target date in CST/CDT
  const ROLLOUT_DATE = new Date('2025-04-13T14:00:00-05:00'); // 2 PM CST on March 24th

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = ROLLOUT_DATE.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header noTransparent={false} />
      <div className={styles.container}>
        <motion.div 
          className={styles.backgroundGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {Array.from({ length: 96 }).map((_, i) => (
            <motion.div
              key={i}
              className={styles.gridCell}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 1.5,
                delay: i * 0.02,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        <main className={styles.main}>
          <motion.div 
            className={styles.titleContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className={`${styles.hero} ${styles.glitch} ${styles.layers}`} data-text="AME25">
              <span>AME25</span>
            </h1>
          </motion.div>

          <motion.div 
            className={styles.countdown}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className={styles.timeUnit}>
                <div className={styles.timeValue}>
                  {value.toString().padStart(2, '0')}
                </div>
                <div className={styles.timeLabel}>
                  {key}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="https://www.instagram.com/tamuformulaelectric/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Instagram size={24} />
            <span>Follow Our Journey</span>
          </motion.a>
        </main>
      </div>
      <ScrollToTopButton offset={100}/>
      <Footer />
    </motion.div>
  );
};

export default AME25;