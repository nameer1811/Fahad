import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const data = [
    {
        id: 1,
        title: "Petty Theft in LA",
        github: "https://github.com/nameer1811/petty_theft_in_LA",
        description: "Data visualization and analysis of petty theft incidents in Los Angeles to identify hotspots and trends.",
    },
    {
        id: 2,
        title: "Student Debt Analysis",
        github: "https://github.com/nameer1811/student_debt_analysis",
        description: "A comprehensive analysis of student debt trends using R, exploring economic impact and demographics.",
    },
    {
        id: 3,
        title: "Hybrid Neural Network for Image Super Resolution",
        github: "https://github.com/nameer1811/first-deep-learning-research-project",
        description: "Generating High Resolution Image Using Hybrid Neural Network of DBSRCNN and DDSRCNN",
    },
    {
        id: 4,
        title: "Contiguous Memory Allocation",
        github: "https://github.com/nameer1811/python-contiguous-memory-allocation",
        description: "Simulation of memory allocation strategies like First Fit, Best Fit, and Worst Fit.",
    },
    {
        id: 5,
        title: "Multithreaded Matrix Multiplication",
        github: "https://github.com/nameer1811/python-multithreaded-matrix-multiplication",
        description: "High-performance matrix multiplication leveraging multithreading for parallel processing.",
    },
    {
        id: 6,
        title: "CPU Scheduler",
        github: "https://github.com/nameer1811/python-cpu-scheduler",
        description: "Implementation of CPU scheduling algorithms including FCFS, SJF, and Round Robin.",
    },
    {
        id: 7,
        title: "Simulation Project",
        github: "https://github.com/nameer1811/simulation",
        description: "A discrete-event simulation project modeling real-world systems like 911 dispatch and food contests.",
    },
    {
        id: 8,
        title: "Lan Bros",
        github: "https://github.com/nameer1811/lan-bros",
        description: "A multiplayer LAN game inspired by Super Mario Bros.",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="pt-20 pb-20 min-h-screen flex flex-col justify-center">
            <div className="flex items-center justify-center gap-4 mb-12 w-full">
                <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 w-1/6 md:w-1/4"></div>
                <h2 className="text-3xl font-bold text-light font-mono">projects</h2>
                <div className="h-[1px] bg-gradient-to-r from-white/20 to-transparent w-1/6 md:w-1/4"></div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map(({ id, title, github, description }) => {
                    return (
                        <motion.article
                            key={id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: id * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="mb-4 flex-grow">
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">{title}</h3>
                                <p className="text-light/80 text-sm line-clamp-3">{description}</p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-white/5">
                                <a
                                    href={github}
                                    className="flex items-center justify-center gap-2 px-4 py-2 text-sm border border-primary/50 text-primary rounded-xl hover:bg-primary hover:text-bg transition-colors w-full"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AiOutlineGithub size={18} /> Github
                                </a>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
