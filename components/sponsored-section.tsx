import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typography } from "./typography";

export const SponsoredBySection: FC = () => {
    return (
        <motion.section
            className="container mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Typography variant={"h3"} className="text-foreground">
                    Sponsored By
                </Typography>
            </motion.div>

            <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                viewport={{ once: true }}
            >
                <ul className="flex flex-wrap border-white items-center border rounded-md py-8 gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
                    <motion.li
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            alt="ASM"
                            src="/asm.svg"
                            className="h-10 w-32 px-2"
                            width={32}
                            height={10}
                        />
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            alt="Woodland"
                            src="/woodland.svg"
                            className="h-10 w-32 px-2"
                            width={32}
                            height={10}
                        />
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, translateY: -20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            alt="Woods"
                            src="/woodsshield.svg"
                            className="h-10 w-32 px-2"
                            width={32}
                            height={10}
                        />
                    </motion.li>
                </ul>
            </motion.div>
        </motion.section>
    );
};
