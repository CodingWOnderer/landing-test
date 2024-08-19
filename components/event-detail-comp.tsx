import { FC } from "react";
import { Button } from "@/components/ui/button";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { Typography } from "./typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface EventDetailsProps {
    title: string;
    date: string;
    location: string;
    time: string;
    price: string;
    circleName: string;
}

export const EventDetailsComp: FC<EventDetailsProps> = ({
    title,
    date,
    location,
    time,
    price,
    circleName,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
                ease: "easeIn",
                duration: 0.5,
                staggerChildren: 0.1,
            }}
            viewport={{ once: true }}
            className="flex justify-between flex-col lg:flex-row items-center py-4 text-white"
        >
            <motion.div
                initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <Typography as={"h3"} variant={"h3"} className="font-medium">
                        {title}
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center mt-2 space-x-4"
                >
                    <div className="flex whitespace-nowrap items-center space-x-1">
                        <IoMdCalendar className="h-5 w-5" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <MdOutlineLocationOn className="h-5 w-5" />
                        <span>{location}</span>
                    </div>
                    <div className="lg:flex hidden  items-center space-x-1">
                        <CiClock1 className="h-5 w-5" />
                        <span>{time}</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex mt-3 space-x-2 items-center"
                >
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <Typography>{circleName}</Typography>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, translateY: -10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ ease: "easeIn", duration: 0.5 }}
                viewport={{ once: true }}
                className="flex lg:flex-col w-full lg:w-auto gap-x-2 lg:gap-x-0 flex-row-reverse items-end"
            >
                <span className="text-3xl  whitespace-nowrap">₹ {price}</span>
                <Button size={"lg"} className="mt-4 w-full md:w-auto">
                    Book
                </Button>
            </motion.div>
        </motion.div>
    );
};
