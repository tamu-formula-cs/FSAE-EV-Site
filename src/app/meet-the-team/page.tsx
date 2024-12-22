"use client"
import styles from "./team.module.css"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import TeamImage from "../../../public/assets/images/full_team.jpg"
import Image from "next/image"
import Cta from "../components/cta/cta"
import ScrollToTopButton from "../components/scroll-button/ScrollToTopButton"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ScrollDownArrow from "../components/scroll-down-arrow/ScrollDownArrow"

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut" }
    }
}

export default function MeetTheTeam(){
    const [introRef, introInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [leadsRef, leadsInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });

    return <main className={styles.teamMain}>
        <Header noTransparent={true}/>
        <div className={styles.fullscreenImage}>
            <Image src={TeamImage.src} height={1152} width={1728} alt="Full Team"/>
            <ScrollDownArrow/>
        </div>

        <motion.div 
            className={styles.teamIntroContent}
            ref={introRef}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
        >
            <h1>Meet our team.</h1>
            <h2>Our success comes from the collective efforts of our subteams, each specializing in a critical area of development. 
                From the precision of aerodynamics to the strategy of sponsor relations, every subteam plays a vital role in driving us forward.</h2>
        </motion.div>

        <motion.div 
            className={styles.leadsSection}
            ref={leadsRef}
            initial="hidden"
            animate={leadsInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
        >
            <motion.h1 variants={fadeInUpVariants}>Our leads.</motion.h1>

            <motion.div className={styles.leadSection} variants={fadeInUpVariants}>
                <div className={styles.lead}>
                    <h1>Project Manager</h1>
                    <h2>Caleb Miller</h2>
                </div>

                <div className={styles.lead}>
                    <h1>Aerodynamics Lead</h1>
                    <h2>Philip Bertschy</h2>
                </div>

                <div className={styles.lead}>
                    <h1>Battery Lead</h1>
                    <h2>Alan Yan</h2>
                </div>

                <div className={styles.lead}>
                    <h1>Business Lead</h1>
                    <h2>Ryan Lucas</h2>
                </div>
            </motion.div>

            <motion.div className={styles.leadSection} variants={fadeInUpVariants}>
                <div className={styles.lead}>
                    <h1>Chassis Lead</h1>
                    <h2>Joshua Kraly</h2>
                </div>

                <div className={styles.lead}>
                    <h1>Electronics Lead</h1>
                    <h2>Joshua Wu</h2>
                </div>

                <div className={styles.lead}>
                    <h1>Finance Lead</h1>
                    <h2>Aiden Arnett</h2>
                </div>

                <div className={styles.lead}>
                    <h1>Marketing Lead</h1>
                    <h2>Ana Krayer</h2>
                </div>
            </motion.div>

            <motion.div className={styles.leadSection} variants={fadeInUpVariants}>
                <div className={styles.lead}>
                    <h1>Operations Lead</h1>
                    <h2>Sophie Foster</h2>
                </div>

                <div className={styles.lead}>
                    <h1>Powertrain Lead</h1>
                    <h2>Ethan Reich</h2>
                </div>

                <div className={styles.lead}>
                    <h1>Sales Lead</h1>
                    <h2>Holden Sparr</h2>
                </div>

                <div className={styles.lead}>
                    <h1>Software Lead</h1>
                    <h2>Athul Suresh</h2>
                </div>
            </motion.div>

            <motion.div className={styles.leadSection} variants={fadeInUpVariants}>
                <div className={styles.lead}>
                    <h1>Suspension Lead</h1>
                    <h2>Mark Cheek</h2>
                </div>
            </motion.div>
        </motion.div>

        <motion.div 
            className={styles.fullTeam}
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}
        >
            <motion.h1 variants={fadeInUpVariants}>The full team.</motion.h1>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Aerodynamics</h1>
                <h2>Philip Bertschy, David Thomas, Dennis Tan, Thomas Sepanski, Brody Smith, David Castro, Preston Montgomery</h2>
            </motion.div>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Battery</h1>
                <h2>Alan Yan, Aidan Arnett, Sebastian Regener, Jack O&apos;Mahoney, Alexis Rappa, Jeremy Hinton, Eli Ringle</h2>
            </motion.div>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Chassis</h1>
                <h2>Joshua Kraly, Alex Scott, Reagan Hoffmann</h2>
            </motion.div>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Electronics</h1>
                <h2>Sean Wall, Jaxon Grove, Qidao Lian, Gio Hernandez, Ryan Mackereth</h2>
            </motion.div>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Powertrain</h1>
                <h2>Ethan Reich, Purav Datta, Liam Brennan, Andrew Schonhoff, Jonathan Lozano</h2>
            </motion.div>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Software</h1>
                <h2>Athul Suresh, Bari Vadaria, Vedarth Atreya, Teymur Hajiyev</h2>
            </motion.div>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Suspension</h1>
                <h2>Mark Cheek, Mark Menezes, Andrew Liu, Lawson Canter, Jose Cruz, Emir Velic</h2>
            </motion.div>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Finance</h1>
                <h2>Aidan Arnett, Jeremy Macias</h2>
            </motion.div>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Marketing</h1>
                <h2>Ana Krayer, Zoe May, Megan Williams, Nat Chumpirom, John Estes, Gaurav Nimmagadda, Ellie Vaughan, Gerardo Hernandez Espinoza</h2>
            </motion.div>

            <motion.div className={styles.team} variants={fadeInUpVariants}>
                <h1>Operations</h1>
                <h2>Sophie Foster, Abby Wang, Andrew Duncan, Morgan Daffron</h2>
            </motion.div>
        </motion.div>

        <ScrollToTopButton offset={800}/>
        <Cta text="Ready to make an impact?" buttonOneText="Join Us" buttonTwoText="Sponsors" buttonOneLink="/coming-soon" buttonOneTarget="" buttonTwoLink="/get-involved" buttonTwoTarget=""/>
        <Footer/>
    </main>
}