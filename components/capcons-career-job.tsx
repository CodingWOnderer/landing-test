"use client"
import { FC } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Typography } from "./typography";
import { WithErrorImage } from "./common/fallback-image";


export const CapconsCareerSection: FC = () => {
    return (
        <>
            <motion.section
                className="w-full pt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="container mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="flex flex-col bg-secondary rounded-2xl px-4 lg:flex-row-reverse gap-10 lg:items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="flex gap-4 flex-col flex-1"
                            initial={{ opacity: 0, translateY: -20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <Badge>Platform</Badge>
                            </div>
                            <div className="flex gap-2 flex-col">
                                <Typography as={"h2"} variant={"h2"} className="text-foreground">
                                    Work alongside those who are passionate.
                                </Typography>
                                <Typography className="text-muted-foreground">
                                    {`Our team, much like our users, defies categorization. The diverse and distinctive individuals at CapCons come from various backgrounds, but there's a shared reason we've all gathered here. We deeply care about one another, our work, and the future we're shaping — immensely so. We each contribute our best and treat each other with profound empathy. No room for mere cogs or unkindness.`}
                                </Typography>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative rounded-md w-full h-full p-4 flex-1"
                            initial={{ opacity: 0, translateY: -20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative rounded-2xl aspect-video overflow-clip">
                                <WithErrorImage
                                    fill
                                    src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="The diverse and distinctive individuals"
                                    errorText="Work alongside those who are passionate."
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section
                className="w-full pt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="container mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="flex flex-col bg-secondary rounded-2xl px-4 lg:flex-row gap-10 lg:items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="flex gap-4 flex-col flex-1"
                            initial={{ opacity: 0, translateY: -20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <Badge>Platform</Badge>
                            </div>
                            <div className="flex gap-2 flex-col">
                                <Typography as={"h2"} variant={"h2"} className="text-foreground">
                                    Become part of a community where everyone feels they belong.
                                </Typography>
                                <Typography className="text-muted-foreground">
                                    {`Envision a workplace where everyone feels they truly belong. At Discord, this vision isn't just a dream; it's our ongoing mission. We are dedicated to creating an inclusive, diverse, and welcoming environment that accurately reflects the world we live, play, and work in. We firmly believe that embracing diversity leads to more innovative ideas, a higher quality product, a more supportive and engaging work atmosphere, and ultimately, a more successful company.`}
                                </Typography>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative rounded-md w-full h-full p-4 flex-1"
                            initial={{ opacity: 0, translateY: -20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative rounded-2xl aspect-video overflow-clip">
                                <WithErrorImage
                                    fill
                                    src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="The diverse and distinctive individuals"
                                    errorText="Work alongside those who are passionate."
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
};
