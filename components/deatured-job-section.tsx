"use client"
import { FC } from "react";
import { motion } from "framer-motion";
import { Typography } from "./typography";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Adjust import as needed

export const FeaturedJobSection: FC = () => {
    return (
        <motion.section
            className="w-full pt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="container"
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
                    <Typography as={"h3"} variant={"h3"} className="text-foreground">
                        Featured Job
                    </Typography>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-2 md:grid-cols-3 mt-6 gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    {[1, 2, 3].map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-accent">
                                <CardHeader>
                                    <CardTitle>
                                        {index === 0
                                            ? "Front End Developer"
                                            : index === 1
                                                ? "Front End Developer"
                                                : "UX/UI Designer"}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Typography>CapCons Analytics Private Limited</Typography>
                                    <span className="text-xs text-muted-foreground">
                                        Karol Bagh
                                    </span>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};
