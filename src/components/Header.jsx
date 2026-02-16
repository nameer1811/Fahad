import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Header = ({ startTyping }) => {
    const fullText = "hey, fahad here.";
    const [text, setText] = useState("");

    useEffect(() => {
        if (!startTyping) return;

        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 150); // Adjust typing speed here

        return () => clearInterval(interval);
    }, [startTyping]);

    return (
        <header className="h-screen pt-28 overflow-hidden relative flex items-center justify-center" id="home">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center z-10">
                <div className="text-4xl md:text-6xl font-bold mb-6 h-20 flex items-center justify-center font-mono text-primary whitespace-pre">
                    <span>{text}</span>
                    {startTyping && (
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="w-1 h-10 md:h-14 bg-primary ml-1 inline-block"
                        />
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={startTyping ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                >
                    <h5 className="text-light text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-mono">
                        I am a data engineer based out of Florida. I am interested in building large-scale products and services.
                    </h5>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={startTyping ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 3, duration: 0.8 }}
                    className="mt-12 flex gap-6"
                >
                    <a
                        href="https://www.linkedin.com/in/sheikhfahad1811/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-primary transition-colors transform hover:scale-110 duration-300"
                    >
                        <BsLinkedin size={28} />
                    </a>
                    <a
                        href="https://github.com/nameer1811"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-primary transition-colors transform hover:scale-110 duration-300"
                    >
                        <BsGithub size={28} />
                    </a>
                    <a
                        href="mailto:nameer.fahad@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-primary transition-colors transform hover:scale-110 duration-300"
                    >
                        <MdEmail size={32} />
                    </a>
                </motion.div>


            </div>
        </header>
    );
};

export default Header;
