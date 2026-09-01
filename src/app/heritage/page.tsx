"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Fact } from "@/data/facts";
import { useFacts } from "@/hooks/useFacts";
import { FactModal } from "@/components/FactModal";
import { Skeleton } from "@/components/ui/skeleton";
import { Library, Maximize2, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "History", "Culture", "Nature", "Art", "GI Product"];

/**
 * Heritage Gallery page powered by TanStack Query and MongoDB.
 * Provides live category filtering, search, and detail modal with client-side caching.
 */
export default function HeritagePage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFact, setSelectedFact] = useState<Fact | null>(null);

    const { data: factsResponse, isLoading } = useFacts({
        category: selectedCategory === "All" ? undefined : selectedCategory,
        search: searchQuery.trim() || undefined,
        limit: 100,
    });

    const facts = factsResponse?.data || [];

    return (
        <div className="min-h-screen bg-gradient-to-b from-bd-green-soft via-white to-bd-red-soft pb-16">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-bd-red to-bd-red-hover py-14 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-80 h-80 border-4 border-white/20 rounded-full translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 border-8 border-white/10 rounded-full -translate-x-1/2 translate-y-1/3" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center text-white"
                    >
                        <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md shadow-lg">
                            <Library size={32} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Heritage Gallery
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            Explore the entire archive of incredible facts,
                            historic events, magnificent nature, and GI products
                            representing the soul of Bangladesh.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8">
                {/* Search & Category Filter Controls */}
                <div className="max-w-4xl mx-auto mb-10 space-y-6">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search heritage, historic events, GI products..."
                            className="w-full pl-12 pr-4 py-3.5 bg-white/90 backdrop-blur-md rounded-2xl border-2 border-bd-green/20 focus:border-bd-red focus:outline-none text-foreground font-medium shadow-sm transition-all"
                        />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {CATEGORIES.map((cat) => {
                            const isActive = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={cn(
                                        "px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border-2",
                                        isActive
                                            ? "bg-bd-green text-white border-bd-green shadow-md shadow-bd-green/20 scale-105"
                                            : "bg-white/80 text-foreground/80 border-bd-green/10 hover:border-bd-red/40 hover:bg-bd-red/5 hover:text-bd-red"
                                    )}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Facts Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-white/80 rounded-2xl border border-bd-green/10 p-4 space-y-4 overflow-hidden"
                            >
                                <Skeleton className="w-full h-48 rounded-xl" />
                                <Skeleton className="w-20 h-5 rounded-full" />
                                <Skeleton className="w-3/4 h-6 rounded-md" />
                                <Skeleton className="w-full h-12 rounded-md" />
                            </div>
                        ))}
                    </div>
                ) : facts.length === 0 ? (
                    <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl border border-bd-green/10 max-w-lg mx-auto">
                        <Sparkles className="h-12 w-12 text-bd-red mx-auto mb-4 animate-pulse" />
                        <h3 className="text-xl font-bold text-foreground mb-2">No discoveries found</h3>
                        <p className="text-muted-foreground text-sm">
                            Try adjusting your search query or selecting a different category.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence>
                            {facts.map((fact, index) => (
                                <motion.div
                                    key={fact.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: Math.min(index * 0.04, 0.4) }}
                                    onClick={() => setSelectedFact(fact)}
                                    className="group cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-bd-green/10 hover:border-bd-red/40 hover:bg-bd-red/5 shadow-soft hover:shadow-[0_10px_40px_-10px_rgba(244,42,65,0.15)] transition-all duration-300 overflow-hidden flex flex-col"
                                >
                                    {/* Image Section */}
                                    <div className="relative w-full h-48 overflow-hidden bg-earth-light/20">
                                        {fact.image ? (
                                            <Image
                                                src={fact.image}
                                                alt={fact.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 30vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bd-gradient opacity-10" />
                                        )}

                                        {/* Expand overlay icon */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg text-bd-green flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                                <Maximize2 size={24} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info Section */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1 bg-bd-green/10 text-bd-green text-[10px] font-black rounded-full uppercase tracking-wider border border-bd-green/20">
                                                {fact.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-bd-red transition-colors">
                                            {fact.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-2">
                                            {fact.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            {/* Reused Fact Modal */}
            <FactModal
                fact={selectedFact}
                isOpen={selectedFact !== null}
                onClose={() => setSelectedFact(null)}
            />
        </div>
    );
}
