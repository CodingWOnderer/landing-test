import { Typography } from "./typography";
import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { WithErrorImage } from "./common/fallback-image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

const CustomCard = motion(Card);

export function EventsCard() {
    return (
        <CustomCard
            initial={{ opacity: 0, translateY: -40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ ease: "easeIn", delay: 0.2, duration: 0.5, }}
            viewport={{ once: true }}
            className="flex bg-secondary animate-fade-in border-none flex-col min-w-[200px] lg:flex-row  mt-5   mx-auto overflow-clip "
        >
            <CardHeader className="border overflow-clip p-0">
                <div className="relative lg:w-[300px] flex justify-center items-center  h-full aspect-[16/10]">
                    <WithErrorImage
                        src={
                            "https://images.pexels.com/photos/9470486/pexels-photo-9470486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                        fill
                        alt={"Comedy Event"}
                        errorText={"Comedy Event"}
                        className=" h-full w-full object-cover"
                    />
                </div>
                <CardTitle className=" sr-only">Event</CardTitle>
                <CardDescription className=" sr-only">
                    Event Discription
                </CardDescription>
            </CardHeader>
            <CardContent className="lg:max-w-2xl flex flex-col px-4 justify-around pt-6">
                <Badge
                    variant={"default"}
                    className="rounded bg-[#27354E] hover:bg-[#27354E]/70 max-w-fit text-[10px]"
                >
                    Comedy
                </Badge>
                <Typography as={"h3"} variant={"h3"} className="mt-6  break-words">
                    Comedy night with Anubhav Singh Bassi
                </Typography>
                <Typography className=" [&:not(:first-child)]:mt-3 text-foreground/80 line-clamp-3  leading-normal font-normal">
                    Description: Lorem ipsum dolor sit amet consectetur. Condimentum
                    faucibus libero tortor est id sit convallis quam vitae. Non pharetra
                    enim quis pellentesque commodo parturient.
                </Typography>

                <div className="flex text-sm mt-3 items-center justify-between">
                    <div className="flex space-x-1 -translate-x-1 items-center">
                        {" "}
                        <MdOutlineLocationOn />
                        <span>Delhi, </span>
                        <span>India</span>
                    </div>

                    <div className="flex space-x-1 items-center">
                        <CiClock2 />
                        <span>00:00</span>
                    </div>
                </div>
            </CardContent>
            <div className=" py-3">
                <Separator orientation={"vertical"} />
            </div>
            <CardFooter className=" w-full px-3 lg:p-6 flex-row-reverse  lg:max-w-xs flex gap-x-4 justify-center lg:gap-x-0 lg:flex-col lg:justify-center lg:items-center">
                <div className="whitespace-nowrap flex justify-center items-center text-2xl  md:text-4xl lg:text-5xl  ">
                    ₹ 600.00
                </div>
                <Button
                    variant={"outline"}
                    size={"lg"}
                    className=" lg:max-w-[180px] w-full lg:mt-3 border-primary text-primary"
                >
                    Book
                </Button>
            </CardFooter>
        </CustomCard>
    );
}
