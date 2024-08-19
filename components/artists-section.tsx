import { FC } from "react";
import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "./typography";

const ArtistsData = [
    { name: "Lecrae", position: "Hip-Hop Artist" },
    { name: "Stevie Wonder", position: "Singer-Songwriter" },
    { name: "Michael Jackson", position: "Pop Artist" },
    { name: "Kanye West", position: "Rapper" },
    { name: "Queen", position: "Rock Band" },
    { name: "Bob Marley", position: "Reggae Artist" },
    { name: "Whitney Houston", position: "Singer" },
    { name: "Prince", position: "Musician" },
    { name: "Friedemann Wachsmuth", position: "Community Member" },
    { name: "Luke Ivi", position: "Community Contributor" },
];

export const ArtistsSection: FC = () => {
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
                    Artists
                </Typography>
            </motion.div>

            <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <ScrollArea>
                    <motion.ul
                        className="flex items-center rounded-md gap-x-10 md:gap-x-16 [&_path]:fill-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {ArtistsData.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, translateY: -20 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex mt-3 space-x-2 items-center">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <Typography
                                            as={"h4"}
                                            className="text-foreground whitespace-nowrap text-sm"
                                        >
                                            {item.name}
                                        </Typography>
                                        <p className="text-muted-foreground whitespace-nowrap text-xs">
                                            {item.position}
                                        </p>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </motion.div>
        </motion.section>
    );
};
