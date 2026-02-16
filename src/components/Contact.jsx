import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.error(error.text);
                setStatus('error');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="pt-12 pb-12 flex flex-col">
            <div className="flex items-center justify-center gap-4 mb-12 w-full">
                <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 w-1/6 md:w-1/4"></div>
                <h2 className="text-3xl font-bold text-light font-mono">contact_me</h2>
                <div className="h-[1px] bg-gradient-to-r from-white/20 to-transparent w-1/6 md:w-1/4"></div>
            </div>
            <div className="container mx-auto px-4 max-w-2xl">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-4 rounded-lg bg-transparent border border-primary/40 text-white placeholder-light focus:border-primary focus:outline-none transition-colors"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-4 rounded-lg bg-transparent border border-primary/40 text-white placeholder-light focus:border-primary focus:outline-none transition-colors"
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                        className="w-full p-4 rounded-lg bg-transparent border border-primary/40 text-white placeholder-light focus:border-primary focus:outline-none transition-colors resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={isSending}
                        className={`btn btn-primary self-center px-8 py-3 bg-primary text-bg rounded-lg hover:bg-white hover:text-bg transition-colors font-medium w-full md:w-auto ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-400 text-center mt-4">Thank you for your message, I will get back to you as soon as possible!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-400 text-center mt-4">Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
