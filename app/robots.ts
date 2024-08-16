import type { MetadataRoute } from "next";
import { headers } from "next/headers";


export default function robots(): MetadataRoute.Robots {
    const headerList = headers();
    const domain = headerList.get("host") as string;

    return {
        rules: {
            userAgent: "*",
            disallow: "/api/",
        },
        sitemap: `https://${domain}/sitemap.xml`,
    }
}