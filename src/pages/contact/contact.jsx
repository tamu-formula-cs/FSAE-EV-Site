import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { useState } from "react";

export default function Contact() {
    const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            console.log('Form submitted successfully', response);

            form.reset();
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
            <div className="text-center mt-12 mb-8">
                <h1 className="font-bebas text-4xl">Contact Us</h1>
                <form
                    className="mt-4 flex flex-col items-center w-4/5 mx-auto relative"
                    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScIDzc4swg6AYECqs3vnjOvldE3cwpr29QLivPrr0SVa5FJNw/formResponse?pli=1"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="mb-2 p-2 w-1/2 border border-maroon rounded-md"
                        type="text"
                        name="entry.276066810"
                        placeholder="Your Name"
                    />
                    <input
                        className="mb-2 p-2 w-1/2 border border-maroon rounded-md"
                        type="email"
                        name="entry.1504943651"
                        placeholder="Your Email"
                    />
                    <textarea
                        className="mb-12 p-2 w-1/2 h-48 border border-maroon rounded-md"
                        name="entry.412394112"
                        placeholder="Your Message"
                    />
                    <div className="absolute bottom-0">
                        <button
                            type="submit"
                            className="border-none py-2 px-4 cursor-pointer text-lg rounded-md bg-maroon text-white w-full max-w-xs"
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
            <Footer />
        </>
    )
}
