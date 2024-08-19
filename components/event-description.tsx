import { FC } from "react";
import { motion } from "framer-motion";

export const DescriptionSection: FC = () => {
    return (
        <motion.section
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="bg-background py-4 md:py-8 lg:py-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="lg:w-2/3 lg:pr-4"
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl text-foreground font-semibold mb-2">
                            Description:
                        </h3>
                        <p className="text-muted-foreground text-justify md:text-start mb-4">
                            Lorem ipsum dolor sit amet consectetur. Justo sed sed ullamcorper
                            risus facilisis. Pharetra accumsan adipiscing pellentesque posuere
                            diam tempor. Tellus ridiculus mollis amet morbi. Amet ullamcorper
                            aliquam id nulla sit aliquam mi. Facilisis nulla nisl id nec
                            turpis lacus. Donec maecenas velit condimentum etiam elit
                            imperdiet donec sed tincidunt. Volutpat vitae sit diam est
                            aliquet. Eget semper eu volutpat feugiat purus elit. Sagittis diam
                            pellentesque malesuada risus diam. Varius placerat molestie elit
                            sit maecenas. Tincidunt aliquam id dis eu mi accumsan nam quis in.
                        </p>
                        <p className="text-gray-400">
                            Cras bibendum nibh convallis ultricies consequat placerat lorem.
                            Ac porttitor amet fringilla egestas ac ac. Risus vestibulum cursus
                            quis vitae cras amet nisi. Egestas blandit malesuada sodales odio
                            fermentum et.
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex-1 w-full lg:w-1/3 lg:pl-4"
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl mt-6 lg:mt-0 text-foreground font-bold mb-2">
                            Location
                        </h3>
                        <div className="relative h-64 mt-6 lg:mt-0 w-full rounded-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.07311402145!2d76.81306344269037!3d28.647279935146193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d5c5b555555%3A0x5555555555555555!2sHauz%20Khas%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1596616160161!5m2!1sen!2sin"
                                className="absolute inset-0 w-full h-full border-0"
                                allowFullScreen
                                aria-hidden="false"
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};
