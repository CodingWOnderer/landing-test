import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { IoIosArrowRoundForward } from "react-icons/io";
import { WithErrorImage } from "../common/fallback-image";


const HotStuff = () => {
    return (
        <div className="px-4 dark py-16">
            <div className="mx-auto max-w-6xl flex flex-col space-y-4">
                <header className="flex  md:py-4 justify-between items-center">
                    <h2 className="md:text-3xl text-xl text-foreground font-medium">
                        Hot Stuff
                    </h2>
                    <Button className="text-xs text-primary" variant="ghost" size="sm">
                        VIEW ALL POSTS
                    </Button>
                </header>
                <main className="flex flex-col  lg:flex-row w-full">
                    <div className="lg:w-2/3    h-full aspect-[788/650] ">
                        <WithErrorImage
                            src={"https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                            width={800}
                            height={900}
                            className=" object-cover h-full w-full"
                            alt={"loading"} errorText={"Straigt From The Stove"} />
                    </div>
                    <div className=" lg:shrink-0 relative lg:w-1/3 before:content-[' ']
                     before:h-10 before:rotate-45 before:w-10 before:absolute lg:before:top-1/2 lg:before:-left-[20px] before:left-1/2 before:right-1/2 before:-top-[20px] lg:before:bottom-1/2  before:bg-secondary   bg-primary">
                        <Card className="h-full w-full flex flex-col justify-evenly bg-secondary rounded-none">
                            <CardHeader>
                                <Badge className="w-fit bg-white text-gray-800 text-[10px] rounded">INTERIOR</Badge>
                                <CardTitle className=" capitalize text-3xl">the best solutions for the interior of a bedroom in an apartment</CardTitle>
                                <CardDescription className=" text-white/80">A breakdown or a flat tire can happen to anyone at any time, and what you have in your car can make the difference between getting back ...</CardDescription>
                            </CardHeader>
                            <CardContent></CardContent>
                            <CardFooter className="text-xs">
                                READ MORE <IoIosArrowRoundForward />
                            </CardFooter>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HotStuff;
