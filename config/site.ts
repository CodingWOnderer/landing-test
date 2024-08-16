import { SiteConfig } from "@/types";

export const placeholderImage = (str: string) => {
    return `https://placehold.co/400x600/EEE/31343C?font=montserrat&text=${encodeURI(
        str
    )}`;
};

export const siteConfig: SiteConfig = {
    name: "Capcons",
    description: "Capcons offers a unique, algorithm-free environment where users can create personalized social circles to control their content sharing.Connect effortlessly with those around you using advanced proximity-based features. Customize your interaction preferences, exchange contact details with a simple phone touch, and engage through real-time activity feeds. Match interests with like-minded individuals and explore new opportunities within your circles.Capcons provides pre-built templates for discussions, events, and more, along with single sign-on for enhanced security. Benefit from comprehensive moderation tools, detailed analytics, and embedded community features that integrate seamlessly with your website or app. Enjoy granular search capabilities, activity feeds, and leaderboards that celebrate top contributors.Join Capcons today to share your stories, meet new people, and pursue your passions in a controlled and engaging environment.",
    url: "https://capcons.com/",
    links: {
        twitter: "https://twitter.com/capcons",
        instagram: "https://instagram.com/capcons",
        youtube: "https://youtube.com/capcons",
        facebook: "https://facebook.com/capcons",
    },
    mainNav: [
        {
            title: "home",
            href: "/home",
        },
        {
            title: "blog",
            href: "/blog",
        },
        {
            title: "brands",
            href: "/brands",
        },
        {
            title: "pricing",
            href: "/pricing",
        },
        {
            title: "about",
            href: "/about",
        },
        {
            title: "creators",
            href: "/creators",
        },
        {
            title: "events",
            href: "/events",
        },
    ],
    creator: "Varun Chandra"
};
