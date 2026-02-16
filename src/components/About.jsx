import Me from "../assets/Me-2.jpg";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";

const About = () => {
    const tech_stack = [
        "Python",
        "SQL",
        "Spark",
        "Keras",
        "Rust",
        "dbt",
        "LangChain",
        "Terraform",
        "R",
        "Java",
    ];

    return (
        <section id="about" className="pt-20 pb-20 min-h-screen flex flex-col justify-center">
            <div className="flex items-center justify-center gap-4 mb-12 w-full">
                <div className="h-[1px] bg-gradient-to-r from-transparent to-white/20 w-1/6 md:w-1/4"></div>
                <h2 className="text-3xl font-bold text-light font-mono">about_me</h2>
                <div className="h-[1px] bg-gradient-to-r from-white/20 to-transparent w-1/6 md:w-1/4"></div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    className="aspect-square rounded-2xl bg-gradient-to-tr from-transparent via-primary to-transparent p-2 md:w-[50%] md:ml-auto md:mr-12"
                >
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-bg-variant">
                        <img src={Me} alt="About Me" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >

                    <p className="text-light leading-relaxed">
                        I am currently a <b>Data Engineer</b> at <a href="https://www.mayo.edu" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">Mayo Clinic</a>, where I help build data products and models that make Mayo Clinic the number 1 hospital in the US. I am currently a Certified <a href="https://www.credly.com/badges/febda179-bc87-4825-9bef-74de3b4fc0b4/linked_in_profile" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">Google Professional Data Engineer</a>. I am also doing a part-time <b>Master's of Science</b> in <b>Computational Data Analytics</b> at <a href="https://www.gatech.edu/" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">Georgia Institute of Technology</a>.
                    </p>

                    <div className="mt-4">
                        <p className="text-light mb-4">Tools and technologies I work with:</p>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-x-8 gap-y-1 w-fit"
                        >
                            {tech_stack.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-light/80 font-mono">
                                    <BiChevronRight className="text-primary" /> {item}
                                </div>
                            ))}
                        </motion.div>
                    </div>


                    <div className="mt-6">
                        <p className="text-light leading-relaxed">
                            Outside of work, I love watching and discussing soccer (YNWA??), traveling, and competing in first-person shooter games. You can also find me grilling the perfect meat or tending to my garden. And every once in a while, I'm likely thinking about my next startup idea.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
