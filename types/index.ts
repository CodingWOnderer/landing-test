export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    links: {
        twitter: string;
        instagram: string;
        youtube: string;
        facebook: string;
    };
    mainNav: {
        title: string;
        href: string;
    }[];
    creator: string;
};
