"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Fact } from "@/data/facts";
import { useFacts } from "@/hooks/useFacts";
import { FactModal } from "@/components/FactModal";
import { Loader } from "@/components/Loader";
import { Library, Search, Sparkles, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "History", "Culture", "Nature", "Art", "GI Product"] as const;

/**
 * Heritage Gallery page powered by TanStack Query and MongoDB API.
 * The API is always the single source of truth.
 */
export default function HeritagePage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFact, setSelectedFact] = useState<Fact | null>(null);

    const { data: factsResponse, isLoading } = useFacts({
        category: selectedCategory === "All" ? undefined : selectedCategory,
        search: searchQuery.trim() || undefined,
        limit: 100,
    });

    const facts = useMemo(() => factsResponse?.data || [], [factsResponse?.data]);

    const handleClearSearch = () => {
        setSearchQuery("");
        setSelectedCategory("All");
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Unified Hero Header */}
            <div className="bg-gradient-to-r from-bd-green-dark via-[#004D38] to-[#002B1F] py-14 sm:py-18 relative overflow-hidden text-white border-b border-emerald-700/30">
                {/* Subtle Ambient Shapes */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-bd-red/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
                            <Library size={14} className="text-amber-400" />
                            <span>Digital Cultural Archive</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight">
                            Heritage <span className="text-emerald-300">Gallery</span>
                        </h1>
                        <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal max-w-2xl">
                            Explore the entire archive of incredible historical milestones,
                            UNESCO monuments, breathtaking nature, and Geographical Indication (GI) products.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8 sm:pt-10">
                {/* Search & Category Filter Controls */}
                <div className="max-w-4xl mx-auto mb-10 space-y-5">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search heritage by name, era, GI product, or landmark..."
                            className="w-full pl-11 pr-10 py-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 focus:border-bd-green dark:focus:border-emerald-500 focus:outline-none text-slate-900 dark:text-white font-medium text-sm shadow-soft transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                                aria-label="Clear search"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {CATEGORIES.map((cat) => {
                            const isActive = selectedCategory === cat;
                            return (
                                <motion.button
                                    key={cat}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={cn(
                                        "px-4 sm:px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border select-none",
                                        isActive
                                            ? "bg-bd-green dark:bg-emerald-600 text-white border-bd-green shadow-md shadow-emerald-950/20 scale-105"
                                            : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-bd-green/40 hover:text-bd-green"
                                    )}
                                >
                                    {cat}
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Results Counter */}
                    {!isLoading && facts.length > 0 && (
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1 pt-1">
                            <span>
                                Showing <strong className="text-slate-900 dark:text-white">{facts.length}</strong> {selectedCategory === "All" ? "treasures" : `${selectedCategory} items`}
                            </span>
                            {(searchQuery || selectedCategory !== "All") && (
                                <button
                                    onClick={handleClearSearch}
                                    className="text-bd-red hover:underline text-xs font-bold cursor-pointer"
                                >
                                    Reset Filters
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Facts Grid */}
                {isLoading ? (
                    <div className="py-20 flex flex-col items-center justify-center">
                        <Loader size="lg" text="Discovering Heritage Archives..." fullHeight />
                    </div>
                ) : facts.length === 0 ? (
                    <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto shadow-soft p-8">
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-bd-red flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">No discoveries found</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                            No heritage items matched &ldquo;{searchQuery || selectedCategory}&rdquo;. Try adjusting your keywords or clearing the category filter.
                        </p>
                        <button
                            onClick={handleClearSearch}
                            className="px-5 py-2.5 bg-bd-green hover:bg-bd-green-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                        >
                            Reset Search
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence>
                            {facts.map((fact, index) => (
                                <FactCard
                                    key={fact.id}
                                    fact={fact}
                                    index={index}
                                    onSelect={() => setSelectedFact(fact)}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            {/* Fact Detail Modal */}
            <FactModal
                fact={selectedFact}
                isOpen={selectedFact !== null}
                onClose={() => setSelectedFact(null)}
            />
        </div>
    );
}

function FactCard({ fact, index, onSelect }: { fact: Fact; index: number; onSelect: () => void }) {
    const fallbackSrc = `/images/facts/${fact.id}.jpg`;
    const [imgSrc, setImgSrc] = React.useState(fact.image || fallbackSrc);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: Math.min(index * 0.03, 0.3) }}
            whileHover={{ y: -6 }}
            onClick={onSelect}
            className="group cursor-pointer bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-bd-green/40 dark:hover:border-emerald-500/40 shadow-soft hover:shadow-premium transition-all duration-300 overflow-hidden flex flex-col"
        >
            {/* Top Accent Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-bd-green via-bd-red to-bd-gold opacity-75 group-hover:opacity-100 transition-opacity" />

            {/* Image Section */}
            <div className="relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                    src={imgSrc}
                    alt={fact.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={() => setImgSrc(fallbackSrc)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Multi-Image Badge */}
                {fact.images && fact.images.length > 1 && (
                    <div className="absolute top-3.5 right-3.5 z-10">
                        <span className="px-2.5 py-1 bg-black/60 text-white text-[10px] font-bold rounded-xl shadow-sm backdrop-blur-md flex items-center gap-1 border border-white/20">
                            📸 {fact.images.length}
                        </span>
                    </div>
                )}

                {/* Category Chip on Image */}
                <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-black rounded-xl uppercase tracking-wider border border-white/20 shadow-sm flex items-center gap-1">
                        <Sparkles size={11} className="text-amber-400" />
                        {fact.category}
                    </span>
                </div>

                {/* Corner Quick View Icon */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-900/90 text-bd-green dark:text-emerald-400 backdrop-blur-md flex items-center justify-center shadow-md group-hover:bg-bd-green group-hover:text-white transition-all duration-300 scale-90 group-hover:scale-100">
                    <ArrowUpRight size={16} />
                </div>
            </div>

            {/* Info Section */}
            <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-bd-green dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                        {fact.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 font-normal">
                        {fact.description}
                    </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-bd-green dark:text-emerald-400 group-hover:text-bd-red transition-colors">
                    <span>Read Full Story</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
}
