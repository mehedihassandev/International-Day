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
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-premium flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                        >
                            <X size={20} />
                        </button>

                        {/* Left: Image Section */}
                        <div className="relative w-full md:w-5/12 h-56 md:h-auto bg-earth-light/20 overflow-hidden flex-shrink-0">
                            {fact.image ? (
                                <img
                                    src={fact.image}
                                    alt={fact.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <>
                                    {/* Fallback pattern */}
                                    <div className="absolute inset-0 bd-gradient opacity-10" />
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="w-full h-full border-4 border-dashed border-bd-green/20 rounded-2xl flex items-center justify-center text-center">
                                            <div className="space-y-2">
                                                <span className="text-4xl">
                                                    🇧🇩
                                                </span>
                                                <p className="text-[10px] font-bold text-bd-green px-4 uppercase tracking-wider">
                                                    {fact.category}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Overlay Badge */}
                            <div className="absolute bottom-4 left-4">
                                <div className="px-3 py-1 bg-bd-red text-white text-[10px] font-black rounded-lg shadow-lg uppercase tracking-tighter">
                                    NEW DISCOVERY
                                </div>
                            </div>
                        </div>

                        {/* Right: Content Section */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2 py-1 bg-bd-green/10 text-bd-green text-[10px] font-black rounded-md uppercase">
                                    {fact.category}
                                </span>
                                <div className="h-1 w-1 bg-muted-foreground rounded-full" />
                                <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                                    BD HERITAGE
                                </span>
                            </div>

                            <h2 className="text-2xl font-black text-foreground mb-4 leading-tight">
                                {fact.title}
                            </h2>

                            <p className="text-lg text-bd-green font-bold mb-6 italic leading-relaxed">
                                "{fact.description}"
                            </p>

                            <div className="flex-1 overflow-y-auto pr-2 mb-8 max-h-[300px] custom-scrollbar">
                                <p className="text-muted-foreground leading-relaxed">
                                    {fact.details}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
