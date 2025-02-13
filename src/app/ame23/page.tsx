"use client"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Carousel from "../components/carousel/Carousel";
import ScrollDownArrow from "../components/scroll-down-arrow/ScrollDownArrow";
import ScrollToTopButton from "../components/scroll-button/ScrollToTopButton";
import Cta from "../components/cta/cta";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LandingCar from "../../../public/assets/images/showcase/23-blurry.png";
import LandingCar2 from "../../../public/assets/images/showcase/23-fast.png";
import LandingCar3 from "../../../public/assets/images/showcase/23-cone.jpg";
import LandingCar4 from "../../../public/assets/images/showcase/23-rollout.jpg";
import LandingCar5 from "../../../public/assets/images/showcase/23-back.jpg";
import LandingCar6 from "../../../public/assets/images/showcase/23-rollout-closeup.jpg";
import Team from "../../../public/assets/images/showcase/23-team.jpg";
import Image from "next/image";
import styles from "./ame23.module.css";
import PreLoader from "../components/preloader/Preloader";
import { useMemo, useCallback } from "react";

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
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);

    const carouselImages = useMemo(() => [
        { src: LandingCar.src, alt: "AME24 Racing Car Front View" },
        { src: LandingCar2.src, alt: "AME24 Racing Car Side View" },
        { src: LandingCar3.src, alt: "AME24 Racing Car Testing" },
        { src: LandingCar4.src, alt: "AME24 Racing Car Competition" },
        { src: LandingCar5.src, alt: "AME24 Racing Car Competition" },
        { src: LandingCar6.src, alt: "AME24 Racing Car Competition" }
    ], []);

    const allImages = useMemo(() => [
        ...carouselImages.map(img => img.src),
        Team.src
    ], [carouselImages]);

    const carStats = [
        { label: "0-60", value: "4.7s" },
        { label: "Top Speed", value: "70 MPH" },
        { label: "Output", value: "450V" },
        { label: "Power", value: "107 HP" }
    ];

    const carouselContent = [
        {
          imageIndex: 1,
          title: "EVOLUTION",
          content: "AME23 represented a crucial step in our electric racing journey, advancing " +
            "our understanding of EV systems and manufacturing processes. The project helped establish " +
            "core competencies that would shape future vehicle development."
        },
        {
          imageIndex: 2,
          title: "DESIGN",
          content: "Built around a steel spaceframe chassis with dual rear outboard motors, AME23 " +
            "featured a CFRP aerodynamics package and double wishbone suspension. The design " +
            "prioritized agility and manufacturability throughout."
        },
        {
          imageIndex: 3,
          title: "INNOVATION",
          content: "The team pioneered key technologies including carbon fiber layup processes " +
            "and cylindrical cell battery architecture. These developments established fundamental " +
            "capabilities for future vehicle iterations."
        }
      ];
      
    
      const handleLoadComplete = useCallback(() => {
        setIsImagesLoaded(true);
        // Only set loading to false when both images are loaded and carousel is ready
        if (isCarouselReady) {
            setIsLoading(false);
        }
    }, [isCarouselReady]);

    const handleCarouselReady = useCallback(() => {
        setIsCarouselReady(true);
        // Only set loading to false when both images are loaded and carousel is ready
        if (isImagesLoaded) {
            setIsLoading(false);
        }
    }, [isImagesLoaded]);

    return (
        <>
        <PreLoader 
            images={allImages}
            onLoadComplete={handleLoadComplete}
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
                    car="AME23"
                    onReady={handleCarouselReady}
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
                <h2>Building on AME22&apos;s foundation, our second-year team focused on refining our manufacturing processes and 
        engineering capabilities. Through dedicated development and testing, AME23 achieved major improvements in 
        vehicle performance and reliability.</h2>
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
                        <h2>Gerry Mullins</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Chassis Lead</h1>
                        <h2>Ani Tummalapalli</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Suspension Lead</h1>
                        <h2>Christopher Lopez</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Electronics Lead</h1>
                        <h2>Jack Walker</h2>
                    </div>
                </motion.div>

                <motion.div className={styles.leadSection} variants={fadeInUpVariants}>
                    <div className={styles.lead}>
                        <h1>Powertrain Lead</h1>
                        <h2>Christopher Enuke</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Battery Lead</h1>
                        <h2>Noah Ratcliffe</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Aerodynamics Lead</h1>
                        <h2>Nicholas Trammel</h2>
                    </div>

                    <div className={`${styles.lead} ${styles.hideMobile}`} style={{visibility: "hidden"}}>
                        <h1>Placeholder</h1>
                        <h2>Placeholder</h2>
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
                    <h1>Chassis</h1>
                    <h2>Joshua Bennett, Ruicong Xie, William Brumley</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Suspension</h1>
                    <h2>Elizabeth Tiedt, Emir Velic, Vanessa Trevino, Charles Beare</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Electronics</h1>
                    <h2>Jacinto Rodriguez Shahin, Shahir Quereshi, Hamzah Issa, Jeff Cunningham</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Powertrain</h1>
                    <h2>Alexander McQueen, Tristan Massa, Abhirath Bhuvanesh, Andy Kim, Pranav Veerubhotla</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Battery</h1>
                    <h2>Trevor Hoffman, Theodore Mai, Aaron Ehmry, Ryan Cummings, Hamzah Issa, Mark Cheek</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Aerodynamics</h1>
                    <h2>Zane Shuman, Sean Kennedy, Chris Coon, John Depadova</h2>
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