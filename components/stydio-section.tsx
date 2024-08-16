"use client";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "./ui/card";
import { WithErrorImage } from "./common/fallback-image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const StudioArr = [
    {
        image: "/studio/livestream.png",
        title: "Livestream",
        description:
            "Empower Connections Through Livestreaming: Engage your audience in real-time and foster dynamic community growth.",
    },
    {
        image: "/studio/courses.png",
        title: "Courses",
        description:
            "Build Stronger Networks with Online Learning: Develop courses that connect, educate, and elevate your community to new heights",
    },
    {
        image: "/studio/ecommerce.png",
        title: "E-commerce",
        description:
            "Empower Connections Through Livestreaming: Engage your audience in real-time and foster dynamic community growth.",
    },
    {
        image: "/studio/events.png",
        title: "Events",
        description:
            "Bring Your Vision to Life: Host events that inspire action and build a vibrant community.",
    },
    {
        image: "/studio/analytics.png",
        title: "Anylytics",
        description:
            "Transform Complex Data into Clear Knowledge: Gain deep insights into user behavior to fuel innovation and growth",
    },
    {
        image: "/studio/teammanagement.png",
        title: "Team Management",
        description:
            "effective team management strategies to enhance productivity, streamline communication, and empower your team to achieve collective goals.",
    },
];

const MotionCarouselItem = motion(CarouselItem);

function StudioSection() {
    return (
        <div className="py-16 px-4 bg-studiogradient">
            <div className=" max-w-7xl  mx-auto">
                <h2 className=" text-primary text-2xl  ">
                    Our Studio: Everything You Need To Launch And Grow
                </h2>
                <div className="flex justify-center mt-8 items-center">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2000,
                                stopOnInteraction: false,
                                stopOnMouseEnter: false,
                                stopOnFocusIn: false,
                            }),
                        ]}
                        className="w-full max-w-7xl"
                    >
                        <CarouselContent>
                            {StudioArr.map((item, index) => (
                                <MotionCarouselItem
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
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="p-1 h-full">
                                        <Card className="h-full  bg-white border-none ">
                                            <CardTitle className="rounded-md cursor-pointer   relative overflow-clip">
                                                <WithErrorImage
                                                    src={item.image}
                                                    height={500}
                                                    width={700}
                                                    priority
                                                    alt={"capcons"}
                                                    errorText={"capcons"}
                                                />
                                            </CardTitle>
                                            <CardContent className="flex   dark flex-col justify-center p-6">
                                                <h2 className=" text-primary font-medium">
                                                    {item.title}
                                                </h2>
                                                <p className=" text-muted-foreground text-sm mt-2">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </MotionCarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default StudioSection;
