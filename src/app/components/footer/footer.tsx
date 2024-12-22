// Footer.tsx
"use client";
import WhiteLogo from "../../../../public/FormulaELogoWhite.png";
import styles from "./footer.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SponsorImage from "./SponsorImage";
import { StaticImageData } from "next/image";
import Vistra from "../../../../public/assets/images/sponsors/vistra/vistra_white.png";
import Tesla from "../../../../public/assets/images/sponsors/tesla/tesla_white.png";
import EControls from "../../../../public/assets/images/sponsors/econtrols/econtrols_white.png";
import Altium from "../../../../public/assets/images/sponsors/altium/altium_white.png";
import Boeing from "../../../../public/assets/images/sponsors/boeing/boeing_white.png";
import Airtech from "../../../../public/assets/images/sponsors/airtech/airtech_white.png";
import Precision from "../../../../public/assets/images/sponsors/preicison/preicison_white.png";
import Gill from "../../../../public/assets/images/sponsors/gill/gill_white.png";
import Rapid from "../../../../public/assets/images/sponsors/rapid/rapid_white.png";
import Haas from "../../../../public/assets/images/sponsors/haas/haas_white.png";
import Perficient from "../../../../public/assets/images/sponsors/perficient/perficient_white.png";
import Coroflex from "../../../../public/assets/images/sponsors/coroflex/coroflex_white.png";
import Gulf from "../../../../public/assets/images/sponsors/gulf_coast/gulf_coast_white.png";
import GM from "../../../../public/assets/images/sponsors/gm/gm_whit.png";
import Addative from "../../../../public/assets/images/sponsors/addative/addative_white.png";
import Farmers from "../../../../public/assets/images/sponsors/farmers/farmers_white.png"

interface SponsorConfig {
    image: StaticImageData;
}

interface HoverableLiProps {
    text: string;
    link: string;
}

const liUnderlineVariants = {
    rest: { x: "-100%", transition: { duration: 0 } },
    hover: { x: "0%", transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.4, ease: "easeInOut" } }
};

const emailPrimaryLineVariants = {
    rest: { x: "0%", transition: { duration: 0 } },
    hover: { x: "100%", transition: { duration: 0.4, ease: "easeInOut" } }
};

const emailSecondaryLineVariants = {
    rest: { x: "-100%", transition: { duration: 0 } },
    hover: { x: "0%", transition: { delay: 0.1, duration: 0.4, ease: "easeInOut" } }
};

const sponsorConfigs: Record<string, SponsorConfig> = {
    vistra: { image: Vistra },
    tesla: { image: Tesla },
    eControls: { image: EControls },
    altium: { image: Altium },
    boeing: { image: Boeing },
    airtech: { image: Airtech },
    precision: { image: Precision },
    gill: { image: Gill },
    rapid: { image: Rapid },
    haas: { image: Haas },
    perficient: { image: Perficient },
    coroflex: { image: Coroflex },
    gulf: { image: Gulf },
    gm: { image: GM },
    addative: { image: Addative },
    farmers: {image: Farmers }
};

function HoverableLi({ text, link }: HoverableLiProps) {
    const [hoverState, setHoverState] = useState<"rest" | "hover" | "exit">("rest");

    return (
        <motion.li
            className={styles.hoverLink}
            initial="rest"
            animate={hoverState}
            onMouseEnter={() => setHoverState("hover")}
            onMouseLeave={() => setHoverState("exit")}
            onAnimationComplete={(definition) => {
                if (definition === "exit") {
                    setHoverState("rest");
                }
            }}
        >
            <motion.a
                href={link}
                className={styles.linkAnchor}
                style={{
                    position: "relative",
                    display: "inline-block",
                    overflow: "hidden",
                    whiteSpace: "nowrap"
                }}
            >
                {text}
                <motion.div
                    className={styles.underline}
                    variants={liUnderlineVariants}
                />
            </motion.a>
        </motion.li>
    );
}

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                {isMobile ? (
                    <>
                        <div className={styles.footerRightCol}>
                            <Image
                                src={WhiteLogo}
                                alt="logo"
                                width={123}
                                height={40}
                                className={styles.Logo}
                            />
                            <div className={styles.linksSection}>
                                <ul className={styles.linkSection}>
                                    <li className={styles.linkTitle}>ABOUT US</li>
                                    <HoverableLi text="Meet The Team" link="/meet-the-team" />
                                    <HoverableLi text="Cars" link="/coming-soon" />
                                </ul>
                                <ul className={styles.linkSection}>
                                    <li className={styles.linkTitle}>SPONSORS</li>
                                    <HoverableLi text="Get Involved" link="/get-involved" />
                                </ul>
                            </div>
                            <div className={styles.contactSection}>
                                <h1>CONTACT US</h1>
                                <motion.h2
                                    initial="rest"
                                    animate="rest"
                                    whileHover="hover"
                                    style={{
                                        position: "relative",
                                        display: "inline-block",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <motion.a
                                        href="mailto:tamuformulaelectric@gmail.com"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                            position: "relative",
                                            zIndex: 2,
                                        }}
                                    >
                                        tamuformulaelectric@gmail.com
                                    </motion.a>
                                    <motion.div
                                        className={styles.underlinePrimary}
                                        variants={emailPrimaryLineVariants}
                                    />
                                    <motion.div
                                        className={styles.underlineSecondary}
                                        variants={emailSecondaryLineVariants}
                                    />
                                </motion.h2>
                            </div>
                            <div className={styles.footerLeftCol}>
                                <p>Copyright © 2024 Texas A&M Formula Electric</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.footerLeftCol}>
                            <Image
                                src={WhiteLogo}
                                alt="logo"
                                width={123}
                                height={40}
                                className={styles.Logo}
                            />
                            <p>Copyright © 2024 Texas A&M Formula Electric</p>
                        </div>
                        <div className={styles.footerRightCol}>
                            <div className={styles.linksSection}>
                                <ul className={styles.linkSection}>
                                    <li className={styles.linkTitle}>ABOUT US</li>
                                    <HoverableLi text="Meet The Team" link="/meet-the-team" />
                                    <HoverableLi text="Cars" link="/coming-soon" />
                                </ul>
                                <ul className={styles.linkSection}>
                                    <li className={styles.linkTitle}>SPONSORS</li>
                                    <HoverableLi text="Get Involved" link="/get-involved" />
                                </ul>
                            </div>
                            <div className={styles.contactSection}>
                                <h1>CONTACT US</h1>
                                <motion.h2
                                    initial="rest"
                                    animate="rest"
                                    whileHover="hover"
                                    style={{
                                        position: "relative",
                                        display: "inline-block",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <motion.a
                                        href="mailto:tamuformulaelectric@gmail.com"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                            position: "relative",
                                            zIndex: 2,
                                        }}
                                    >
                                        tamuformulaelectric@gmail.com
                                    </motion.a>
                                    <motion.div
                                        className={styles.underlinePrimary}
                                        variants={emailPrimaryLineVariants}
                                    />
                                    <motion.div
                                        className={styles.underlineSecondary}
                                        variants={emailSecondaryLineVariants}
                                    />
                                </motion.h2>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className={styles.footerBottom}>
                {isMobile ? 
                <>
                    <div className={styles.sponsorSection}>
                        <h1>TITLE SPONSORS</h1>
                        <div className={styles.sponsorImages}>
                            <SponsorImage config={sponsorConfigs.vistra} />
                            <SponsorImage config={sponsorConfigs.tesla} />
                            <SponsorImage config={sponsorConfigs.eControls} />
                        </div>
                    </div>

                    <div className={styles.sponsorSection}>
                        <h1>PLATINUM SPONSORS</h1>
                        <div className={styles.sponsorImages}>
                            <SponsorImage config={sponsorConfigs.altium} size="large" />
                            <SponsorImage config={sponsorConfigs.boeing} size="large" />
                            <SponsorImage config={sponsorConfigs.airtech} />
                            <SponsorImage config={sponsorConfigs.precision}/>
                        </div>
                    </div>

                    <div className={styles.sponsorSection}>
                        <h1>GOLD SPONSORS</h1>
                        <div className={styles.sponsorImages}>
                            <SponsorImage config={sponsorConfigs.gill}/>
                            <SponsorImage config={sponsorConfigs.rapid}/>
                            <SponsorImage config={sponsorConfigs.haas}/>
                            <SponsorImage config={sponsorConfigs.perficient}/>
                            <SponsorImage config={sponsorConfigs.farmers}/>
                        </div>
                    </div>

                    <div className={styles.sponsorSection}>
                        <h1>BRONZE SPONSORS</h1>
                        <div className={styles.sponsorImages}>
                            <SponsorImage config={sponsorConfigs.coroflex}/>
                            <SponsorImage config={sponsorConfigs.gulf}/>
                            <SponsorImage config={sponsorConfigs.gm}/>
                            <SponsorImage config={sponsorConfigs.addative}/>
                        </div>
                    </div>
                    </> :

                    <>
                        <div className={styles.sponsorSection}>
                            <h1>TITLE SPONSORS</h1>
                            <div className={styles.sponsorImages}>
                                <SponsorImage config={sponsorConfigs.vistra} />
                                <SponsorImage config={sponsorConfigs.tesla} />
                                <SponsorImage config={sponsorConfigs.eControls} />
                            </div>
                        </div>

                        <div className={styles.sponsorSection}>
                            <h1>PLATINUM SPONSORS</h1>
                            <div className={styles.sponsorImages}>
                                <SponsorImage config={sponsorConfigs.altium} size="large" />
                                <SponsorImage config={sponsorConfigs.boeing} size="large" />
                                <SponsorImage config={sponsorConfigs.airtech} />
                                <SponsorImage config={sponsorConfigs.precision}/>
                            </div>
                        </div>

                        <div className={styles.sponsorSection}>
                            <h1>GOLD SPONSORS</h1>
                            <div className={styles.sponsorImages}>
                                <SponsorImage config={sponsorConfigs.gill}/>
                                <SponsorImage config={sponsorConfigs.rapid}/>
                                <SponsorImage config={sponsorConfigs.haas}/>
                                <SponsorImage config={sponsorConfigs.perficient}/>
                                <SponsorImage config={sponsorConfigs.farmers}/>
                            </div>
                        </div>

                        <div className={styles.sponsorSection}>
                            <h1>BRONZE SPONSORS</h1>
                            <div className={styles.sponsorImages}>
                                <SponsorImage config={sponsorConfigs.coroflex} size="large"/>
                                <SponsorImage config={sponsorConfigs.gulf}/>
                                <SponsorImage config={sponsorConfigs.gm} size="large"/>
                                <SponsorImage config={sponsorConfigs.addative} size="large"/>
                            </div>
                        </div>
                    </>}
            </div>
        </footer>
    );
}
