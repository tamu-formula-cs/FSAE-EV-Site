"use client"
import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        let loadedImages = 0;
        
        const preloadImages = async () => {
            const imagePromises = images.map(src => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => {
                        loadedImages++;
                        setProgress((loadedImages / images.length) * 100);
                        resolve(img);
                    };
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(imagePromises);
                setImagesLoaded(true);
            } catch (error) {
                console.error('Error preloading images:', error);
            }
        };

        preloadImages();
    }, [images]);

    useEffect(() => {
        if (imagesLoaded && carouselReady) {
            setTimeout(() => {
                setIsLoading(false);
                setTimeout(onLoadComplete, 1000);
            }, 1000);
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