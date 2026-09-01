"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SpinWheel } from "@/components/SpinWheel";
import { FactModal } from "@/components/FactModal";
import { Fact } from "@/data/facts";
import { useFacts } from "@/hooks/useFacts";
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
 * and immersive cultural discovery.
 */
export default function Home() {
    const { data: factsResponse, isLoading } = useFacts({ limit: 50 });
    const facts = useMemo(() => factsResponse?.data || [], [factsResponse?.data]);

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
        <div className="min-h-screen bg-gradient-to-b from-bd-green-soft/40 via-white to-bd-red-soft/30 overflow-x-hidden">
            {/* Contained Performance-Optimized Ambient Glow Layers */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden contain-paint">
                <div className="absolute top-[-10%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-bd-green/10 to-transparent rounded-full blur-3xl transform-gpu" />
                <div className="absolute bottom-[-10%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-bd-red/10 to-transparent rounded-full blur-3xl transform-gpu" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-amber-200/10 via-bd-green/5 to-bd-red/5 rounded-full blur-3xl transform-gpu" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-6 pb-20">
                {/* Hero Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-6">
                    {/* Subtle Bangladesh Tricolor Top Bar */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-1 w-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-bd-green via-bd-red to-bd-green"
                    />

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-4"
                    >
                        Win a Piece of{" "}
                        <span className="text-bd-green inline-block relative">
                            Bangladesh
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-bd-green via-bd-red to-bd-green rounded-full opacity-60" />
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Spin the wheel to explore breathtaking historical milestones, GI
                        products, and ancient treasures from across Bangladesh.
                    </motion.p>
                </div>

                {/* Spin Wheel Interactive Centerpiece */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 90, damping: 20 }}
                    className="relative z-10 my-4"
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-xl mx-auto mt-6 p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border-2 border-bd-green/30 shadow-xl flex items-center justify-between gap-4"
                    >
                        <div className="flex items-center gap-3.5 min-w-0">
                            <div className="w-12 h-12 rounded-xl bg-bd-green/10 text-bd-green flex items-center justify-center flex-shrink-0 text-2xl">
                                🏆
                            </div>
                            <div className="min-w-0">
                                <span className="text-[10px] font-black uppercase tracking-widest text-bd-green">
                                    Latest Discovery
                                </span>
                                <h4 className="font-black text-gray-900 dark:text-white truncate text-sm sm:text-base">
                                    {lastSpunFact.title}
                                </h4>
                            </div>
                        </div>
                        <button
                            onClick={() => handlePreviewFact(lastSpunFact)}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bd-green hover:bg-bd-green-dark text-white text-xs font-bold transition-all shadow-md flex-shrink-0 cursor-pointer"
                        >
                            <Eye size={14} />
                            <span>View Story</span>
                        </button>
                    </motion.div>
                )}

                {/* Cultural Pillars Grid */}
                <div className="mt-20 max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-bd-red mb-2">
                            <Sparkles size={14} /> Pillars of Bengal
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                            Explore By Cultural Pillars
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: History,
                                title: "Language & Freedom",
                                desc: "From the 1952 Language Movement martyrs to 1971 Liberation War victory.",
                                badge: "History",
                                color: "bd-green",
                                href: "/heritage",
                            },
                            {
                                icon: Landmark,
                                title: "GI Masterpieces",
                                desc: "Centuries-old Jamdani weaves, royal Muslin, Nakshi Kantha, and Padma Hilsa.",
                                badge: "GI Heritage",
                                color: "amber-500",
                                href: "/heritage",
                            },
                            {
                                icon: Globe,
                                title: "Nature & Rivers",
                                desc: "The Sundarbans mangrove forest, Cox's Bazar beach, and lush tea gardens.",
                                badge: "Geography",
                                color: "emerald-600",
                                href: "/heritage",
                            },
                            {
                                icon: Utensils,
                                title: "Bengali Kitchen",
                                desc: "Royal Kacchi Biryani, steamed Ilish, crispy Fuchka, and delicate Pitha sweets.",
                                badge: "Culinary",
                                color: "bd-red",
                                href: "/foods",
                            },
                        ].map((pillar, i) => {
                            const IconComponent = pillar.icon;
                            return (
                                <Link key={i} href={pillar.href} className="group">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + i * 0.1 }}
                                        className="h-full p-6 sm:p-7 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-xl border border-gray-200/80 dark:border-neutral-800 hover:border-bd-green/40 dark:hover:border-bd-green/50 rounded-3xl group-hover:shadow-[0_15px_35px_rgba(0,106,78,0.12)] transition-all duration-300 group-hover:-translate-y-1.5 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-5">
                                                <div className="w-12 h-12 rounded-2xl bg-bd-green/10 text-bd-green group-hover:bg-bd-red group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-inner">
                                                    <IconComponent size={24} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
                                                    {pillar.badge}
                                                </span>
                                            </div>
                                            <h3 className="font-black text-lg text-gray-900 dark:text-white mb-2 group-hover:text-bd-green transition-colors">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                {pillar.desc}
                                            </p>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between text-xs font-bold text-bd-green group-hover:text-bd-red transition-colors">
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
                    <div className="mt-20 max-w-6xl mx-auto py-12 flex flex-col items-center justify-center">
                        <Loader size="lg" text="Loading National Treasures..." />
                    </div>
                ) : featuredTreasures.length > 0 ? (
                    <div className="mt-20 max-w-6xl mx-auto">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                            <div>
                                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-bd-green mb-2">
                                    <Award size={14} /> Curated Treasures
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                                    National Heritage Spotlights
                                </h2>
                            </div>
                            <Link
                                href="/heritage"
                                className="inline-flex items-center gap-2 text-sm font-bold text-bd-green hover:text-bd-red transition-colors"
                            >
                                <span>Browse all 50+ items</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredTreasures.map((fact) => (
                                <div
                                    key={fact.id}
                                    onClick={() => handlePreviewFact(fact)}
                                    className="group cursor-pointer bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/80 dark:border-neutral-800 hover:border-bd-green/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                >
                                    <div className="relative h-44 w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
                                        <Image
                                            src={fact.image || `/images/facts/${fact.id}.jpg`}
                                            alt={fact.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                        />
                                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider">
                                            {fact.category}
                                        </div>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-black text-base text-gray-900 dark:text-white mb-2 group-hover:text-bd-green transition-colors line-clamp-1">
                                                {fact.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                                {fact.description}
                                            </p>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between text-xs font-bold text-bd-green group-hover:text-bd-red transition-colors">
                                            <span>Read Details</span>
                                            <Eye size={14} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}

                {/* Direct Action Banners */}
                <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Heritage Gallery Banner */}
                    <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-bd-green via-emerald-800 to-emerald-950 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200 mb-2 block">
                                Digital Archive
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black mb-3">
                                Heritage Gallery
                            </h3>
                            <p className="text-sm text-emerald-100 leading-relaxed mb-6">
                                Filter through historical eras, GI products, monuments, and UNESCO World Heritage locations.
                            </p>
                        </div>
                        <Link href="/heritage">
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-amber-300 text-bd-green rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl cursor-pointer">
                                <span>Explore Gallery</span>
                                <ArrowRight size={14} />
                            </button>
                        </Link>
                    </div>

                    {/* Bengali Kitchen Banner */}
                    <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-bd-red via-red-600 to-red-950 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-red-200 mb-2 block">
                                Culinary Heritage
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black mb-3">
                                Bengali Kitchen
                            </h3>
                            <p className="text-sm text-red-100 leading-relaxed mb-6">
                                Discover authentic step-by-step recipes, traditional spices, and timeless Bengali food culture.
                            </p>
                        </div>
                        <Link href="/foods">
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-amber-300 text-bd-red rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl cursor-pointer">
                                <span>Browse Recipes</span>
                                <ArrowRight size={14} />
                            </button>
                        </Link>
                    </div>
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

