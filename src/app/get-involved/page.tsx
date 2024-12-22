"use client"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import styles from "./getInvolved.module.css"
import Cta from "../components/cta/cta"
import ScrollToTopButton from "../components/scroll-button/ScrollToTopButton"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut" }
    }
}

export default function GetInvolved(){
    const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true });

    return <main className={styles.getInvolvedContainer}>
        <Header noTransparent={true}/>
        <motion.div 
            className={styles.getInvolvedContent}
            ref={contentRef}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.2
                    }
                }
            }}
        >
            <motion.h1 variants={fadeInUpVariants}>
                Sponsorship tiers.
            </motion.h1>

            <motion.div className={styles.tier} variants={fadeInUpVariants}>
                <h2>Affiliate (up to $1,500)</h2>
                <h3>Sponsors enjoy 501(c)(3) benefits, an invitation to our exclusive unveiling event, recognition on our website, and the inclusion of a small logo on team apparel.</h3>
            </motion.div>

            <motion.div className={styles.tier} variants={fadeInUpVariants}>
                <h2>Bronze ($1,500+)</h2>
                <h3>Sponsors receive all Affiliate benefits and a small logo on team apparel.</h3>
            </motion.div>

            <motion.div className={styles.tier} variants={fadeInUpVariants}>
                <h2>Silver ($3,500+)</h2>
                <h3>Sponsors gain all Bronze benefits, plus a featured social media post and a small logo displayed on the racecar.</h3>
            </motion.div>

            <motion.div className={styles.tier} variants={fadeInUpVariants}>
                <h2>Gold ($5,000+)</h2>
                <h3>Sponsors receive all Silver benefits, a medium-sized logo on team apparel, two social media posts, and a medium-sized logo prominently displayed on the racecar.</h3>
            </motion.div>

            <motion.div className={styles.tier} variants={fadeInUpVariants}>
                <h2>Platinum ($8,000+)</h2>
                <h3>Sponsors enjoy all Gold benefits, a large logo on team apparel, access to recruiting events, and exclusive access to the team resume book.</h3>
            </motion.div>

            <motion.div className={styles.tier} variants={fadeInUpVariants}>
                <h2>Title ($17,500+)</h2>
                <h3>Sponsors gain the highest level of recognition, with all Platinum benefits, an extra-large logo on team apparel, three social media posts, an extra-large logo on the racecar, a branded banner, and invitations to the SAE dinner event.</h3>
            </motion.div>
        </motion.div>

        <Cta text={"Become a sponsor today."} buttonOneText={"Sponsorship Form"} buttonTwoText={"More Information"} buttonOneLink="https://docs.google.com/forms/d/e/1FAIpQLSdtQi7fqd_5vuXDb-bkmgnH5zBVry04Mak3ltg6Tkz3lAN12w/viewform" buttonOneTarget="_blank" buttonTwoLink="https://tamucs-my.sharepoint.com/personal/bari_vadaria_tamu_edu/_layouts/15/onedrive.aspx?id=/personal/bari_vadaria_tamu_edu/Documents/Sponsor%20Packet/Texas%20A%26M%20Formula%20E%20Sponsor%20Packet%202023-2024.pdf&parent=/personal/bari_vadaria_tamu_edu/Documents/Sponsor%20Packet&ga=1" buttonTwoTarget="_blank"/>

        <div className={styles.spacer}></div>
        <ScrollToTopButton offset={300}/>
        <Footer/>
    </main>
}