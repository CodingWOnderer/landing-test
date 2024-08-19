"use client";
import React from "react";
import { WithErrorImage } from "@/components/common/fallback-image";
import { useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { EventDetailsComp } from "@/components/event-detail-comp";
import { Typography } from "@/components/typography";
import { GetConvertedUrl } from "@/utils/Images";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2 } from "lucide-react";
import { events } from "@/lib/mocks";
import { EventsCard } from "@/components/events-card";
import { ArtistsSection } from "@/components/artists-section";
import { SponsoredBySection } from "@/components/sponsored-section";
import { DescriptionSection } from "@/components/event-description";

const EventDetailPage = ({ params }: { params: { id: string } }) => {
    const searchPramas = useSearchParams();

    return (
        <div className="dark">
            <section className=" pt-14 md:container px-4 md:px-0">
                <div className=" relative mt-4 aspect-video w-full overflow-clip md:h-[531px]  ">
                    <WithErrorImage
                        className=" h-full w-full object-cover object-bottom"
                        src={searchPramas.get("src") ?? ""}
                        width={1920}
                        height={1080}
                        alt="hero image"
                        errorText={params.id}
                    />

                    <div className=" inset-0 absolute">
                        <Badge className="rounded mt-6 ml-6 bg-[#27354E] hover:bg-[#27354E]/70 max-w-fit text-[10px]">
                            KID
                        </Badge>
                    </div>
                </div>
            </section>
            <div className=" md:container px-4 border">
                <EventDetailsComp
                    title={"Comedy night with Anubhav Singh Bassi"}
                    date={"September 10, 2024"}
                    location={"Delhi"}
                    time={"00:00"}
                    price={"600"}
                    circleName={"Comedy"}
                />
            </div>
            <ArtistsSection />
            <SponsoredBySection />

            <DescriptionSection />

            <section className=" container">
                <div className="p-4 px-8 bg-secondary mx-auto text-white rounded-lg flex flex-col lg:flex-row   items-center max-w-max space-x-8 space-y-4">
                    <div>
                        <Typography className=" w-full text-center lg:text-start">
                            Click on Interested to stay updated about this event.
                        </Typography>

                        <div className="flex mt-6 justify-between lg:justify-normal items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Share2 size={16} />
                                <span className="text-sm">Share this event</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Eye size={16} />
                                <span className="text-sm">830</span>
                            </div>
                            <div className="md:flex hidden items-center space-x-2">
                                <Heart size={16} />
                                <span className="text-sm">830</span>
                                <span className="text-sm text-muted-foreground">
                                    People have shown interest recently
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center  h-full">
                        <Button
                            variant="outline"
                            className="border border-primary rounded text-primary hover:bg-primary hover:text-white"
                        >
                            Interested
                        </Button>
                    </div>
                </div>
            </section>

            {/**Recent */}

            <section className=" container mt-16 px-4">
                <Typography as={"h3"} variant={"h3"} className=" text-foreground">
                    Related Post
                </Typography>
                <div>
                    {events.eventsListed.length ? (
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:block">
                            {events.eventsListed.map((event, index) => (
                                <EventsCard
                                    key={index}
                                    href={`${event.id}?src=${GetConvertedUrl(event.imageUrl)}`}
                                    imageUrl={GetConvertedUrl(event.imageUrl)}
                                    imageAlt={event.title}
                                    badgeText={event.category}
                                    title={event.title}
                                    description={event.description}
                                    location={event.location}
                                    time={event.time}
                                    price={event.price}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className=" h-[300px] text-foreground flex justify-center items-center">
                            <Typography as={"h3"} variant={"h3"}>
                                No Event
                            </Typography>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default EventDetailPage;
