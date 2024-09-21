import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const service_id = import.meta.env.VITE_EMAIL_SERVICE_ID
        const template_id = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
        const api_key = import.meta.env.VITE_EMAIL_API_KEY;

        try {
            const result = await emailjs.sendForm(
                service_id,
                template_id,
                event.target,
                api_key
            );

            event.target.reset();
            setThankYouMessageVisible(true);

            setTimeout(() => {
                setThankYouMessageVisible(false);
            }, 4000);
        } catch (error) {
            console.error('Error submitting form:', error, error.message);
        }
    };

    return (
        <>
            <Header />
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
                    
                    h1 {
                        font-family: 'Bebas Neue', sans-serif;
                    }
                `}
            </style>
            <div className="text-center mt-23 mb-60">
                <h1 className="text-black mt-20 mb-0" style={{ fontSize: '5rem' }}>Contact Us</h1>
                <form
                    className="mt-4 flex flex-col items-center w-4/5 mx-auto relative"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="mb-2 p-2 w-1/2 border border-maroon rounded-md"
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                    />
                    <input
                        className="mb-2 p-2 w-1/2 border border-maroon rounded-md"
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                    />
                    <textarea
                        className="mb-12 p-2 w-1/2 h-48 border border-maroon rounded-md"
                        name="message"
                        placeholder="Your Message"
                    />
                    <div className="absolute bottom-0">
                        <button
                            type="submit"
                            className="border-none py-2 px-4 cursor-pointer text-lg rounded-lg bg-tamu-maroon hover:bg-maroon text-white w-full max-w-xs"
                        >
                            Send
                        </button>
                    </div>

                    <div className="pb-8"></div>
                </form>
                {thankYouMessageVisible && (
                    <div id="thankYouMessage" className="mt-4 text-green-600">Thanks for contacting us! We'll reach out soon.</div>
                )}
            </div>
            <div className="mt-20"></div>
            <Footer />
        </>
    );
}