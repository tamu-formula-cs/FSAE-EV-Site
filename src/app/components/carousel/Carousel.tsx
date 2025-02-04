"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './carousel.module.css';

interface Stat {
  label: string;
  value: string;
}

interface TextContent {
  title: string;
  content: string;
  imageIndex: number;
}

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  stats: Stat[];
  textContents?: TextContent[];
  car: string;
  onReady?: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, stats, textContents = [], car, onReady }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Validation
  if (images.length < 2) {
    throw new Error('At least two images are required');
  }
  if (!textContents.some(content => content.imageIndex === 1)) {
    throw new Error('At least one text content for the second image is required');
  }

  // Notify parent component that carousel is ready
  useEffect(() => {
    onReady?.();
  }, [onReady]);

  // Timer management
  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000);
  }, [images.length]);

  // Initialize carousel
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Touch handlers
  const handleDotClick = (index: number): void => {
    setCurrentSlide(index);
    startTimer();
  };

  const handleTouchStart = (e: React.TouchEvent): void => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (): void => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      }
      startTimer();
    }
  };

  // Content rendering
  const renderContent = () => {
    if (currentSlide === 0) {
      return (
        <motion.div
          key="stats"
          className={styles.contentBox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>STATS</h2>
          <div className={`${styles.statsGrid} ${styles.leftAligned}`}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      );
    }

    const textContent = textContents.find(content => content.imageIndex === currentSlide);
    if (!textContent) return null;

    return (
      <motion.div
        key={currentSlide}
        className={styles.contentBox}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{textContent.title}</h2>
        <p className={styles.textContent}>{textContent.content}</p>
      </motion.div>
    );
  };

  return (
    <div 
      className={styles.carouselContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          className={styles.imageContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
            fill
            style={{ objectFit: "cover" }}
            priority
            quality={95}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div 
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>{car}</h1>
      </motion.div>

      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>

      <div className={styles.navigation}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;