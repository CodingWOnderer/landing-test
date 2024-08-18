import React from "react";
import EventsSearch from "@/components/events-search";
import { Typography } from "@/components/typography";

const EventPage = () => {
    return (
        <div className=" dark">
            {/* Background Section */}
            <section className="relative w-full bg-no-repeat bg-center bg-cover bg-[url(https://assets.capcons.com/images/backgroundEvents.webp)]">
                <div className="mx-auto max-w-screen-3xl px-4 py-32 sm:px-6 flex flex-col justify-center lg:h-[90vh] items-center lg:px-8">
                    <Typography
                        variant={"h1"}
                        as={"h1"}
                        className="  text-foreground animate-fade-up [--animation-delay:700ms] text-center"
                    >
                        The Best Events for You!
                    </Typography>

                    <p className="text-white text-lg animate-fade-up [--animation-delay:800ms] md:text-2xl sm:text-base text-center   tracking-tight   scroll-m-0 font-normal leading-7 font-sans">
                        Connecting People, Creating Memories.
                    </p>
                </div>
            </section>
            <EventsSearch />
        </div>
    );
};

export default EventPage;
