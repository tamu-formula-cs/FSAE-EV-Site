"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import TeamAndCar from "../../public/assets/images/team_and_car.jpg"
import TeamRunning from "../../public/assets/images/team_running.jpg"
import Speed from "../../public/assets/images//cropped_speed.jpg"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { textFadeInVariants, imageFadeInVariants } from "./variants";
import Button from "./components/button/Button";
import Footer from "./components/footer/footer";
import ScrollToTopButton from "./components/scroll-button/ScrollToTopButton";
import ScrollDownArrow from "./components/scroll-down-arrow/ScrollDownArrow";


export default function Home() {
  const [textRef, textInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [sponsorTextRef, sponsorTextInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [sponsorImagesRef, sponsorImagesInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <main>
      <Header />

      {/* Landing Section - Video */}
      <div className={styles.landing}>
        <video
          className={styles.backgroundVideo}
          src="/assets/videos/site_landing.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Mission Section */}
      <div className={styles.missionSection}>
        <motion.div
          className={styles.missionContent}
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textFadeInVariants}
        >
          <div className={styles.missionLeftCol}>
              <h1>Our Mission</h1>
              <h2>Shaping future engineers through high-performance electric vehicles.</h2>
          </div>
          <div className={styles.missionRightCol}>
              <p>Our mission at Texas A&M Formula Electric is to cultivate students into high-quality engineers 
                through the full-scale development of a high-performing electric formula-style vehicle and through year-over-year improvement of the program.</p>

              <p>Our vision this year is to develop a reliable platform for our drivers capable of placing in the top 5% of all events at FSAE Michigan, 
                through early testing and validation.</p>

              <p>In order to achieve our vision, we design for testing time, reliability, and points-based performance.</p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.missionImage}
          ref={imageRef}
          initial="hidden" 
          animate={imageInView ? "visible" : "hidden"} 
          variants={imageFadeInVariants}
        >
          <Image src={TeamAndCar.src} width={1728} height={887} alt="Team" className={styles.missionImage}/>
        </motion.div>
      </div>

      {/* Animated Meet The Team Section - TODO */}

      {/* Sponsors Section */}
      <div className={styles.sponsorsSection}>
        <motion.div
          className={styles.sponsorsLeftCol}
          ref={sponsorTextRef}
          initial="hidden"
          animate={sponsorTextInView ? "visible" : "hidden"}
          variants={textFadeInVariants}
        >
          <h1>Sponsors</h1>
          <h2>Partner with us to drive the future of electric racing.</h2>
          <p>Your support fuels more than just a race car. It powers innovation, collaboration, and real-world impact.</p>

          <p>At Texas A&M Formula Electric, we turn ideas into competition-ready designs, driven by a shared mission to push the boundaries of engineering. Together with our sponsors, 
            we’re not only building cutting-edge technology but also shaping the next generation of leaders and innovators. Join us in making a lasting impact.</p>

          <Button text={"Learn More"} arrowWhite={false} link="/get-involved" target=""/>
        </motion.div>

        <motion.div
          className={styles.sponsorsRightCol}
          ref={sponsorImagesRef}
          initial="hidden"
          animate={sponsorImagesInView ? "visible" : "hidden"}
          variants={imageFadeInVariants}
        >
          <Image src={TeamRunning.src} width={525} height={348} alt="team" className={styles.sponsorImage}/>
          <Image src={Speed.src} width={525} height={348} alt="team" className={styles.sponsorImage}/>
        </motion.div>
      </div>

      <Footer/>
      <ScrollToTopButton offset={1000}/>
      <ScrollDownArrow color="rgba(255, 255, 255, 0.8)"/>
    </main>
  );
}
