"use client";

import WhiteLogo from "../../../../public/FormulaELogoWhite.png";
import BlackLogo from "../../../../public/FormulaELogoBlack.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

// Modern SVG icons for plus/minus
const PlusIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

interface MenuLink {
  text: string;
  href: string;
}

interface MenuItem {
  name: string;
  links: MenuLink[];
}

const menuItems: MenuItem[] = [
  {
    name: "About Us",
    links: [{ text: "Meet the Team", href: "/meet-the-team" }],
  },
  {
    name: "Sponsors",
    links: [{ text: "Get Involved", href: "/get-involved" }],
  },
  {
    name: "Cars",
    links: [
      { text: "AME25", href: "/coming-soon" },
      { text: "AME24", href: "/coming-soon" },
      { text: "AME23", href: "/coming-soon" },
      { text: "AME22", href: "/coming-soon" },
    ],
  },
];

// Define props for AnimatedLink
interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

const headerVariants = {
  initial: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "white",
    borderBottomColor: "white",
  },
  scrolled: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "black",
    borderBottomColor: "black",
  },
  hovered: {
    backgroundColor: "black",
    color: "white",
    borderBottomColor: "white",
  },
};

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  className,
  onHoverStart,
  onHoverEnd,
  target
}) => {
  const controls = useAnimation();

  // Initialize the underline position
  useEffect(() => {
    controls.set({ x: "-101%" });
  }, [controls]);

  const handleHoverStart = () => {
    // Stop any ongoing animation
    controls.stop();
    // Reset to start from the left
    controls.set({ x: "-101%" });
    // Animate to center
    controls.start({
      x: "0%",
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    if (onHoverStart) onHoverStart();
  };

  const handleHoverEnd = () => {
    // Stop any ongoing animation
    controls.stop();
    // Animate to the right
    controls.start({
      x: "101%",
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    if (onHoverEnd) onHoverEnd();
  };

  return (
    <motion.a
      href={href}
      className={className}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "0.2em 0",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
      target={target}
    >
      {children}
      <motion.div
        className={styles.underline}
        animate={controls}
        initial={{ x: "-100%", opacity: 1 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          width: "100%",
          background: "currentColor",
          pointerEvents: "none",
        }}
      />
    </motion.a>
  );
};

// Define props for Header
interface HeaderProps {
  noTransparent?: boolean;
}

export default function Header({ noTransparent = false }: HeaderProps) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredMenu, setHoveredMenu] = useState<null | string>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine the current variant based on props and state
  const currentVariant = hoveredMenu
    ? "hovered"
    : noTransparent
    ? "scrolled"
    : scrolled
    ? "scrolled"
    : "initial";

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <motion.header
      className={styles.header}
      variants={headerVariants}
      initial={noTransparent ? "scrolled" : "initial"}
      animate={currentVariant}
      transition={{
        backgroundColor: { duration: 0.6, ease: "easeInOut" },
        color: { duration: 0.3, ease: "easeInOut" },
        borderBottomColor: { duration: 0.3, ease: "easeInOut" },
      }}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo */}
      <div className={styles.logo} onClick={() => {router.push("/");}}>
        <Image
          src={
            hoveredMenu
              ? WhiteLogo.src
              : noTransparent || scrolled
              ? BlackLogo.src
              : WhiteLogo.src
          }
          alt="logo"
          width={108}
          height={35}
        />
      </div>

      {/* Desktop Nav */}
      <nav className={styles.nav}>
        {menuItems.map((item, index) => {
          const isHovered = hoveredMenu === item.name;
          return (
            <div
              className={styles.navItemWrapper}
              key={index}
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div className={styles.linkWrapper}>
                <AnimatedLink href="#" className={styles.navLink} target="">
                  {item.name}
                </AnimatedLink>

                {/* AnimatePresence for icons */}
                <div className={styles.iconContainer}>
                  <AnimatePresence mode="popLayout">
                    {isHovered ? (
                      <motion.div
                        key="minus"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className={styles.iconWrapper}
                      >
                        <MinusIcon />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className={styles.iconWrapper}
                      >
                        <PlusIcon />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Submenu */}
              <AnimatePresence>
                {isHovered && hoveredMenu !== "contact" && (
                  <motion.div
                    className={styles.submenuContainer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.05,
                      ease: "easeInOut",
                      exit: { duration: 0.05 }, // Faster exit animation
                    }}
                  >
                    <div className={styles.submenu}>
                      <div className={styles.submenuSectionTitle}>
                        ...
                      </div>
                      <ul className={styles.submenuList}>
                        {item.links.map((link, idx) => (
                          <li key={idx} className={styles.submenuListItem}>
                            <AnimatedLink
                              href={link.href}
                              className={styles.submenuLink}
                              target=""
                            >
                              {link.text}
                            </AnimatedLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Contact Us link */}
      <div className={styles.contact}>
        <AnimatedLink
          href="mailto:tamuformulaelectric@gmail.com"
          className={styles.contactLink}
          onHoverStart={() => setHoveredMenu("contact")}
          onHoverEnd={() => setHoveredMenu(null)}
          target="_blank"
        >
          Contact Us
        </AnimatedLink>
      </div>
    </motion.header>
  );
}