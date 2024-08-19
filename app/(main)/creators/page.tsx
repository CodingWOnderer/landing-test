import { NewsLetter } from "@/components/newsletter";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CapconsDetails, CreatorsFeatures, TopFeatures } from "@/lib/mocks";
import { GetConvertedUrl } from "@/utils/Images";
import Image from "next/image";
import React from "react";



const CreatorsPage = () => {
    return (
        <div className="dark min-h-screen grid">
            <section className={`relative pt-14 w-full bg-[url('https://assets.capcons.com/images/bgCreators.webp')] bg-cover bg-center bg-no-repeat`}>
                <div className="relative  mx-auto container px-4 py-32 sm:px-6 lg:flex lg:h-[90vh] lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left">
                        <p className="mt-4 max-w-lg sm:text-start font-bold text-[#020916] sm:text-xl/relaxed">
                            From Content Creators
                        </p>
                        <h1 className="md:text-4xl text-3xl text-center lg:text-justify lg:leading-[62px] leading-tight max-w-lg font-semibold lg:text-5xl text-black">
                            Build an Exclusive Space For Your Tribe to Come Together and Network
                        </h1>

                        <div className="mt-8 flex flex-wrap gap-4 text-center ">
                            <Button size={"lg"} className="sm:w-[240px] w-full text-[#f4f4f4]">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"grid px-4 mt-14 container"}>
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="font-bold text-2xl md:text-3xl mb-1 text-[#F4F4F4] ">
                        Are you struggling?
                    </h2>
                    <p className="font-normal text-sm md:text-base text-[#F4F4F4]  text-opacity-70">
                        Ditch unreliable algorithms and reach your audience with Magic
                        Reach, Reach more people and engage your audience like never before.
                    </p>
                </div>
                <div className="grid  grid-cols-12 gap-4 p-4">
                    {CreatorsFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className=" rounded-2xl bg-capcons-grad p-[1px] col-span-12 shadow-lg  sm:col-span-6 md:col-span-3 "
                        >
                            <Card className="  rounded-2xl h-full">
                                <CardHeader>
                                    <CardTitle>
                                        <div className="relative -translate-x-1.5 h-12 w-12 sm:h-14 sm:w-14">
                                            <Image
                                                src={GetConvertedUrl(`${feature.img}`)}
                                                fill
                                                alt="creators features"
                                            />
                                        </div>
                                        <div className="pt-6">{feature.title}</div>
                                    </CardTitle>
                                    <CardDescription className=" sr-only">
                                        {feature.title}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>{feature.text}</CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" container mt-16 px-4">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="font-bold text-2xl md:text-3xl mb-1 text-foreground">
                        What is CapCons?
                    </h2>
                    <p className="font-normal text-sm md:text-base text-foreground/70">
                        Capcons gives creators the tools they need to build their community,
                        own their audience and build thriving businesses on top of it.
                    </p>
                </div>
                <div className="lg:grid space-y-6 lg:space-y-0 grid-cols-12 gap-4 p-4">
                    {CapconsDetails.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className=" col-span-12 sm:col-span-6 lg:col-span-4 "
                            >
                                <div className="inner-content w-full h-full overflow-hidden">
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src={GetConvertedUrl(`${feature.img}`)}
                                            className="h-full w-full"
                                            alt="img"
                                        />
                                    </div>
                                    <div className=" mt-3">
                                        <Typography
                                            as={"h3"}
                                            variant={"h3"}
                                            className=" text-foreground"
                                        >
                                            {feature.title}
                                        </Typography>
                                        <p className="scroll-m-0 font-normal font-sans text-foreground/70 mt-3">
                                            {" "}
                                            {feature.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className="mt-16 container">
                <div className="space-y-8">
                    <Typography variant={"h2"} as={"h2"} className=" text-foreground">
                        Top Features
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {TopFeatures.map((feature, index) => (
                            <Card key={index} className=" bg-secondary rounded">
                                <CardHeader>
                                    <CardTitle>
                                        <div className="flex items-center mb-4 gap-4">
                                            <div className="text-4xl mr-4">
                                                <img
                                                    src={GetConvertedUrl(`${feature.img}`)}
                                                    className="h-12 w-12 sm:h-14 sm:w-14"
                                                    alt=""
                                                />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-semibold">
                                                {feature.title}
                                            </h3>
                                        </div>
                                    </CardTitle>
                                    <CardContent className=" px-2">{feature.text}</CardContent>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <NewsLetter />
        </div>
    );
};

export default CreatorsPage;
