"use client";
import { EventsCard } from "@/components/events-card";
import { Typography } from "@/components/typography";
import React, { useState, useMemo, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { events } from "@/lib/mocks";
import { motion } from "framer-motion";

const tags = [
    "Comedy Shows",
    "Workshops",
    "Music Shows",
    "Meets",
    "Kids",
    "Performances",
    "Exhibitions",
    "Screening",
    "Talks",
    "Spirituality",
];

const EventsSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [location, setLocation] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagClick = useCallback((tag: string) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag)
                ? prevTags.filter((t) => t.includes(tag.toLowerCase()))
                : [...prevTags, tag]
        );
    }, []);

    const filteredEvents = useMemo(() => {
        return events.eventsListed.filter((event) => {
            const matchesSearchTerm = event.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchesLocation =
                location === "" ||
                event.location.toLowerCase().includes(location.toLowerCase());
            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.some((tag) => event.category.includes(tag));
            const matchesDate =
                date === undefined ||
                new Date(event.date).toDateString() === new Date(date).toDateString();

            return matchesSearchTerm && matchesLocation && matchesTags && matchesDate;
        });
    }, [searchTerm, location, selectedTags, date]);

    return (
        <div>
            {" "}
            {/* Search Section */}
            <motion.div initial={{ opacity: 0, translateY: 40 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ ease: "easeIn", delay: 0.2, duration: 0.5, }}
                viewport={{ once: true }} className="flex justify-center relative bottom-12">
                <div className="mt-6 bg-[#FFF] rounded-lg shadow-lg p-8 w-[90vw] flex-col md:flex-row flex justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
                    <Input
                        type="text"
                        placeholder="Search for event"
                        className="p-2  rounded-md w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "bg-white  w-full md:w-fit text-neutral-600 rounded-md"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(e) => setDate(e ?? undefined)}
                                className=" bg-white rounded-md border-none text-gray-600"
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <Input
                        type="text"
                        placeholder="Location"
                        className="p-2 rounded-md w-full"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <Button
                        className="p-2 w-full md:w-fit rounded-md  min-w-10 hover:bg-primary/80"
                        onClick={() => { }}
                    >
                        <SearchIcon />
                    </Button>
                </div>
            </motion.div>
            <ScrollArea className="container">
                <div className="container mx-auto p-6">
                    <div className="flex overflow-x-auto space-x-4 justify-center">
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                className={`px-3 py-1 border text-xs rounded border-primary text-primary whitespace-nowrap ${selectedTags.includes(tag) ? "bg-primary text-white" : ""
                                    }`}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className=" container mt-16 px-4">
                {filteredEvents.length ? (
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:block">
                        {filteredEvents.map((event, index) => (
                            <EventsCard key={index} />
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
        </div>
    );
};

export default EventsSearch;
