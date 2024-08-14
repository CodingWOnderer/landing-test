import { memo } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { WithErrorImage } from "../common/fallback-image";
import { Separator } from "../ui/separator";

interface ArticleCardProps {
    category: string;
    title: string;
    description: string;
    date: string;
    author: string;
}

const ArticleCard = memo(
    ({ category, title, description, date, author }: ArticleCardProps) => (
        <Card className="grid bg-secondary border-none cursor-pointer sm:grid-cols-6 gap-4 overflow-clip">
            <div className="sm:col-span-2 relative col-span-1 border w-full min-h-full">
                <WithErrorImage
                    src="https://images.pexels.com/photos/9543414/pexels-photo-9543414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Article Image"
                    height={500}
                    width={500}
                    className="object-cover h-full w-full"
                    errorText={title}
                />
                <Badge
                    variant={"secondary"}
                    className=" absolute top-3 text-[10px] rounded left-3"
                >
                    {category}
                </Badge>
            </div>
            <div className="sm:col-span-4">
                <CardHeader className="pb-4">
                    <CardTitle className="md:text-xl text-md">{title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-5 pt-8">
                        {description}
                    </CardDescription>
                </CardHeader>
                <div className=" p-6 pt-3 pb-0">
                    {" "}
                    <Separator />
                </div>
                <CardContent className="flex text-xs justify-between items-center text-muted-foreground ">
                    <div className="flex items-center gap-2">
                        <span>{date}</span>
                        <span>—</span>
                        <span>{author}</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground rounded-full"
                    >
                        <IoIosArrowForward />
                    </Button>
                </CardContent>
            </div>
        </Card>
    )
);

ArticleCard.displayName = "ArticleCard"

const SidebarArticle = memo(
    ({
        title,
        date,
        category,
    }: {
        title: string;
        date: string;
        category: string;
    }) => (
        <Card className="p-0  border-none max-w-[300px] max-h-[260px] ">
            <CardHeader className="relative rounded overflow-clip h-[150px] p-0">
                <WithErrorImage
                    src="https://images.pexels.com/photos/9543414/pexels-photo-9543414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Sidebar Image"
                    fill
                    className="object-cover h-full w-full"
                    errorText={title}
                />
            </CardHeader>

            <CardContent className="flex flex-col space-y-2 mt-4 pb-3 px-4">
                <p className="text-xs text-muted-foreground">
                    {date} — #{category}
                </p>
                <Separator />
                <h3 className="text-sm font-semibold">{title}</h3>
            </CardContent>
        </Card>
    )
);

SidebarArticle.displayName = "SidebarArticle"

const Dashboard = () => {
    const articles = [
        {
            category: "HOME",
            title:
                "Selection Of Very Comfortable Furniture For Relaxing On The Terrace",
            description:
                "A breakdown or a flat tire can happen to anyone at any time, and what you have in your car can make the difference between getting back on the ...",
            date: "JUL 06, 2021",
            author: "MARIE CAPHLISH",
        },
        {
            category: "FASHION",
            title: "Modern Style For Young Fashionistas Spring Autumn",
            description:
                "A breakdown or a flat tire can happen to anyone at any time, and what you have in your car can make the difference between getting back on the ...",
            date: "JUL 06, 2021",
            author: "ARLENE MCCOY",
        },
        {
            category: "ELECTRONICS",
            title: "Are You Ready To Try New Things In Electronics This Year",
            description:
                "A breakdown or a flat tire can happen to anyone at any time, and what you have in your car can make the difference between getting back on the ...",
            date: "JUL 06, 2021",
            author: "DIANNE RUSSELL",
        },
    ];

    const sidebarArticles = [
        {
            title: "Fresh Home Photo Session. See How We Love Our Pets",
            date: "JUL 06, 2021",
            category: "PETS",
        },
        {
            title: "The Best Ideas For Decorating Living Areas In Your Garden",
            date: "JUL 06, 2021",
            category: "GARDEN",
        },
        {
            title: "How Not To Get Lost Without Knowing The Language",
            date: "JUL 06, 2021",
            category: "TRAVEL",
        },
    ];

    return (
        <div className="flex flex-col max-w-6xl dark mx-auto">
            <header className="flex py-4">
                <h2 className="md:text-3xl text-xl text-foreground font-medium">
                    Recent Stories
                </h2>
            </header>
            <main className="flex flex-col gap-4 lg:flex-row">
                <div className="flex-1 space-y-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} {...article} />
                    ))}
                </div>
                <div className="rounded-xl hidden lg:block space-y-2">
                    {sidebarArticles.map((sidebarArticle, index) => (
                        <SidebarArticle key={index} {...sidebarArticle} />
                    ))}
                    <Button variant="outline" className="w-full border-primary text-primary mt-4">
                        VIEW ALL
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
