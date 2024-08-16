"use client";

import React from "react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const cardData = [
    {
        id: 1,
        bgClass: "bg-inspire1",
        description:
            "“Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem.”",
        avatarSrc: "https://github.com/shadcn.png",
        avatarFallback: "CN",
        name: "eget elementum",
        gradient: true,
    },
    {
        id: 2,
        bgClass: "bg-inspire2",
        description:
            "“Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem.”",
        avatarSrc: "https://github.com/shadcn.png",
        avatarFallback: "CN",
        name: "eget elementum",
    },
    {
        id: 3,
        bgClass: "bg-inspire3",
        description:
            "“Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem.”",
        avatarSrc: "https://github.com/shadcn.png",
        avatarFallback: "CN",
        name: "eget elementum",
    },
];

const InspirationSection = () => {
    return (
        <motion.main
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="py-24 bg-white mt-20 px-4"
        >
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-primary text-2xl"
                >
                    Your Stories, Our Inspiration.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground mt-2"
                >
                    Read testimonials from users who have experienced moments of joy,
                    growth, and connection on our platform.
                </motion.p>
            </div>
            <div className="grid mt-12 sm:grid-cols-2 gap-4 md:grid-cols-3 max-w-7xl mx-auto">
                {cardData.map(
                    ({
                        id,
                        bgClass,
                        description,
                        avatarSrc,
                        avatarFallback,
                        name,
                        gradient,
                    }, index) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2 * index,
                                    ease: "easeOut",
                                    once: true,
                                },
                            }}
                            viewport={{ once: true }}
                            key={index}
                        >
                            <Card
                                key={id}
                                className={`aspect-square  flex flex-col justify-between ${bgClass} border-neutral-200 relative`}
                            >
                                {gradient && (
                                    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-800/20  via-pink-800/10 to-transparent inset-0 absolute"></div>
                                )}
                                <CardHeader>
                                    <CardTitle className="sr-only">Card Title</CardTitle>
                                    <CardDescription className="text-justify text-[#363737]">{description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="flex justify-center">
                                    <div className="flex flex-col items-center">
                                        <Avatar className="h-20 w-20">
                                            <AvatarImage src={avatarSrc} />
                                            <AvatarFallback>{avatarFallback}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-neutral-800">{name}</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    )
                )}
            </div>
        </motion.main>
    );
};

export default InspirationSection;
