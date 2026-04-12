"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { X, MapPin, Tag, Share2, Heart } from "lucide-react";
import { Fact } from "@/data/facts";
import { cn } from "@/lib/utils";

interface FactModalProps {
    fact: Fact | null;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Premium Fact Modal for revealing spin results.
 * Features glassmorphism, smooth entrance, and cultural aesthetics.
 */
export function FactModal({ fact, isOpen, onClose }: FactModalProps) {
    const router = useRouter();

    if (!fact) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-xl"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="relative w-full max-w-2xl bg-gradient-to-br from-white/80 to-white/70 dark:from-gray-800/80 dark:to-gray-900/70 backdrop-blur-2xl border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-2xl flex flex-col md:flex-row max-h-[95vh]"
                    >
                        {/* Ornate Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/70 text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 shadow-lg backdrop-blur-md group"
                        >
                            <X
                                size={22}
                                className="transition-transform duration-300 group-hover:rotate-90"
                            />
                        </button>

                        {/* Left: Image Section */}
                        <div className="relative w-full md:w-5/12 h-64 md:h-auto bg-gray-200 dark:bg-gray-700 overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-t-none flex-shrink-0">
                            <AnimatePresence>
                                {fact.image ? (
                                    <motion.img
                                        key={fact.image}
                                        src={fact.image}
                                        alt={fact.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeOut",
                                        }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900 dark:to-teal-800 flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <span className="text-6xl">🇧🇩</span>
                                            <p className="text-sm font-bold text-emerald-800 dark:text-emerald-200 mt-2">
                                                {fact.category}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>

                            {/* Overlay Badge */}
                            <div className="absolute bottom-4 left-4">
                                <div className="px-4 py-1.5 bg-rose-500 text-white text-xs font-black rounded-full shadow-lg uppercase tracking-wider">
                                    Discovery
                                </div>
                            </div>
                        </div>

                        {/* Right: Content Section */}
                        <div className="flex-1 p-8 flex flex-col overflow-y-auto custom-scrollbar">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full uppercase">
                                    {fact.category}
                                </span>
                                <span className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase">
                                    BANGLADESHI HERITAGE
                                </span>
                            </div>

                            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-3 leading-tight">
                                {fact.title}
                            </h2>

                            <p className="text-gray-500 dark:text-gray-400 mb-6 text-md italic">
                                "{fact.description}"
                            </p>

                            <div className="flex-1 overflow-y-auto pr-2 -mr-2 mb-6 custom-scrollbar">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base whitespace-pre-wrap">
                                    {fact.details}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/20 dark:border-gray-700/50 flex items-center justify-between text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-3 hover:text-rose-500 transition-colors cursor-pointer">
                                    <Heart size={18} />
                                    <span className="text-sm font-semibold">
                                        Like
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 hover:text-emerald-500 transition-colors cursor-pointer">
                                    <Share2 size={18} />
                                    <span className="text-sm font-semibold">
                                        Share
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 hover:text-blue-500 transition-colors cursor-pointer">
                                    <MapPin size={18} />
                                    <span className="text-sm font-semibold">
                                        Location
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
