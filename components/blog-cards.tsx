import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { FiMessageCircle } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WithErrorImage } from "./common/fallback-image";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils";
import Link from "next/link";

interface BlogCardsProps extends React.HTMLAttributes<HTMLDivElement> {
    banner: string;
    comments: number;
    likes: number;
    date: string;
    title: string;
    description: string;
    category: string;
    owner: string;
    profile: string;
    href: string;
}

const BlogCards = React.forwardRef<HTMLDivElement, BlogCardsProps>(
    (
        {
            banner,
            comments,
            category,
            likes,
            date,
            title,
            description,
            owner,
            profile,
            className,
            href,
            ...props
        },
        ref
    ) => {
        return (
            <div ref={ref} className={cn("lg:max-w-md h-full", className)} {...props}>
                <Card className="dark">
                    <CardHeader className="p-3">
                        <CardTitle className="rounded-md cursor-pointer relative overflow-clip">
                            <WithErrorImage
                                src={banner}
                                height={500}
                                width={700}
                                priority
                                alt={title}
                                errorText={title}
                            />
                            <Badge className="absolute bg-[#020916] top-2 left-2">
                                {category}
                            </Badge>
                        </CardTitle>
                        <div className="flex text-neutral-400 font-light text-sm justify-between">
                            <div className="flex space-x-2">
                                <div className="flex space-x-1 items-center justify-center">
                                    <FiMessageCircle /> <span>{comments}</span>
                                </div>
                                <div className="flex items-center space-x-1 justify-center">
                                    <CiHeart strokeWidth={2} /> <span>{likes}</span>
                                </div>
                            </div>
                            <div className="lowercase"> {formatDate(new Date(date))}</div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-3">
                        <Link
                            hrefLang="en"
                            href={href}
                            className="font-bold leading-snug hover:underline text-lg"
                        >
                            {title}
                        </Link>
                        <p className="text-sm line-clamp-2 mt-2 text-muted-foreground leading-tight -tracking-tight">
                            {description}
                        </p>
                    </CardContent>
                    <CardFooter className="px-3 space-x-2 flex items-center mt-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={profile} alt="@capcons" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col leading-[0.8rem]">
                            <strong className="text-[11px]">{owner}</strong>
                            <small className="text-[9px] text-muted-foreground">2d ago</small>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        );
    }
);

BlogCards.displayName = "BlogCards";

export default BlogCards;
