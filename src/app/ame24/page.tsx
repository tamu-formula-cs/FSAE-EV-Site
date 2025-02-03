"use client"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Carousel from "../components/carousel/Carousel";
import ScrollDownArrow from "../components/scroll-down-arrow/ScrollDownArrow";
import ScrollToTopButton from "../components/scroll-button/ScrollToTopButton";
import Cta from "../components/cta/cta";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LandingCar from "../../../public/assets/images/showcase/24-blurry.jpg";
import LandingCar2 from "../../../public/assets/images/showcase/24-field.jpg";
import LandingCar3 from "../../../public/assets/images/showcase/24-spoiler.jpg";
import LandingCar4 from "../../../public/assets/images/showcase/24-side-three.jpg";
import LandingCar5 from "../../../public/assets/images/showcase/24-side-two-comp.jpg";
import LandingCar6 from "../../../public/assets/images/showcase/24-track.jpg";
import Team from "../../../public/assets/images/showcase/24-team.jpg";
import { Toaster } from "../components/toast/toaster";
import { useToast } from "../components/toast/use-toast";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import styles from "./ame24.module.css";
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
        { label: "0-60", value: "3.2s" },
        { label: "Output", value: "500V" },
        { label: "Top Speed", value: "80 MPH" },
        { label: "Power", value: "103.7 HP" }
    ];

    const carouselContent = [
        {
          imageIndex: 1,
          title: "RELIABILITY",
          content: "AME24\'s design prioritizes simplicity and serviceability, with rapid " +
            "battery maintenance capabilities and over 200km of testing. This focus ensures " +
            "competition readiness and consistent performance."
        },
        {
          imageIndex: 2,
          title: "ENGINEERING",
          content: "Built with a steel spaceframe chassis, double wishbone suspension, and " +
            "carbon fiber aerodynamics, AME24 demonstrates sophisticated design principles. " +
            "Each component maximizes both performance and efficiency."
        },
        {
          imageIndex: 3,
          title: "DEVELOPMENT",
          content: "Our onboard data acquisition system provides vital performance metrics " +
            "that drive continuous improvement. This data shapes our engineering decisions " +
            "and helps set benchmarks for future racing innovations."
        }
      ];

    const { toast } = useToast();
    
    useEffect(() => {
        // Only show toast after loading is complete
        if (!isLoading) {
            const timer = setTimeout(() => {
                toast({
                    title: "See AME24 in action!",
                    duration: 6000,
                    action: (
                        <a 
                            href="https://www.youtube.com/watch?v=JnUFHU_EKHA" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                                color: '#000',
                                fontWeight: 'normal',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <ExternalLink size={16} />
                        </a>
                    ),
                });
            }, 10000);
        
            return () => clearTimeout(timer);
        }
    }, [toast, isLoading]);

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
                    car="AME24"
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
                <h2>AME24&apos;s success came from the collective efforts of specialized subteams working in harmony. From aerodynamics to marketing, each team&apos;s expertise and dedication 
                    helped create a competitive electric racing vehicle. 
                    Their collaborative spirit and technical excellence set new standards for TAMU Formula Electric.</h2>
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
                        <h1>Electrical Chief</h1>
                        <h2>Jeff Cunningham</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Mechanical Chief</h1>
                        <h2>Ethan Reich</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Business Chief</h1>
                        <h2>Ryan Lucas</h2>
                    </div>
                </motion.div>

                <motion.div className={styles.leadSection} variants={fadeInUpVariants}>
                    <div className={styles.lead}>
                        <h1>Aerodynamics Lead</h1>
                        <h2>Phillip Bertschy</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Battery Lead</h1>
                        <h2>Alan Yan</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Chassis Lead</h1>
                        <h2>Caleb Miller</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Electronics Lead</h1>
                        <h2>Jacinto Rodriguez Shahin</h2>
                    </div>
                </motion.div>

                <motion.div className={styles.leadSection} variants={fadeInUpVariants}>
                    <div className={styles.lead}>
                        <h1>Powertrain Lead</h1>
                        <h2>Adan Corral</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Suspension Lead</h1>
                        <h2>Joseph Weaver</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Finance Lead</h1>
                        <h2>Aidan Arnett</h2>
                    </div>

                    <div className={styles.lead}>
                        <h1>Marketing Lead</h1>
                        <h2>Marcela Gonzalez</h2>
                    </div>
                </motion.div>

                <motion.div className={styles.leadSection} variants={fadeInUpVariants}>
                    <div className={styles.lead}>
                        <h1>Sales Lead</h1>
                        <h2>Holden Sparr</h2>
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
                    <h2>Bertschy Phillip, Hesseltine Brody, Smith Luke, Tan Dennis, Tummalapalli Anirudh</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Battery</h1>
                    <h2>Draude Jenna, Hinton Jeremy, Lafferty Andrew, Patel Raaj, Ramos Jesus, Yan Alan</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Chassis</h1>
                    <h2>Cruz Jose, Kraly Joshua, Lagman Jireh, Lozano Jonathan, Miller Caleb G.</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Electronics</h1>
                    <h2>Boddu Praneeth, Hernandez Giosef, Kruse Blake, Mathew Erica, Moreland Thomas, Rodriguez Jacinto, Rojas Adrian, Wu Joshua</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Powertrain</h1>
                    <h2>Corral Adan, Datta Purav, Diaz-Santini Luis, Haefner Robert, Martin Nick</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Suspension</h1>
                    <h2>Cain Matthew, Castro David, Cheek Mark, Weaver Joseph, Wyatt Brendan</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Marketing</h1>
                    <h2>Gonzalez Marcela, Hernandez Gerardo</h2>
                </motion.div>

                <motion.div className={styles.team} variants={fadeInUpVariants}>
                    <h1>Business</h1>
                    <h2>Lucas Ryan, Sparr Holden</h2>
                </motion.div>
            </motion.div>

            <ScrollToTopButton offset={800}/>
            <div className={styles.contentSection}></div>
            <Cta text="Ready to make an impact?" buttonOneText="Join Us" buttonTwoText="Sponsors" buttonOneLink="/coming-soon" buttonOneTarget="" buttonTwoLink="/get-involved" buttonTwoTarget=""/>
            <div className={styles.contentSection}></div>
            <Footer/>
            <Toaster />
        </motion.main>
        </>
    );
}
