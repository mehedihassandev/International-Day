"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Compass, UtensilsCrossed, Library } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Modern Navigation component for the Bangladesh Cultural Showcase.
 * Features the national flag emblem and responsive tab-based navigation.
 */
export function Navigation() {
    const pathname = usePathname();

    const navItems = [
        {
            name: "Explore Facts",
            shortName: "Explore",
            href: "/",
            icon: Compass,
        },
        {
            name: "Heritage Gallery",
            shortName: "Heritage",
            href: "/heritage",
            icon: Library,
        },
        {
            name: "Bengali Kitchen",
            shortName: "Kitchen",
            href: "/foods",
            icon: UtensilsCrossed,
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-bd-green-dark/95 backdrop-blur-xl border-b border-emerald-700/30 shadow-md">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo Section */}
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0"
                    >
                        <div className="relative h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center">
                            {/* Stylized BD Flag Logo */}
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-sm border border-white/20" />
                            <div className="relative h-5 w-5 sm:h-6 sm:w-6 bg-bd-red rounded-full shadow-[0_0_14px_rgba(206,17,38,0.7)] animate-glow" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base sm:text-lg md:text-xl font-black tracking-tight text-white block leading-none drop-shadow-sm">
                                Bangladesh{" "}
                                <span className="text-rose-400">Cultural</span>
                            </span>
                            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-300/80 mt-0.5">
                                Heritage • Nature • Culinary
                            </span>
                        </div>
                    </Link>

                    {/* Navigation Items (Responsive) */}
                    <nav className="flex items-center gap-1 sm:gap-1.5 bg-black/25 p-1 sm:p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 min-h-[38px] sm:min-h-[42px] rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 select-none",
                                        isActive
                                            ? "text-bd-green-dark shadow-sm"
                                            : "text-emerald-100/75 hover:text-white hover:bg-white/10",
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white rounded-xl shadow-md"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 450,
                                                damping: 35,
                                            }}
                                        />
                                    )}
                                    <Icon
                                        className={cn(
                                            "h-3.5 w-3.5 sm:h-4 sm:w-4 relative z-10 flex-shrink-0",
                                            isActive && "text-bd-red",
                                        )}
                                    />
                                    <span className="relative z-10 hidden md:inline">
                                        {item.name}
                                    </span>
                                    <span className="relative z-10 inline md:hidden">
                                        {item.shortName}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navigation;
