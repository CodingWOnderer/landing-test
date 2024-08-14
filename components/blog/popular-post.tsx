import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { IoChatbubbleOutline } from "react-icons/io5";
import { WithErrorImage } from "../common/fallback-image";

const posts = [
    {
        title: "the best indoor plants to create comfort at home",
        date: "JULY 06",
        category: "#TRAVEL",
        comments: 4,
        imageUrl: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "the best indoor plants to create comfort at home",
        date: "JULY 06",
        category: "#TRAVEL",
        comments: 4,
        imageUrl: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "the best indoor plants to create comfort at home",
        date: "JULY 06",
        category: "#TRAVEL",
        comments: 4,
        imageUrl: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "the best indoor plants to create comfort at home",
        date: "JULY 06",
        category: "#TRAVEL",
        comments: 4,
        imageUrl: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

const PopularPostSection = () => {
    return (
        <div className="px-4 dark">
            <div className="mx-auto max-w-6xl  flex flex-col space-y-4">
                <header className="flex  md:py-4 justify-between items-center">
                    <h2 className="md:text-3xl text-xl text-foreground font-medium">
                        Popular Posts
                    </h2>
                    <Button
                        className="text-xs text-primary"
                        variant="ghost"
                        size="sm"
                    >
                        VIEW ALL POSTS
                    </Button>
                </header>
                <main className="flex  flex-col-reverse lg:flex-row gap-2 w-full">
                    <div >
                        <ul className="gap-2 grid  md:grid-cols-2 h-full lg:flex lg:flex-col  lg:justify-between">
                            {posts.map((post, index) => (
                                <li key={index} className="min-w-[300px]  ">
                                    <Card className="flex overflow-clip">
                                        <CardContent className="p-0 h-[110px]">
                                            <WithErrorImage
                                                src={post.imageUrl}
                                                alt={post.title}
                                                height={800}
                                                width={600}
                                                className="object-cover w-full h-full"
                                                errorText={post.title} />
                                        </CardContent>
                                        <CardHeader className="p-4 space-y-4 pr-2">
                                            <CardTitle className="text-[14px] font-medium capitalize tracking-tighter leading-tight">
                                                {post.title}
                                            </CardTitle>
                                            <div className="flex text-xs space-x-1" >
                                                <p className="text-muted-foreground">
                                                    {post.date} — {post.category}
                                                </p>
                                                <h3 className="flex items-center space-x-1 justify-center font-semibold">
                                                    <IoChatbubbleOutline />{post.comments}
                                                </h3>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="  bg-carouselcard rounded-xl  overflow-clip">
                        <WithErrorImage
                            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="loading"
                            height={800}
                            width={800}
                            className="object-cover w-full h-full" errorText={"Popular Post"} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PopularPostSection;
