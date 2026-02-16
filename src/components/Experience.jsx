import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronRight } from "react-icons/bi";

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const experienceItems = [
        {
            company: "Mayo Clinic",
            url: "https://www.mayo.edu",
            positions: [
                {
                    role: "Data Engineer",
                    date: "SEP 2024 - PRESENT",
                    desc: [
                        "Led a team of 15 engineers and offshore contractors to successfully migrate legacy databases to BigQuery using Google Datastream and Terraform, saving the organization $1.5 million annually.",
                        "Architected and deployed scalable ETL pipelines using Google Dataflow and automated complex job scheduling with Cloud Composer, reducing manual oversight by 85%.",
                        "Integrated the Cloud Observability Suite and Google Dataplex to automate data quality checks and proactive alerting, improving system uptime to 99.9% and ensuring strict data governance across projects.",
                        "Organized and co-led a company-wide Datathon that engaged over 100 employees, fostering cross-functional collaboration and showcasing innovative data solutions.",
                    ],
                },
                {
                    role: "Data Analyst",
                    date: "JUN 2023 - SEP 2024",
                    desc: [
                        "Improved data quality by 25% and increased reporting efficiency by 40% by deploying interactive web pages in Posit Connect, eliminating static Word documents.",
                        "Contributed to the publication of 2 papers in peer-reviewed journals by conducting advanced statistical analyses (survival, linear, and logistic regression).",
                        "Accelerated data analysis workflows by 20% and built data pipelines for machine learning and image recognition projects using Python, R (targets package), and Google Cloud Platform (GCP).",
                        "Developed and implemented AI tools in Digital Innovation Lab, fostering clear communication with a diverse team to drive project success.",
                    ],
                },
            ],
        },
        {
            company: "StakeDoc",
            positions: [
                {
                    role: "Co-Founder & AI Backend Lead",
                    date: "NOV 2025 - PRESENT",
                    desc: [
                        "Co-founded a B2B SaaS platform designed to streamline product management workflows by automating meeting summaries, PRD generation, and actionable insights.",
                        "Architected a sophisticated AI engine leveraging LangChain and LangGraph to orchestrate complex reasoning chains for unstructured data processing.",
                        "Designed and implemented a scalable PostgreSQL database schema to handle intricate relationships between meetings, notes, and project artifacts, ensuring data integrity.",
                        "Deployed and managed the entire backend infrastructure on Google Cloud Platform (GCP), utilizing serverless technologies for optimal performance and cost-efficiency.",
                    ],
                },
            ],
        },
        {
            company: "CenteredData",
            url: "https://centereddata.com",
            positions: [
                {
                    role: "Principal Engineer",
                    date: "MAY 2025 - PRESENT",
                    desc: [
                        "Translate product vision and business goals from SMB and enterprise clients into clear technical requirements, reducing ambiguity and accelerating development cycles significantly.",
                        "Lead and coordinate distributed development teams across multiple vendors, improving delivery accuracy and reducing rework through early risk identification, requirement alignment, and continuous technical oversight.",
                        "Drive end-to-end product execution from ideation to launch by implementing structured backlog management and prioritization frameworks that increase team efficiency and shorten time to go-live.",
                        "Conduct rigorous validation of contractor and employee outputs, enforce quality standards, and maintain transparent reporting on progress, blockers, and dependencies. These efforts have helped clients increase efficiency and save capital by avoiding delays, scope creep, and misallocated engineering spend.",
                        "Provide deep technical expertise in software architecture, backend development, cloud infrastructure, and system design, enabling faster solutioning, improved scalability, and reduction of technical debt across client projects.",
                    ],
                },
            ],
        },
        {
            company: "Spave",
            url: "https://www.spave.io",
            positions: [
                {
                    role: "Data Analytics Engineer Intern",
                    date: "JUN 2022 - MAY 2023",
                    desc: [
                        "Developed custom Python scripts and queries for a MongoDB database, accelerating business analysts' workflows by 40%.",
                        "Engineered and deployed an automated Python-based ETL pipeline on AWS to retrieve, clean, and flatten data from diverse sources, including S3 and MongoDB, increasing analyst efficiency by 70%.",
                        "Created an automated process to proactively detect and notify stakeholders of account expiry, improving operational reliability and ensuring a seamless user experience.",
                    ],
                },
            ],
        },
        {
            company: "Caut!on Tech",
            positions: [
                {
                    role: "Co-Founder & Ops Lead",
                    date: "JUL 2021 - FEB 2023",
                    desc: [
                        "Architected and developed a mobile application using React Native and PostgreSQL, successfully deploying it to both the Apple App Store and Google Play Store.",
                        "Directed product analytics and oversaw key business operations, including financial strategy and growth, alongside two other co-founders.",
                        "Navigated the company from inception to a successful exit in February 2023.",
                    ],
                },
            ],
        },
        {
            company: "Watlow",
            url: "https://www.watlow.com",
            positions: [
                {
                    role: "Software Tester",
                    contract: "Contract via Winona State University",
                    date: "NOV 2021 - DEC 2022",
                    desc: [
                        "Designed and executed automated tests using C# and Telerik Test Studio to validate software behavior.",
                        "Improved the efficiency of the development cycle by identifying bugs early through rigorous testing protocols.",
                        "Performed manual and smoke testing to ensure high software quality and reliability for IoT solutions.",
                    ],
                },
            ],
        },
        {
            company: "Winona State University",
            url: "https://www.winona.edu",
            positions: [
                {
                    role: "Data Analyst",
                    date: "MAY 2021 - APR 2022",
                    desc: [
                        "Collaborated with cross-functional research teams at Winona State and Arizona State University to drive data analysis for a high-impact astrophysics project.",
                        "Engineered deep learning models using Python (NumPy, SciPy, ImageAI) to detect Radio Frequency Interference in 5-dimensional astronomical image data, significantly improving signal clarity.",
                        "Established robust CI/CD pipelines via GitHub Actions and instituted comprehensive PyTest suites to ensure the reliability of control software for the Long Wavelength Array.",
                    ],
                },
            ],
        },
        {
            company: "Digi International",
            url: "https://www.digi.com",
            positions: [
                {
                    role: "Software Developer",
                    contract: "Contract via Winona State University",
                    date: "NOV 2020 - NOV 2021",
                    desc: [
                        "Developed automated test scripts for web applications using Java, Selenium, JUnit, and Regular Expressions.",
                        "Managed complex data environments using Docker and Cassandra to support robust testing scenarios.",
                        "Collaborated in an Agile environment to track bugs, resolve issues, and maintain high code quality through rigorous manual and unit testing.",
                    ],
                },
            ],
        },
    ];

    return (
        <section id="experience" className="pt-20 pb-20 min-h-screen flex flex-col justify-center">
            <div className="flex items-center justify-center gap-4 mb-12 w-full">
                <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 w-1/6 md:w-1/4"></div>
                <h2 className="text-3xl font-bold text-light font-mono">experience</h2>
                <div className="h-[1px] bg-gradient-to-r from-white/20 to-transparent w-1/6 md:w-1/4"></div>
            </div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
                {/* Tabs */}
                <div className="flex md:flex-col overflow-x-auto md:min-w-[200px] border-b md:border-b-0 md:border-l border-primary/20">
                    {experienceItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-4 text-left whitespace-nowrap transition-all duration-300 relative hover:bg-white/5 ${activeTab === index
                                ? "text-primary bg-white/5"
                                : "text-light hover:text-primary"
                                }`}
                        >
                            {activeTab === index && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 w-full h-[2px] md:w-[2px] md:h-full md:top-0 bg-primary"
                                />
                            )}
                            {item.company}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {experienceItems[activeTab].positions.map((pos, index) => (
                                <div key={index} className="mb-8 last:mb-0">
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {pos.role} <span className="text-primary">@ {
                                            experienceItems[activeTab].url ? (
                                                <a href={experienceItems[activeTab].url} target="_blank" rel="noreferrer" className="hover:underline">
                                                    {experienceItems[activeTab].company}
                                                </a>
                                            ) : (
                                                experienceItems[activeTab].company
                                            )
                                        }</span>
                                    </h3>
                                    <p className="text-light text-sm mb-4">
                                        {pos.date}
                                        {pos.contract && (
                                            <span className="block text-primary/70 text-xs mt-1 italic">
                                                {pos.contract}
                                            </span>
                                        )}
                                    </p>

                                    <ul className="flex flex-col gap-3">
                                        {pos.desc.map((point, i) => (
                                            <li key={i} className="flex gap-3 text-light items-start">
                                                <BiChevronRight className="text-primary mt-1 min-w-[20px]" />
                                                <p className="text-sm leading-relaxed">{point}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Experience;
