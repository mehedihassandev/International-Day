import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        // Replace with your actual domain when you deploy!
        sitemap: "https://international-day-three.vercel.app/sitemap.xml",
    };
}
