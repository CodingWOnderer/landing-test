"use client";
import Image from "next/image";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const AppSection = (props: Props) => {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";
    const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";

    return (
        <div className="px-4">
            <div className="relative max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-4 w-full">
                    <div className=" col-span-3">
                        <Image
                            src={"/footer-mockup.png"}
                            width={800}
                            height={700}
                            className=" select-none pointer-events-none"
                            alt="mock"
                        />
                    </div>
                    <div className="col-span-1"></div>
                </div>
                <div className="grid lg:absolute lg:inset-0 lg:grid-cols-5 w-full">
                    <div className=" col-span-2 col-start-4 flex justify-center flex-col ">
                        <Card className=" rounded-none  flex justify-evenly flex-col border-none">
                            <CardHeader>
                                <CardTitle className="font-bold">Join the Conversation, Anytime, Anywhere.</CardTitle>
                                <CardDescription className=" text-white/80 ">
                                    {`Don't miss out on the latest updates, trends, and
                                    conversations. Download our app today to connect with friends,
                                    explore new communities, and share your stories, all from the
                                    palm of your hand.`}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="sr-only">
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter className="mt-12">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="text-sm text-muted-foreground dark">
                                            Download the App
                                        </div>
                                        <div className="flex space-x-2 md:space-x-2  flex-row">
                                            <Link
                                                href={"#"}
                                                className="flex border rounded-md bg-black justify-center items-center w-fit px-2 md:px-3 py-2 space-x-2 border-white"
                                            >
                                                <div>
                                                    <Image
                                                        src={"Google-Play.svg"}
                                                        height={100}
                                                        width={25}
                                                        alt="loading.."
                                                    />
                                                </div>
                                                <div className="flex flex-col tracking-tight leading-[0.9rem]">
                                                    <small className="text-[10px] whitespace-nowrap">GET IT ON</small>
                                                    <strong className=" whitespace-nowrap">Google Play</strong>
                                                </div>
                                            </Link>
                                            <Link
                                                href={"#"}
                                                className="flex border rounded-md bg-black justify-center items-center w-fit px-2 md:px-3 py-2 space-x-2 border-white"
                                            >
                                                <div>
                                                    <Image
                                                        src={"Apple.svg"}
                                                        height={100}
                                                        width={25}
                                                        className="invert"
                                                        alt="loading.."
                                                    />
                                                </div>
                                                <div className="flex flex-col tracking-tight leading-[0.9rem]">
                                                    <small className="text-[10px] whitespace-nowrap">Download on the</small>
                                                    <strong className=" whitespace-nowrap">App Store</strong>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                    <Button size={"lg"}>Get Started</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSection;
