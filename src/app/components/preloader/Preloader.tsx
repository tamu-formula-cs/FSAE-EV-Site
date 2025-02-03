"use client"
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './preloader.module.css';

interface PreLoaderProps {
    images: string[];
    onLoadComplete: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ images, onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

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
                setTimeout(() => {
                    setIsLoading(false);
                    setTimeout(onLoadComplete, 1000);
                }, 1000);
            } catch (error) {
                console.error('Error preloading images:', error);
            }
        };

        preloadImages();
    }, [images, onLoadComplete]);

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