"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "./footer.module.css";

interface SponsorConfig {
    image: StaticImageData;
}

interface SponsorImageProps {
    config: SponsorConfig;
    size?: 'default' | 'large' | 'larger';
    className?: string;
}

export default function SponsorImage({ config, size = 'default', className = '' }: SponsorImageProps) {
    const height = size === 'large' ? 60 : 40;

    const calculatedWidth = (config.image.width / config.image.height) * height;

    return (
        <div 
            className={`${styles.sponsorImageContainer} 
                        ${size === 'large' ? styles.sponsorImageContainerLarge : ''} 
                        ${className}`}>
            <Image
                src={config.image}
                alt={config.image.src.split('/').pop()?.split('_')[0] || 'sponsor'}
                height={height}
                width={calculatedWidth}
                objectFit="contain"
                loading="lazy"
            />
        </div>
    );
}
