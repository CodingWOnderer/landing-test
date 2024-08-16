import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export const revalidate = 21600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPathsSitemapList: MetadataRoute.Sitemap = siteConfig.mainNav.map(
        (path) => ({
            url: `${siteConfig.url}${path.href}`,
            changeFrequency: "weekly",
            priority: 1,
            lastModified: new Date(),
        })
    );

    return [
        {
            url: siteConfig.url,
            changeFrequency: "daily",
            priority: 1,
        },
        ...staticPathsSitemapList,
    ];
}
