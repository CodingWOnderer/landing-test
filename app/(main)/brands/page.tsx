import ClientSection from "@/components/client-section";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { blogData, BrandsFeatures } from "@/lib/mocks";
import { NewsLetter } from "@/components/newsletter";
import { TopFeaturesSection } from "@/components/top-features";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { WithErrorImage } from "@/components/common/fallback-image";
import LatestInsightSection from "@/components/latest-insight-section";

const BrandsPage = () => {
    return (
        <div className="dark">
            <section
                className={`relative mt-14 bg-[url(/penpencil.png)] w-full bg-no-repeat bg-center bg-cover `}
            >
                <div className=" space-y-5 max-w-4xl mx-auto text-center px-4 py-24 sm:px-6 lg:px-8 flex flex-col justify-center lg:h-[85vh] items-center">
                    <h2 className="text-4xl text-[#f4f4f4] font-extrabold mx-auto md:text-5xl">
                        Make{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#1693e0]">
                            better relationships
                        </span>{" "}
                        with your customers
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#f4f4f4]/70">
                        Streamline your customer experience with an all-in-one community
                        engagement platform. Say goodbye to the hassle of multiple tools.
                    </p>
                    <Button className="text-white">Get Started</Button>
                </div>
                <div className=" h-28 lg:h-52 bottom-0 left-0 right-0 absolute bg-gradient-to-t from-background  to-transparent "></div>
            </section>

            <section className=" container grid place-content-center mt-8">
                <Tabs defaultValue="discussion">
                    <TabsList className=" bg-transparent flex flex-wrap mb-8 w-full">
                        <TabsTrigger
                            value="discussion"
                            className=" data-[state=active]:text-primary text-lg"
                        >
                            Discussion
                        </TabsTrigger>
                        <TabsTrigger
                            value="ideation"
                            className=" data-[state=active]:text-primary text-lg"
                        >
                            Ideation
                        </TabsTrigger>
                        <TabsTrigger
                            value="q&a"
                            className=" data-[state=active]:text-primary text-lg"
                        >
                            Q&A
                        </TabsTrigger>
                        <TabsTrigger
                            value="events"
                            className=" data-[state=active]:text-primary text-lg"
                        >
                            Events
                        </TabsTrigger>
                        <TabsTrigger
                            value="helpcenter"
                            className=" data-[state=active]:text-primary text-lg"
                        >
                            Help Center
                        </TabsTrigger>
                        <TabsTrigger
                            value="resources"
                            className=" data-[state=active]:text-primary text-lg"
                        >
                            Resources
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="discussion">
                        <div className=" relative max-h-[600px] aspect-video rounded-xl overflow-clip">
                            <WithErrorImage
                                src={
                                    "https://images.pexels.com/photos/5325712/pexels-photo-5325712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                                height={600}
                                width={1280}
                                alt="discussion"
                                errorText={"Discussion"}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="ideation">
                        <div className=" relative max-h-[600px] aspect-video rounded-xl overflow-clip">
                            <WithErrorImage
                                src={
                                    "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                                height={600}
                                width={1280}
                                alt="ideation"
                                errorText={"Ideation"}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="q&a">
                        <div className=" relative max-h-[600px] aspect-video rounded-xl overflow-clip">
                            <WithErrorImage
                                src={
                                    "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                                height={600}
                                width={1280}
                                alt="q&a"
                                errorText={"Q & A"}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="events">
                        <div className=" relative max-h-[600px] aspect-video rounded-xl overflow-clip">
                            <WithErrorImage
                                src={
                                    "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                                height={600}
                                width={1280}
                                alt="discussion"
                                errorText={"Discussion"}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="helpcenter">
                        <div className=" relative max-h-[600px] aspect-video rounded-xl overflow-clip">
                            <WithErrorImage
                                src={
                                    "https://images.pexels.com/photos/3823489/pexels-photo-3823489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                                height={600}
                                width={1280}
                                alt="Help Center"
                                errorText={"Help Center"}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="resources">
                        <div className=" relative max-h-[600px] aspect-video rounded-xl overflow-clip">
                            <WithErrorImage
                                src={
                                    "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                                height={600}
                                width={1280}
                                alt="discussion"
                                errorText={"Resources"}
                            />
                        </div>
                    </TabsContent>
                </Tabs>
            </section>

            <ClientSection />

            <section className={"grid px-4 mt-14 container"}>
                <div className="grid  grid-cols-12 gap-4 p-4">
                    {BrandsFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className=" rounded-2xl bg-capcons-grad p-[1px] col-span-12 shadow-lg  sm:col-span-6 md:col-span-3 "
                        >
                            <Card className="   rounded-2xl h-full">
                                <CardHeader>
                                    <CardTitle>
                                        <div className="relative text-6xl font-normal text-primary text-pri">
                                            {feature.title}
                                        </div>
                                        <div className="pt-6">{feature.heading}</div>
                                    </CardTitle>
                                    <CardDescription className=" sr-only">
                                        {feature.heading}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>{feature.content}</CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>

            {/**Top Features */}
            <TopFeaturesSection />

            {/**Newsletter */}
            <NewsLetter />

            {/**Success stories */}
            <LatestInsightSection
                heading="Success stories"
                subHeading="Discover how businesses like yours use Better mode to streamline their customer experience"
                blogCards={blogData}

            />
        </div>
    );
};

export default BrandsPage;
