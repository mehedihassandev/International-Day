"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Share2, Heart } from "lucide-react";
import { Fact } from "@/data/facts";

interface FactModalProps {
    fact: Fact | null;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Full-screen Fact Modal for revealing spin results.
 * Features Bangladesh green/red theme, immersive layout, and smooth animations.
 */
export function FactModal({ fact, isOpen, onClose }: FactModalProps) {
    if (!fact) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#004d39]/60 backdrop-blur-2xl"
                    />

                    {/* Centered Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{
                            duration: 0.45,
                            ease: [0.32, 0.72, 0, 1],
                        }}
                        className="relative w-full h-full md:h-[85vh] md:max-w-6xl bg-white dark:bg-gray-950 flex flex-col md:flex-row overflow-hidden shadow-2xl md:rounded-3xl"
                    >
                        {/* Top Green/Red Accent Bar (mobile) */}
                        <div className="md:hidden h-1.5 w-full bg-gradient-to-r from-bd-green via-bd-red to-bd-green flex-shrink-0" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-11 h-11 flex items-center justify-center bg-bd-green/90 hover:bg-bd-red text-white rounded-full transition-all duration-300 shadow-lg group"
                        >
                            <X
                                size={20}
                                className="transition-transform duration-300 group-hover:rotate-90"
                            />
                        </button>

                        {/* Left: Image Section */}
                        <div className="relative w-full md:w-[40%] h-[35vh] md:h-full flex-shrink-0 bg-bd-green/5">
                            <AnimatePresence>
                                {fact.image ? (
                                    <motion.img
                                        key={fact.image}
                                        src={fact.image}
                                        alt={fact.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut",
                                        }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-bd-green to-bd-green-dark flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <span className="text-8xl md:text-9xl">
                                                🇧🇩
                                            </span>
                                            <p className="text-lg font-black text-white/80 mt-4 uppercase tracking-[0.3em]">
                                                {fact.category}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>

                            {/* Green-Red gradient overlay at bottom / right */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bd-green/90 via-bd-green/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/10 pointer-events-none" />

                            {/* Category Badge on image */}
                            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
                                <div className="px-5 py-2 bg-bd-red text-white text-xs font-black rounded-full shadow-lg uppercase tracking-[0.2em] border border-white/20">
                                    🏆 Discovery
                                </div>
                                <div className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/20">
                                    {fact.category}
                                </div>
                            </div>
                        </div>

                        {/* Right: Content Section */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            {/* Green accent line at the top (desktop) */}
                            <div className="hidden md:block h-1.5 w-full bg-gradient-to-r from-bd-green via-bd-red to-bd-green" />

                            <div className="flex-1 p-6 md:p-10 lg:p-14 flex flex-col overflow-y-auto custom-scrollbar">
                                {/* Header Tags */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-4 py-1.5 bg-bd-green/10 text-bd-green text-xs font-black rounded-full uppercase tracking-[0.2em] border border-bd-green/20">
                                        {fact.category}
                                    </span>
                                    <span className="text-bd-red/60 text-xs font-black uppercase tracking-[0.2em] border-l-2 border-bd-red/30 pl-3">
                                        বাংলাদেশ
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-[1.15]">
                                    {fact.title}
                                </h2>

                                {/* Description Quote */}
                                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg md:text-xl italic border-l-4 border-bd-green pl-5 py-2 font-medium bg-bd-green/5 rounded-r-xl">
                                    &ldquo;{fact.description}&rdquo;
                                </p>

                                {/* Details Body */}
                                <div className="flex-1 mb-8">
                                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
                                        {fact.details}
                                    </p>
                                </div>

                                {/* Bottom Action Bar */}
                                <div className="mt-auto pt-6 border-t-2 border-bd-green/10 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-3 text-gray-500 hover:text-bd-red transition-colors cursor-pointer group">
                                        <div className="w-10 h-10 rounded-xl bg-bd-red/5 group-hover:bg-bd-red group-hover:text-white flex items-center justify-center transition-all">
                                            <Heart
                                                size={18}
                                                className="group-hover:fill-white transition-all"
                                            />
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-widest group-hover:text-bd-red transition-colors">
                                            Like
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-500 hover:text-bd-red transition-colors cursor-pointer group">
                                        <div className="w-10 h-10 rounded-xl bg-bd-green/5 group-hover:bg-bd-red group-hover:text-white flex items-center justify-center transition-all">
                                            <Share2
                                                size={18}
                                                className="group-hover:scale-110 transition-transform"
                                            />
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-widest group-hover:text-bd-red transition-colors">
                                            Share
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-500 hover:text-bd-red transition-colors cursor-pointer group">
                                        <div className="w-10 h-10 rounded-xl bg-bd-red/5 group-hover:bg-bd-red group-hover:text-white flex items-center justify-center transition-all">
                                            <MapPin
                                                size={18}
                                                className="group-hover:scale-110 transition-transform"
                                            />
                                        </div>
                                        <span className="text-sm font-black uppercase tracking-widest group-hover:text-bd-red transition-colors">
                                            Location
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
