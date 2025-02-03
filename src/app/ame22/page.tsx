"use client"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Carousel from "../components/carousel/Carousel";
import ScrollDownArrow from "../components/scroll-down-arrow/ScrollDownArrow";
import ScrollToTopButton from "../components/scroll-button/ScrollToTopButton";
import Cta from "../components/cta/cta";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LandingCar from "../../../public/assets/images/showcase/22-side.jpg";
import LandingCar2 from "../../../public/assets/images/showcase/22-shop.jpg";
import LandingCar3 from "../../../public/assets/images/showcase/22-kids.jpg";
import LandingCar4 from "../../../public/assets/images/showcase/22-helmet.png";
import Team from "../../../public/assets/images/showcase/22-team.jpg";
import PreLoader from "../components/preloader/Preloader";
import { useState } from "react";
import Image from "next/image";
import styles from "./ame22.module.css";

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut" }
    }
};

export default function Page() {
    const [teamContentRef, teamContentInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [leadsRef, leadsInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [fullTeamRef, fullTeamInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [isLoading, setIsLoading] = useState(true);
    const [isCarouselReady, setIsCarouselReady] = useState(false);

    const carouselImages = [
        { src: LandingCar.src, alt: "AME24 Racing Car Front View" },
        { src: LandingCar2.src, alt: "AME22 Racing Car Side View" },
        { src: LandingCar3.src, alt: "AME22 Racing Car Testing" },
        { src: LandingCar4.src, alt: "AME22 Racing Car Competition" },
    ];

    const allImages = [
        ...carouselImages.map(img => img.src),
        Team.src
    ];

    const carStats = [
        { label: "Weight", value: "465 lbs" },
        { label: "Cornering", value: "2.5 G" },
        { label: "Acceleration", value: "2.0 G" },
        { label: "Test Goal", value: "600 mi" }
      ];
      

    const carouselContent = [
        {
          imageIndex: 1,
          title: "FOUNDATION",
          content: "Established in 2021, this was the first year of Texas A&M\'s Formula Electric team. " +
            "Building on TAMU\'s legacy of 8 FSAE championships, 40 members across six engineering " +
            "disciplines laid the groundwork for electric racing excellence."
        },
        {
          imageIndex: 2,
          title: "EFFICIENCY",
          content: "The vehicle featured rapid serviceability, with battery maintenance possible " +
            "within 10 minutes of leaving the track. Standardized fasteners throughout reduced " +
            "tool requirements and streamlined assembly operations."
        },
        {
          imageIndex: 3,
          title: "DEVELOPMENT",
          content: "Despite supply chain challenges with materials and electronics, the team " +
            "implemented innovative solutions including 3D printed prototypes for fit testing " +
            "and specialized mounting jigs for chassis assembly."
        }
      ];
      

    return (
        <>
        <PreLoader 
            images={allImages}
            onLoadComplete={() => setIsLoading(false)}
            carouselReady={isCarouselReady}
        />

        <motion.main className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}>
            <Header noTransparent={false}/>
            <div className={styles.carouselSection}>
                <Carousel 
                    images={carouselImages}
                    stats={carStats}
                    textContents={carouselContent}
                    car="AME22"
                    onReady={() => setIsCarouselReady(true)}
                />
            </div>

            <section className={styles.teamSection}>
                <Image 
                    src={Team.src}
                    alt="Texas A&M Formula Electric Team"
                    fill
                    className={styles.teamImage}
                    priority
                />
                <div className={styles.scrollDown}>
                    <ScrollDownArrow color="white" />
                </div>
            </section>

            <motion.div 
                className={`${styles.teamIntroContent} ${styles.contentSection}`}
                ref={teamContentRef}
                initial="hidden"
                animate={teamContentInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
            >
                <h1>Meet the team.</h1>
                <h2>In 2022, Texas A&M Formula Electric was established by 40 pioneering students across six engineering disciplines. 
    From mechanical engineering to electronics, these founding members laid the groundwork for TAMU&apos;s electric racing future. 
    Their efforts established the foundation for what would become a new chapter in Texas A&M&apos;s racing legacy.</h2>
            </motion.div>

            <motion.div 
                className={`${styles.leadsSection} ${styles.contentSection}`}
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
                <motion.h1 variants={fadeInUpVariants}>The leads.</motion.h1>

                <motion.div className={styles.leadSection} variants={fadeInUpVariants}>
    <div className={styles.lead}>
        <h1>Project Manager</h1>
        <h2>Luis Garcia</h2>
    </div>

    <div className={styles.lead}>
        <h1>Mechanical Advisor</h1>
        <h2>Dr. Sri Saripalli</h2>
    </div>

    <div className={styles.lead}>
        <h1>Electrical Advisor</h1>
        <h2>Dr. Matthew Johnson</h2>
    </div>

    <div className={styles.lead}>
        <h1>Business Lead</h1>
        <h2>Brennan Skeen</h2>
    </div>
</motion.div>

<motion.div className={styles.leadSection} variants={fadeInUpVariants}>
    <div className={styles.lead}>
        <h1>Aero Lead</h1>
        <h2>John DePadova</h2>
    </div>

    <div className={styles.lead}>
        <h1>Battery Lead</h1>
        <h2>George Marye</h2>
    </div>

    <div className={styles.lead}>
        <h1>Chassis Lead</h1>
        <h2>Jesus Armenta</h2>
    </div>

    <div className={styles.lead}>
        <h1>Electronics Lead</h1>
        <h2>Gerry Mullins</h2>
    </div>
</motion.div>

<motion.div className={styles.leadSection} variants={fadeInUpVariants}>
    <div className={styles.lead}>
        <h1>Suspension Lead</h1>
        <h2>Jacob Thomas</h2>
    </div>
</motion.div>
            </motion.div>

            <motion.div 
                className={`${styles.fullTeam} ${styles.contentSection}`}
                ref={fullTeamRef}
                initial="hidden"
                animate={fullTeamInView ? "visible" : "hidden"}
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
    <h2>DePadova John, Kennedy Sean, Sanchez Daniel, Shuman Zane, Trammel Nicholas</h2>
</motion.div>

<motion.div className={styles.team} variants={fadeInUpVariants}>
    <h1>Battery</h1>
    <h2>Enuke Christopher, Hoffman Trevor, Marye George, Ratcliffe Noah, Shed Oren, Tao Guanhua</h2>
</motion.div>

<motion.div className={styles.team} variants={fadeInUpVariants}>
    <h1>Chassis</h1>
    <h2>Armenta Jesus, Camargo Santiago, Halcom Calen, Hernandez Alejandro, Nguyen Charles, Padda Chahat, Walker Charlie</h2>
</motion.div>

<motion.div className={styles.team} variants={fadeInUpVariants}>
    <h1>Electronics</h1>
    <h2>Beckett Abhimanyu, Morrison Garett, Mullins Gerry, Rodriguez Leonardo, Sanabria Sergio, Singh Abhimanyu</h2>
</motion.div>

<motion.div className={styles.team} variants={fadeInUpVariants}>
    <h1>Suspension</h1>
    <h2>Bhuvanesh Abhirath, Lopez Christopher, Mayo Colten, Thomas Jacob, Tummalapalli Sesha</h2>
</motion.div>

<motion.div className={styles.team} variants={fadeInUpVariants}>
    <h1>Business</h1>
    <h2>Huettel Hailey, Lele Mohit, Scott Hunter, Skeen Brennan, Vacek Zack</h2>
</motion.div>
            </motion.div>

            <ScrollToTopButton offset={800}/>
            <div className={styles.contentSection}></div>
            <Cta text="Ready to make an impact?" buttonOneText="Join Us" buttonTwoText="Sponsors" buttonOneLink="/coming-soon" buttonOneTarget="" buttonTwoLink="/get-involved" buttonTwoTarget=""/>
            <div className={styles.contentSection}></div>
            <Footer/>
        </motion.main>
        </>
    );
}