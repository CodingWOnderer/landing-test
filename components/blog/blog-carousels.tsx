"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "../ui/badge";
import { formatDate } from "@/utils";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { WithErrorImage } from "../common/fallback-image";
import { motion } from "framer-motion";

const BlogData = [
    {
        img: "https://images.pexels.com/photos/26382481/pexels-photo-26382481/free-photo-of-rocks-on-mountains-peaks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "NATURE",
        date: "2024-08-01",
        title: "Exploring the Majestic Peaks",
        owner: "John Doe",
        profile: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        img: "https://images.pexels.com/photos/12673989/pexels-photo-12673989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "FOOD",
        date: "2024-07-15",
        title: "A Taste of Authentic Italian Cuisine",
        owner: "Jane Smith",
        profile: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        img: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "BUSINESS",
        date: "2024-06-20",
        title: "Strategies for Sustainable Business Growth",
        owner: "Alex Johnson",
        profile: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        img: "https://images.pexels.com/photos/25791782/pexels-photo-25791782/free-photo-of-seascape-during-a-storm.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "SWIMMING",
        date: "2024-05-10",
        title: "Mastering the Waves: Advanced Swimming Techniques",
        owner: "Emily Brown",
        profile: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        img: "https://images.pexels.com/photos/9543414/pexels-photo-9543414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "POLLUTION",
        date: "2024-04-05",
        title: "Addressing Pollution: Solutions for a Cleaner Planet",
        owner: "Michael Davis",
        profile: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

const CustomCarouselItem = motion(CarouselItem);
const CustomBadge = motion(Badge);
export function BlogCarousel() {
    return (
        <motion.div className=" max-w-7xl  mx-auto">
            <Carousel
                opts={{ loop: true, align: "center" }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                        stopOnMouseEnter: false,
                        stopOnFocusIn: false,
                        stopOnInteraction: false,
                        stopOnLastSnap: false,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent className="">
                    {BlogData.map((item, index) => (
                        <CustomCarouselItem initial={{
                            opacity: 0,
                            y: 20,
                        }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2 * index,
                                    ease: "easeOut",
                                    once: true,
                                },
                            }} key={index} className="md:basis-1/2  lg:basis-[70%]">
                            <Card className=" dark rounded-none md:rounded-xl overflow-clip border-none p-0">
                                <CardContent className="flex aspect-video relative  items-center justify-center p-0">
                                    <WithErrorImage
                                        src={item.img}
                                        alt={item.title}
                                        height={500}
                                        width={500}
                                        className=" object-fill w-full h-full" errorText={item.title} />
                                    <div className="absolute inset-0 p-4 pb-8 bg-carouselcard flex flex-col justify-end">
                                        <motion.div transition={{ staggerChildren: 0.1 }} className="  flex space-y-3 justify-center flex-col items-center  ">
                                            <CustomBadge variant={"secondary"} initial={{ y: -20 }} animate={{ y: 0 }} className=" text-[8px] font-bold rounded">{item.category}</CustomBadge>

                                            <motion.h2 initial={{ y: 20 }} animate={{ y: 0 }} className=" text-center text-lg md:text-xl max-w-md font-bold tracking-tight leading-tight">{item.title}</motion.h2>

                                            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center font-thin text-sm space-x-2">
                                                <span className=" whitespace-nowrap"> {formatDate(new Date(item.date))}</span>
                                                <span>-</span>
                                                <Avatar className=" h-5 w-5">
                                                    <AvatarImage src={item.profile} alt={item.owner} />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <span className=" uppercase">{item.owner}</span>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CustomCarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </motion.div>
    );
}
