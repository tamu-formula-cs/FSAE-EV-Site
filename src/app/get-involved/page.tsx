"use client";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "./getInvolved.module.css";
import Cta from "../components/cta/cta";
import ScrollToTopButton from "../components/scroll-button/ScrollToTopButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CheckMark from "../../../public/assets/icons/check_mark.svg"
import Image from "next/image";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" },
  },
};

export default function GetInvolved() {
  const [contentRef, contentInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <main className={styles.getInvolvedContainer}>
      <Header noTransparent={true} />
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
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h1 variants={fadeInUpVariants}>Sponsorship tiers.</motion.h1>
        <motion.div className={styles.tier} variants={fadeInUpVariants}>
          <h3>Support our growth and directly power the next generation of innovation.</h3>
        </motion.div>

        <motion.div className={styles.rectangleGrid} variants={fadeInUpVariants}>
          <div className={styles.rectangle}>
            <div className={styles.rectangleTop}>
                <h1 className={styles.rectangleTitle}>Affiliate</h1>
                <h2 className={styles.rectangleSubtitle}>Become a valued supporter with official recognition and a small apparel logo.</h2>
            </div>
            <div className={styles.rectangleBottom}>
                <h1 className={styles.price}>$1,500<span> or less</span></h1>
            </div>
          </div>

          <div className={styles.rectangle}>
            <div className={styles.rectangleTop}>
                <h1 className={styles.rectangleTitle}>Bronze</h1>
                <h2 className={styles.rectangleSubtitle}>Increase your brand presence with apparel placement and online recognition.</h2>
            </div>
            <div className={styles.rectangleBottom}>
                <h1 className={styles.price}>$1,500<span> or more</span></h1>
            </div>
          </div>

          <div className={styles.rectangle}>
            <div className={styles.rectangleTop}>
                <h1 className={styles.rectangleTitle}>Silver</h1>
                <h2 className={styles.rectangleSubtitle}>Expand your influence with social media features and racecar branding.</h2>
            </div>
            <div className={styles.rectangleBottom}>
                <h1 className={styles.price}>$3,500<span> or more</span></h1>
            </div>
          </div>

          <div className={styles.rectangle}>
            <div className={styles.rectangleTop}>
                <h1 className={styles.rectangleTitle}>Gold</h1>
                <h2 className={styles.rectangleSubtitle}>Heighten your impact with standout logos and multiple social highlights.</h2>
            </div>
            <div className={styles.rectangleBottom}>
                <h1 className={styles.price}>$5,000<span> or more</span></h1>
            </div>
          </div>

          <div className={styles.rectangle}>
            <div className={styles.rectangleTop}>
                <h1 className={styles.rectangleTitle}>Platinum</h1>
                <h2 className={styles.rectangleSubtitle}>Enhance your reach with large-scale branding, recruiting access, and more.</h2>
            </div>
            <div className={styles.rectangleBottom}>
                <h1 className={styles.price}>$8,000<span> or more</span></h1>
            </div>
          </div>

          <div className={styles.rectangle}>
            <div className={styles.rectangleTop}>
                <h1 className={styles.rectangleTitle}>Title</h1>
                <h2 className={styles.rectangleSubtitle}>Lead the way with exclusive privileges and unmatched visibility.</h2>
            </div>
            <div className={styles.rectangleBottom}>
                <h1 className={styles.price}>$17,500<span> or more</span></h1>
            </div>
          </div>
        </motion.div>

        <motion.div
        className={styles.tableContainer}
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.table className={styles.benefitsTable} variants={fadeInUpVariants}>
          <thead>
            <tr>
              <th>Benefit</th>
              <th>Affiliate</th>
              <th>Bronze</th>
              <th>Silver</th>
              <th>Gold</th>
              <th>Platinum</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {/* 501(c)(3) benefits */}
            <tr>
              <td>501(c)(3) benefits</td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
            </tr>
            {/* Invitation to unveiling event */}
            <tr>
              <td>Invitation to unveiling event</td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
            </tr>
            {/* Honored on our website */}
            <tr>
              <td>Honored on our website</td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
            </tr>
            {/* Team apparel logo size */}
            <tr>
              <td>Team apparel logo size</td>
              <td>S</td>
              <td>S</td>
              <td>S</td>
              <td>M</td>
              <td>L</td>
              <td>XL</td>
            </tr>
            {/* Social media posts */}
            <tr>
              <td>Social media posts</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
              <td>2</td>
              <td>2</td>
              <td>3</td>
            </tr>
            {/* Logo on car size */}
            <tr>
              <td>Logo on car size</td>
              <td>-</td>
              <td>-</td>
              <td>S</td>
              <td>M</td>
              <td>L</td>
              <td>XL</td>
            </tr>
            {/* Recruiting events */}
            <tr>
              <td>Recruiting events</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
            </tr>
            {/* Team resume book access */}
            <tr>
              <td>Team resume book access</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
            </tr>
            {/* Branded banner */}
            <tr>
              <td>Branded banner</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
            </tr>
            {/* SAE dinner event */}
            <tr>
              <td>SAE dinner event</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td><Image src={CheckMark.src} alt="CheckMark" width={16} height={16} /></td>
            </tr>
          </tbody>
        </motion.table>
      </motion.div>
      </motion.div>

      <Cta
        text={"Become a sponsor today."}
        buttonOneText={"Sponsorship Form"}
        buttonTwoText={"More Information"}
        buttonOneLink="https://docs.google.com/forms/d/e/1FAIpQLSdtQi7fqd_5vuXDb-bkmgnH5zBVry04Mak3ltg6Tkz3lAN12w/viewform"
        buttonOneTarget="_blank"
        buttonTwoLink="https://tamucs-my.sharepoint.com/personal/bari_vadaria_tamu_edu/_layouts/15/onedrive.aspx?id=/personal/bari_vadaria_tamu_edu/Documents/Sponsor%20Packet/Texas%20A%26M%20Formula%20E%20Sponsor%20Packet%202023-2024.pdf&parent=/personal/bari_vadaria_tamu_edu/Documents/Sponsor%20Packet&ga=1"
        buttonTwoTarget="_blank"
      />

      <div className={styles.spacer}></div>
      <ScrollToTopButton offset={300} />
      <Footer />
    </main>
  );
}
