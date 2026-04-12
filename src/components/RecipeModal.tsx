"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Users, Heart, Share2, MapPin } from "lucide-react";
import { Recipe } from "@/data/recipes";

interface RecipeModalProps {
    recipe: Recipe | null;
    isOpen: boolean;
    onClose: () => void;
}

export function RecipeModal({ recipe, isOpen, onClose }: RecipeModalProps) {
    if (!recipe) return null;

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
                        className="relative w-full max-w-4xl bg-gradient-to-br from-white/80 to-white/70 dark:from-gray-800/80 dark:to-gray-900/70 backdrop-blur-2xl border border-white/20 dark:border-gray-700/50 rounded-3xl shadow-2xl flex flex-col md:flex-row max-h-[95vh]"
                    >
                        {/* Ornate Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 z-[110] w-10 h-10 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/70 text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 shadow-lg backdrop-blur-md group"
                        >
                            <X
                                size={22}
                                className="transition-transform duration-300 group-hover:rotate-90"
                            />
                        </button>

                        {/* Left: Image Section (Side Panel Tone) */}
                        <div className="relative w-full md:w-5/12 h-64 md:h-auto bg-gray-200 dark:bg-gray-700 overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-t-none flex-shrink-0">
                            {recipe.image && (
                                <motion.img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut",
                                    }}
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
                            
                            {/* Overlay Badge */}
                            <div className="absolute bottom-4 left-4">
                                <div className="px-4 py-1.5 bg-bd-red text-white text-xs font-black rounded-full shadow-lg uppercase tracking-wider">
                                    Gourmet Select
                                </div>
                            </div>
                        </div>

                        {/* Right: Content Section */}
                        <div className="flex-1 p-8 flex flex-col overflow-y-auto custom-scrollbar">
                            <div className="flex items-center gap-3 mb-4 text-[10px] md:text-xs">
                                <span className="px-3 py-1 bg-bd-green/10 text-bd-green font-bold rounded-full uppercase tracking-wider">
                                    Traditional Recipe
                                </span>
                                <span className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest border-l border-gray-300 dark:border-gray-700 pl-3">
                                    Bengali Kitchen
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-gray-800 dark:text-white mb-3 leading-tight">
                                {recipe.title}
                            </h2>

                            <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg italic border-l-4 border-bd-green/30 pl-4 py-1">
                                "{recipe.description}"
                            </p>

                            {/* Stats Strip */}
                            <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-8 py-3 border-y border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-bd-red" />
                                    <span>{recipe.prepTime || "30 MIN"}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={16} className="text-bd-green" />
                                    <span>{recipe.serves || "4 PERSONS"}</span>
                                </div>
                            </div>

                            {/* Point by Point Sections */}
                            <div className="space-y-10">
                                {/* Ingredients */}
                                <div>
                                    <h4 className="flex items-center gap-3 text-sm font-black text-bd-green mb-5 uppercase tracking-widest">
                                        <span className="w-8 h-[2px] bg-bd-green" />
                                        Ingredients
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {recipe.ingredients.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-start gap-3 group"
                                            >
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bd-green/40 group-hover:bg-bd-red transition-colors" />
                                                <span className="text-gray-700 dark:text-gray-300 text-sm leading-tight">
                                                    {item}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Preparation */}
                                <div>
                                    <h4 className="flex items-center gap-3 text-sm font-black text-bd-red mb-5 uppercase tracking-widest">
                                        <span className="w-8 h-[2px] bg-bd-red" />
                                        Preparation
                                    </h4>
                                    <div className="space-y-5">
                                        {recipe.instructions.map((step, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 + idx * 0.1 }}
                                                className="flex gap-4"
                                            >
                                                <span className="flex-none w-7 h-7 rounded-lg bg-bd-green text-white text-[10px] font-black flex items-center justify-center shadow-md rotate-3 group-hover:rotate-0 transition-transform">
                                                    {(idx + 1).toString().padStart(2, "0")}
                                                </span>
                                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pt-1">
                                                    {step}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Action Footer (matching FactModal) */}
                            <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-2 hover:text-bd-red transition-colors cursor-pointer group">
                                    <Heart size={18} className="group-hover:fill-bd-red transition-all" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Save</span>
                                </div>
                                <div className="flex items-center gap-2 hover:text-bd-green transition-colors cursor-pointer">
                                    <Share2 size={18} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Share</span>
                                </div>
                                <div className="flex items-center gap-2 hover:text-bd-gold transition-colors cursor-pointer">
                                    <MapPin size={18} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Origin</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            )}
        </AnimatePresence>
    );
}
