"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './preloader.module.css';

interface PreLoaderProps {
    images: string[];
    onLoadComplete: () => void;
    carouselReady: boolean;
}

const PreLoader: React.FC<PreLoaderProps> = ({ images, onLoadComplete, carouselReady }) => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const loadedImagesRef = useRef<Set<string>>(new Set());

    useEffect(() => {
        let mounted = true;
        
        const preloadImages = async () => {
            const imagePromises = images.map((src) => {
                return new Promise<void>((resolve, reject) => {
                    // Skip if already loaded
                    if (loadedImagesRef.current.has(src)) {
                        resolve();
                        return;
                    }

                    const img = new Image();
                    
                    img.onload = () => {
                        if (mounted) {
                            loadedImagesRef.current.add(src);
                            const progress = (loadedImagesRef.current.size / images.length) * 100;
                            setProgress(progress);
                            resolve();
                        }
                    };
                    
                    img.onerror = () => {
                        console.error(`Failed to load image: ${src}`);
                        reject();
                    };

                    // Set loading priority
                    img.setAttribute('fetchpriority', 'high');
                    img.src = src;
                });
            });

            try {
                await Promise.all(imagePromises);
                if (mounted) {
                    setImagesLoaded(true);
                }
            } catch (error) {
                console.error('Error preloading images:', error);
                // Still mark as loaded to prevent blocking
                if (mounted) {
                    setImagesLoaded(true);
                }
            }
        };

        preloadImages();

        return () => {
            mounted = false;
        };
    }, [images]);

    useEffect(() => {
        if (imagesLoaded && carouselReady) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                onLoadComplete();
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [imagesLoaded, carouselReady, onLoadComplete]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div 
                    className={styles.preloader}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.progressContainer}>
                        <motion.div 
                            className={styles.progressBar}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                        <motion.span 
                            className={styles.progressText}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {Math.round(progress)}%
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PreLoader;