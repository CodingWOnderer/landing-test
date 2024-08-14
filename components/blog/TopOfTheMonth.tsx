import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
    title: string;
    badges: string[];
    date: string;
    author: string;
    link: string;
}

export default function Component() {
    const articles: ArticleCardProps[] = [
        {
            title: "A New Trend Of A Photo Shoot With Pets Is Gaining High Popularity Among...",
            badges: ["FASHION", "PETS"],
            date: "JUL 06, 2021",
            author: "JEROME BELL",
            link: "#",
        },
        {
            title: "How To Properly Care For Pedigree Cats At Home",
            badges: ["PETS"],
            date: "JUL 06, 2021",
            author: "BROOKLYN SIMMONS",
            link: "#",
        },
        {
            title: "A Selection Of The Best Travel Books For Lovers Of A Quiet Holiday",
            badges: ["BOOKS"],
            date: "JUL 06, 2021",
            author: "RONALD RICHARDS",
            link: "#",
        },
    ];

    return (
        <div className=" max-w-6xl dark mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="md:text-3xl text-lg text-foreground break-words font-bold">Top Of The Month</h1>
                <CustomLink href="#">
                    VIEW ALL POSTS <ArrowRightIcon className="inline-block w-4 h-4 ml-1" />
                </CustomLink>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
        </div>
    );
}

function ArticleCard({ title, badges, date, author, link }: ArticleCardProps) {
    return (
        <Card className="shadow-lg overflow-clip">
            <CardHeader className="px-0 pt-0">
                <div className="h-48 bg-gray-200" ></div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-2 mb-2">
                    {badges.map((badge, index) => (
                        <Badge key={index} className=" border border-white/10" variant="secondary">
                            {badge}
                        </Badge>
                    ))}
                </div>
                <h2 className="text-lg mb-2 line-clamp-2">{title}</h2>
                <div className="text-xs font-light text-muted-foreground mb-4">
                    <span>{date}</span> <span className="mx-2">•</span> <span>{author}</span>
                </div>
                <CustomLink href={link}>
                    READ MORE <ArrowRightIcon className="inline-block w-4 h-4 ml-1" />
                </CustomLink>
            </CardContent>
        </Card>
    );
}

function CustomLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-primary text-xs font-medium" prefetch={false}>
            {children}
        </Link>
    );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
