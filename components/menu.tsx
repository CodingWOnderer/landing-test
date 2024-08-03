"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function CapconsMenu() {
    return (
        <NavigationMenu className="hidden lg:block ">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/brands" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Brands
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/creator" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Creators
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/Pricing" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-4">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components built with Radix UI and
                                            Tailwind CSS.
                                        </p>
                                    </a>
                                </NavigationMenuLink>


                            </li>

                            <ListItem href="/docs" title="Blogs">
                                Insights, Ideas & latest feature launch: Your Go-To Hub for the Latest in Social
                            </ListItem>
                            <ListItem href="/docs/installation" title="Events">
                                Learn, Engage, Excel: Your Gateway to know partners, team at CapCons
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="How to videos">
                                Steps-by-Steps guide to community creation
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Stormnorms">
                                Contest that celebrate creators
                            </ListItem>
                            <div className="col-span-2 grid gap-x-2 grid-cols-2">
                                <Button>Book a demo</Button>
                                <Button>Contact us</Button>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
