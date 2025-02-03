"use client";

import WhiteLogo from "../../../../public/FormulaELogoWhite.png";
import BlackLogo from "../../../../public/FormulaELogoBlack.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

interface MenuLink {
  text: string;
  href: string;
}

interface MenuItem {
  name: string;
  links: MenuLink[];
}

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

interface HeaderProps {
  noTransparent?: boolean;
}

const PlusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

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
      { text: "AME24", href: "/ame24" },
      { text: "AME23", href: "/ame23" },
      { text: "AME22", href: "/ame22" },
    ],
  },
];

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

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  className,
  onHoverStart,
  onHoverEnd,
  target = "",
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.set({ x: "-101%" });
  }, [controls]);

  const handleHoverStart = () => {
    controls.stop();
    controls.set({ x: "-101%" });
    controls.start({
      x: "0%",
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    if (onHoverStart) onHoverStart();
  };

  const handleHoverEnd = () => {
    controls.stop();
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

const Header: React.FC<HeaderProps> = ({ noTransparent = false }) => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


const currentVariant = isMobileMenuOpen
  ? "hovered"
  : hoveredMenu
  ? "hovered"
  : noTransparent
  ? "scrolled"
  : scrolled
  ? "scrolled"
  : "initial";


  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setExpandedItem(null);
  };

  const toggleExpandedItem = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  return (
    <>
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
        <div className={styles.logo} onClick={() => router.push("/")}>
          <Image
            src={
              hoveredMenu || isMobileMenuOpen
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

        {!isMobile && (
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
                    <AnimatedLink href="#" className={styles.navLink}>
                      {item.name}
                    </AnimatedLink>
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
                          exit: { duration: 0.05 },
                        }}
                      >
                        <div className={styles.submenu}>
                          <div className={styles.submenuSectionTitle}>...</div>
                          <ul className={styles.submenuList}>
                            {item.links.map((link, idx) => (
                              <li key={idx} className={styles.submenuListItem}>
                                <AnimatedLink
                                  href={link.href}
                                  className={styles.submenuLink}
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
        )}

        {!isMobile && (
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
        )}

        {isMobile && (
          <button
            className={styles.hamburgerButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        )}
      </motion.header>

      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className={styles.mobileMenuContent}>
              {menuItems.map((item, index) => (
                <div key={index} className={styles.mobileMenuItem}>
                  <button
                    className={styles.mobileMenuButton}
                    onClick={() => toggleExpandedItem(item.name)}
                  >
                    {item.name}
                    <span className={styles.mobileMenuIcon}>
                      {expandedItem === item.name ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {expandedItem === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.mobileSubmenu}
                      >
                        {item.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            className={styles.mobileSubmenuLink}
                          >
                            {link.text}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <a
                href="mailto:tamuformulaelectric@gmail.com"
                className={styles.mobileContactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;