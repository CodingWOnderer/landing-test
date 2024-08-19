"use client"
import { FC } from "react";
import { motion } from "framer-motion";
import { Typography } from "./typography";

export const JoinCapConsSection: FC = () => {
    return (
        <motion.section
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="mt-16 container px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                viewport={{ once: true }}
            >
                <motion.div
                    initial={{ opacity: 0, translateY: -20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Typography as={"h2"} variant={"h2"} className="text-foreground">
                        Why to join CapCons
                    </Typography>
                    <Typography className="text-muted-foreground">
                        {`CapCons is dedicated to building an inclusive world where no one
                        feels like an outsider. We aim to make genuine human connection
                        accessible through a simple click, text chat, or voice call,
                        ensuring that everyone can find their place and feel a sense of
                        belonging. This journey is not without its challenges—creating a
                        space that is welcoming to all is a complex and ongoing effort.
                        However, the rewards are immense. Knowing that we have the
                        opportunity to positively impact millions of people around the
                        globe, fostering real connections and building a supportive
                        community, is incredibly fulfilling. Our mission is to make the
                        world a smaller, more connected place, where every individual feels
                        valued and included.`}
                    </Typography>
                </motion.div>

            </motion.div>

        </motion.section>
    );
};
