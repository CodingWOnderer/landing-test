import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function manifest() {
    return json;
}

const json = {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    theme_color: "#1A91DA",
    background_color: "#020916",
    display: "standalone",
    orientation: "portrait",
    id: "/",
    scope: "/",
    start_url: "/",
} satisfies MetadataRoute.Manifest