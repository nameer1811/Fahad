import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section, header#home");
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = "#" + section.getAttribute("id");
                }
            });

            if (current) {
                setActiveNav(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "#home", label: "Home" },
        { id: "#about", label: "About" },
        { id: "#experience", label: "Experience" },
        { id: "#projects", label: "Projects" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-sm transition-all duration-300">
            <div className="flex items-center gap-8 md:gap-12">
                <a href="#home" className="text-lg md:text-xl font-bold font-mono text-light tracking-wide whitespace-nowrap">
                    Sheikh Fahad
                </a>

                <div className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.id}
                            onClick={() => setActiveNav(item.id)}
                            className={`text-sm font-medium transition-colors relative ${activeNav === item.id ? "text-primary" : "text-light/70 hover:text-white"
                                }`}
                        >
                            {item.label}
                            {activeNav === item.id && (
                                <motion.div
                                    layoutId="navIndicator"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                                />
                            )}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex gap-4">
                <AnimatePresence>
                    {activeNav !== "#home" && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex gap-4 items-center"
                        >
                            <a href="https://www.linkedin.com/in/sheikhfahad1811/" target="_blank" rel="noreferrer" className="text-light hover:text-primary transition-colors transform hover:scale-110">
                                <BsLinkedin size={20} />
                            </a>
                            <a href="https://github.com/nameer1811" target="_blank" rel="noreferrer" className="text-light hover:text-primary transition-colors transform hover:scale-110">
                                <BsGithub size={20} />
                            </a>
                            <a href="mailto:nameer.fahad@gmail.com" target="_blank" rel="noreferrer" className="text-light hover:text-primary transition-colors transform hover:scale-110">
                                <MdEmail size={22} />
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Nav;
