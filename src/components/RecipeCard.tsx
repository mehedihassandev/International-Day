"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Users, ArrowUpRight, Sparkles } from "lucide-react";
import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
    recipe: Recipe;
    onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
    const fallbackSrc = `/images/recipes/${recipe.id}.jpg`;
    const [imgSrc, setImgSrc] = useState(recipe.image || fallbackSrc);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className="group relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-emerald-950/10 dark:border-white/10 hover:border-bd-green/40 dark:hover:border-emerald-500/40 rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col cursor-pointer"
        >
            {/* Top Accent Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-bd-green via-bd-red to-bd-gold opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Image Container */}
            <div className="w-full h-52 sm:h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <Image
                    src={imgSrc}
                    alt={recipe.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={() => setImgSrc(fallbackSrc)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Floating Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-black rounded-xl uppercase tracking-wider border border-white/20 shadow-sm flex items-center gap-1">
                        <Sparkles size={11} className="text-amber-400" />
                        {recipe.category || "Traditional"}
                    </span>
                </div>

                {recipe.images && recipe.images.length > 1 && (
                    <div className="absolute top-3.5 right-3.5">
                        <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-xl border border-white/20 shadow-sm flex items-center gap-1">
                            📸 {recipe.images.length}
                        </span>
                    </div>
                )}

                {/* Quick View Corner Icon */}
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-900/90 text-bd-green dark:text-emerald-400 backdrop-blur-md flex items-center justify-center shadow-md group-hover:bg-bd-red group-hover:text-white transition-all duration-300 scale-90 group-hover:scale-100">
                    <ArrowUpRight size={16} />
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-bd-green dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                        {recipe.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
                        {recipe.description}
                    </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    {/* Cooking Specs */}
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-bd-red" />
                            <span>{recipe.prepTime || "30 min"}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Users size={14} className="text-bd-green" />
                            <span>{recipe.serves || "4 servings"}</span>
                        </div>
                    </div>

                    {/* Step & Ingredient Count */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        <span>{recipe.ingredients.length} Ingredients</span>
                        <span>{recipe.instructions.length} Steps</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default RecipeCard;
