"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    fullHeight?: boolean;
}

/**
 * Universal cultural brand loader for Bangladesh Cultural Showcase.
 * Features a transparent background, emerald outer spinning ring,
 * ruby pulsing core, and clean animated typography.
 */
export function Loader({
    className,
    size = "md",
    text,
    fullHeight = false,
}: LoaderProps) {
    const sizeConfig = {
        sm: {
            container: "w-8 h-8",
            outerRing: "border-2",
            core: "w-2.5 h-2.5",
            dot: "w-1 h-1",
            text: "text-xs",
        },
        md: {
            container: "w-12 h-12",
            outerRing: "border-[2.5px]",
            core: "w-4 h-4",
            dot: "w-1.5 h-1.5",
            text: "text-xs sm:text-sm",
        },
        lg: {
            container: "w-16 h-16",
            outerRing: "border-[3px]",
            core: "w-5 h-5",
            dot: "w-2 h-2",
            text: "text-sm sm:text-base",
        },
        xl: {
            container: "w-20 h-20",
            outerRing: "border-4",
            core: "w-7 h-7",
            dot: "w-2.5 h-2.5",
            text: "text-base sm:text-lg",
        },
    }[size];

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center p-4 bg-transparent select-none",
                fullHeight && "min-h-[300px] w-full flex-1",
                className
            )}
        >
            {/* Animated Ring & Core Container */}
            <div className={cn("relative flex items-center justify-center", sizeConfig.container)}>
                {/* Subtle Ambient Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-bd-green/15 blur-md animate-pulse pointer-events-none" />

                {/* Spinning Emerald Gradient Outer Ring */}
                <div
                    className={cn(
                        "absolute inset-0 rounded-full border-transparent border-t-bd-green border-r-bd-green/40 animate-spin will-change-transform transform-gpu",
                        sizeConfig.outerRing
                    )}
                    style={{ animationDuration: "1s" }}
                />

                {/* Counter-Spinning Subtle Gold Accent Ring */}
                <div
                    className={cn(
                        "absolute inset-1 rounded-full border-transparent border-b-amber-400/60 border-l-amber-400/20 animate-spin will-change-transform transform-gpu",
                        sizeConfig.outerRing
                    )}
                    style={{ animationDuration: "1.8s", animationDirection: "reverse" }}
                />

                {/* Pulsing Bangladesh Ruby Center Core */}
                <div className="relative flex items-center justify-center">
                    <div
                        className={cn(
                            "rounded-full bg-bd-red shadow-[0_0_12px_rgba(206,17,38,0.7)] animate-pulse",
                            sizeConfig.core
                        )}
                    />
                    {/* Tiny Shimmer Glow Center */}
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-80" />
                </div>
            </div>

            {/* Optional Loading Text */}
            {text && (
                <div className="mt-3.5 flex items-center gap-1.5">
                    <span
                        className={cn(
                            "font-bold uppercase tracking-[0.18em] text-bd-green dark:text-emerald-400 animate-pulse",
                            sizeConfig.text
                        )}
                    >
                        {text}
                    </span>
                </div>
            )}
        </div>
    );
}

export default Loader;
