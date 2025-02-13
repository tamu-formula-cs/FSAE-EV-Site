"use client"

import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "./contact.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut" }
    }
};

export default function Contact() {
    const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);
    const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [formRef, formInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [thankYouRef, thankYouInView] = useInView({ threshold: 0.2, triggerOnce: true });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
    
        const service_id = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? (() => { throw new Error('NEXT_PUBLIC_EMAIL_SERVICE_ID is not defined') })();
        const template_id = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? (() => { throw new Error('NEXT_PUBLIC_EMAIL_TEMPLATE_ID is not defined') })();
        const api_key = process.env.NEXT_PUBLIC_EMAIL_API_KEY ?? (() => { throw new Error('NEXT_PUBLIC_EMAIL_API_KEY is not defined') })();
    
        try {
            await emailjs.sendForm(service_id, template_id, form, api_key);
            form.reset(); // Use the form reference directly
            setThankYouMessageVisible(true);
    
            setTimeout(() => {
                setThankYouMessageVisible(false);
            }, 4000);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <>
            <Header noTransparent={true} />
            <div className={styles.container}>
                <motion.h1
                    className={styles.title}
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                >
                    Got questions? We&apos;ve got answers.
                </motion.h1>
                <motion.h1
                    className={styles.title}
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                >
                    Just reach out.
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    ref={headerRef}
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                >
                    Tell us a bit about yourself and what you&apos;ve got in mind.
                </motion.p>

                <motion.form
                    className={styles.form}
                    ref={formRef}
                    initial="hidden"
                    animate={formInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    onSubmit={handleSubmit}
                >
                    <motion.input
                        className={styles.input}
                        type="text"
                        name="user_name"
                        placeholder="Your name"
                        required
                        variants={fadeInUpVariants}
                    />
                    <motion.input
                        className={styles.input}
                        type="email"
                        name="user_email"
                        placeholder="you@company.com"
                        required
                        variants={fadeInUpVariants}
                    />
                    <motion.textarea
                        className={styles.textarea}
                        name="message"
                        placeholder="Share your thoughts with us..."
                        required
                        variants={fadeInUpVariants}
                    />
                    {!thankYouMessageVisible ? (
                        <motion.button
                            type="submit"
                            className={styles.button}
                            variants={fadeInUpVariants}
                        >
                            Submit
                        </motion.button>
                    ) : (
                        <motion.div
                            className={styles.thankYouMessage}
                            ref={thankYouRef}
                            initial="hidden"
                            animate={thankYouInView ? "visible" : "hidden"}
                            variants={fadeInUpVariants}
                        >
                            Thanks for contacting us! We&apos;ll reach out soon.
                        </motion.div>
                    )}
                </motion.form>
            </div>
            <Footer />
        </>
    );
}
