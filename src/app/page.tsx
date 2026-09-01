"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SpinWheel } from "@/components/SpinWheel";
import { FactModal } from "@/components/FactModal";
import { Fact } from "@/data/facts";
import { useFacts } from "@/hooks/useFacts";
import { useRecipes } from "@/hooks/useRecipes";
import { Loader } from "@/components/Loader";
import {
    History,
    Globe,
    Landmark,
    Utensils,
    Sparkles,
    ArrowRight,
    Award,
    Eye,
} from "lucide-react";

/**
 * Home page for the Bangladesh Cultural Showcase.
 * Features a high-performance interactive Spin Wheel, curated spotlights,
 * and data fetched directly from the API as the single source of truth.
 */
export default function Home() {
    const { data: factsResponse, isLoading } = useFacts({ limit: 50 });
    const facts = useMemo(() => factsResponse?.data || [], [factsResponse?.data]);
    const totalFacts = factsResponse?.total ?? 0;

    const { data: recipesResponse } = useRecipes({ limit: 0 });
    const totalRecipes = recipesResponse?.total ?? 0;

    const [selectedFact, setSelectedFact] = useState<Fact | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lastSpunFact, setLastSpunFact] = useState<Fact | null>(null);

    // Optimized spin result handler with zero intermediate layout thrashing
    const handleSpinResult = useCallback((fact: Fact) => {
        setLastSpunFact(fact);
        setSelectedFact(fact);
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handlePreviewFact = useCallback((fact: Fact) => {
        setSelectedFact(fact);
        setIsModalOpen(true);
    }, []);

    // Featured preview highlights
    const featuredTreasures = useMemo(() => {
        if (!facts || facts.length === 0) return [];
        return facts.slice(0, 4);
    }, [facts]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-x-hidden">
            {/* Contained Performance-Optimized Ambient Glow Layers */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden contain-paint">
                <div className="absolute top-[-5%] -left-[10%] w-[550px] h-[550px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl transform-gpu" />
                <div className="absolute bottom-[-10%] -right-[10%] w-[550px] h-[550px] bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-3xl transform-gpu" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-amber-400/5 rounded-full blur-3xl transform-gpu" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-8 sm:pt-12 pb-20">
                {/* Hero Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-8">
                    {/* Cultural Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                            opacity: 1,
                            y: [0, -3, 0],
                        }}
                        transition={{
                            opacity: { duration: 0.4 },
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300/60 dark:border-emerald-800/60 text-bd-green dark:text-emerald-300 text-xs font-black uppercase tracking-wider mb-5 shadow-xs"
                    >
                        <Sparkles size={14} className="text-amber-500" />
                        <span>Celebrating International Mother Language Day & Heritage</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-5"
                    >
                        Discover the Soul of{" "}
                        <span className="text-bd-green dark:text-emerald-400 relative inline-block">
                            Bangladesh
                            <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-bd-green via-bd-red to-bd-gold rounded-full opacity-70" />
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
                    >
                        Spin the interactive wheel to explore historic milestones, world-famous GI
                        masterpieces, breathtaking geography, and royal culinary secrets.
                    </motion.p>

                    {/* Stats Counter Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-3 px-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-soft text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300"
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-bd-green" />
                            <span>{isLoading ? "…" : `${totalFacts}+`} National Treasures</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-bd-red" />
                            <span>{totalRecipes > 0 ? `${totalRecipes}+` : "…"} Authentic Recipes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            <span>1952 Mother Language Day</span>
                        </div>
                    </motion.div>
                </div>

                {/* Spin Wheel Interactive Centerpiece */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 90, damping: 20 }}
                    className="relative z-10 my-6"
                >
                    <SpinWheel
                        facts={facts}
                        loading={isLoading}
                        onResult={handleSpinResult}
                        disabled={isModalOpen}
                    />
                </motion.div>

                {/* Last Spun Winner Highlight Card */}
                {lastSpunFact && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="max-w-xl mx-auto mt-6 p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 backdrop-blur-xl border border-emerald-600/30 dark:border-emerald-500/30 shadow-premium flex items-center justify-between gap-4"
                    >
                        <div className="flex items-center gap-3.5 min-w-0">
                            <div className="px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-bd-green dark:text-emerald-300 font-extrabold text-xs uppercase tracking-wider flex-shrink-0">
                                Latest Spin
                            </div>
                            <div className="min-w-0">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                    {lastSpunFact.category}
                                </span>
                                <h4 className="font-extrabold text-slate-900 dark:text-white truncate text-sm sm:text-base">
                                    {lastSpunFact.title}
                                </h4>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handlePreviewFact(lastSpunFact)}
                            className="px-4 py-2 rounded-xl bg-bd-green hover:bg-bd-green-dark text-white text-xs font-bold transition-all shadow-sm flex-shrink-0 cursor-pointer"
                        >
                            View Story
                        </motion.button>
                    </motion.div>
                )}

                {/* Cultural Pillars Grid */}
                <div className="mt-24 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-bd-red mb-2">
                            <Sparkles size={14} /> Heritage Pillars
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                            Explore Four Pillars of Bengal
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-lg mx-auto">
                            Immerse yourself in history, craftsmanship, natural wonders, and culinary traditions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: History,
                                title: "Language & Freedom",
                                desc: "From the 1952 Language Movement martyrs to 1971 Liberation War victory.",
                                badge: "History",
                                color: "emerald",
                                href: "/heritage",
                            },
                            {
                                icon: Landmark,
                                title: "GI Masterpieces",
                                desc: "Centuries-old Jamdani weaves, royal Muslin, Nakshi Kantha, and Padma Hilsa.",
                                badge: "GI Heritage",
                                color: "amber",
                                href: "/heritage",
                            },
                            {
                                icon: Globe,
                                title: "Nature & Rivers",
                                desc: "The Sundarbans mangrove forest, Cox's Bazar beach, and lush tea gardens.",
                                badge: "Geography",
                                color: "teal",
                                href: "/heritage",
                            },
                            {
                                icon: Utensils,
                                title: "Bengali Kitchen",
                                desc: "Royal Kacchi Biryani, steamed Ilish, crispy Fuchka, and delicate Pitha sweets.",
                                badge: "Culinary",
                                color: "rose",
                                href: "/foods",
                            },
                        ].map((pillar, i) => {
                            const IconComponent = pillar.icon;
                            return (
                                <Link key={i} href={pillar.href} className="group">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -6, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 0.2 }}
                                        className="h-full p-6 sm:p-7 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 hover:border-bd-green/40 dark:hover:border-emerald-500/40 rounded-3xl group-hover:shadow-premium transition-colors duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-5">
                                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-bd-green dark:text-emerald-400 group-hover:bg-bd-red group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-xs">
                                                    <IconComponent size={22} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                                    {pillar.badge}
                                                </span>
                                            </div>
                                            <h3 className="font-black text-lg text-slate-900 dark:text-white mb-2 group-hover:text-bd-green dark:group-hover:text-emerald-400 transition-colors">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                                                {pillar.desc}
                                            </p>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-bd-green dark:text-emerald-400 group-hover:text-bd-red transition-colors">
                                            <span>Explore Archive</span>
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Featured Treasures Spotlight Strip */}
                {isLoading ? (
                    <div className="mt-24 max-w-6xl mx-auto py-12 flex flex-col items-center justify-center">
                        <Loader size="lg" text="Loading National Treasures..." />
                    </div>
                ) : featuredTreasures.length > 0 ? (
                    <div className="mt-24 max-w-6xl mx-auto">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                            <div>
                                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-bd-green dark:text-emerald-400 mb-2">
                                    <Award size={14} /> Curated Treasures
                                </div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                                    National Heritage Spotlights
                                </h2>
                            </div>
                            <Link
                                href="/heritage"
                                className="inline-flex items-center gap-2 text-sm font-bold text-bd-green dark:text-emerald-400 hover:text-bd-red transition-colors"
                            >
                                <span>Browse all {isLoading ? "…" : `${totalFacts}+`} items</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredTreasures.map((fact) => (
                                <motion.div
                                    key={fact.id}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => handlePreviewFact(fact)}
                                    className="group cursor-pointer bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-bd-green/40 dark:hover:border-emerald-500/40 hover:shadow-premium transition-colors duration-300 flex flex-col"
                                >
                                    <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                                        <Image
                                            src={fact.image || `/images/facts/${fact.id}.jpg`}
                                            alt={fact.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                        />
                                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/20">
                                            {fact.category}
                                        </div>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-black text-base text-slate-900 dark:text-white mb-2 group-hover:text-bd-green dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                                {fact.title}
                                            </h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                                {fact.description}
                                            </p>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between text-xs font-bold text-bd-green dark:text-emerald-400 group-hover:text-bd-red transition-colors pt-3 border-t border-slate-100 dark:border-slate-800">
                                            <span>Read Story</span>
                                            <Eye size={14} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ) : null}

                {/* Direct Action Banners */}
                <div className="mt-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Heritage Gallery Banner */}
                    <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-bd-green-dark via-[#004D38] to-[#002B1F] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-emerald-600/30"
                    >
                        <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300 mb-2 block">
                                Digital Archive
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black mb-3">
                                Heritage Gallery
                            </h3>
                            <p className="text-sm text-emerald-100/80 leading-relaxed mb-6 font-normal">
                                Filter through historical eras, GI products, monuments, and UNESCO World Heritage locations.
                            </p>
                        </div>
                        <Link href="/heritage">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-amber-300 text-bd-green-dark rounded-2xl font-black text-xs uppercase tracking-widest transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                            >
                                <span>Explore Gallery</span>
                                <ArrowRight size={14} />
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Bengali Kitchen Banner */}
                    <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-bd-red-dark via-[#990C1B] to-[#59070F] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-rose-600/30"
                    >
                        <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-rose-300 mb-2 block">
                                Culinary Heritage
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black mb-3">
                                Bengali Kitchen
                            </h3>
                            <p className="text-sm text-rose-100/80 leading-relaxed mb-6 font-normal">
                                Discover authentic step-by-step recipes, traditional spices, and timeless Bengali food culture.
                            </p>
                        </div>
                        <Link href="/foods">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-amber-300 text-bd-red-dark rounded-2xl font-black text-xs uppercase tracking-widest transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                            >
                                <span>Browse Recipes</span>
                                <ArrowRight size={14} />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Fact Detail Modal */}
            <FactModal
                fact={selectedFact}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}
