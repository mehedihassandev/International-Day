"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    fullHeight?: boolean;
}

const SIZE_CLASSES = {
    sm: { box: "w-8 h-8", border: "border-2", core: "w-2.5 h-2.5", font: "text-xs" },
    md: { box: "w-12 h-12", border: "border-[2.5px]", core: "w-4 h-4", font: "text-xs sm:text-sm" },
    lg: { box: "w-16 h-16", border: "border-[3px]", core: "w-5 h-5", font: "text-sm sm:text-base" },
    xl: { box: "w-20 h-20", border: "border-4", core: "w-7 h-7", font: "text-base sm:text-lg" },
};

export function Loader({
    className,
    size = "md",
    text,
    fullHeight = false,
}: LoaderProps) {
    const s = SIZE_CLASSES[size];

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center p-4 bg-transparent select-none",
                fullHeight && "min-h-[300px] w-full flex-1",
                className
            )}
        >
            <div className={cn("relative flex items-center justify-center", s.box)}>
                <div className="absolute inset-0 rounded-full bg-bd-green/15 blur-md animate-pulse pointer-events-none" />

                <div
                    className={cn(
                        "absolute inset-0 rounded-full border-transparent border-t-bd-green border-r-bd-green/40 animate-spin will-change-transform transform-gpu",
                        s.border
                    )}
                    style={{ animationDuration: "1s" }}
                />

                <div
                    className={cn(
                        "absolute inset-1 rounded-full border-transparent border-b-amber-400/60 border-l-amber-400/20 animate-spin will-change-transform transform-gpu",
                        s.border
                    )}
                    style={{ animationDuration: "1.8s", animationDirection: "reverse" }}
                />

                <div className="relative flex items-center justify-center">
                    <div
                        className={cn(
                            "rounded-full bg-bd-red shadow-[0_0_12px_rgba(206,17,38,0.7)] animate-pulse",
                            s.core
                        )}
                    />
                    <div className="absolute w-1 h-1 bg-white rounded-full opacity-80" />
                </div>
            </div>

            {text && (
                <div className="mt-3.5 flex items-center gap-1.5">
                    <span
                        className={cn(
                            "font-bold uppercase tracking-[0.18em] text-bd-green dark:text-emerald-400 animate-pulse",
                            s.font
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
