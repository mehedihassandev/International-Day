import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    // Replace with your actual domain when deploying
    const baseUrl = "https://international-day-three.vercel.app";

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/heritage`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/foods`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];
}
