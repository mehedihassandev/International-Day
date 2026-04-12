"use client";

import React from "react";
import { motion } from "framer-motion";
import { Utensils, Clock, Users, Maximize2 } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
    recipe: Recipe;
    onClick: () => void;
}

/**
 * Premium Recipe Card that triggers a modal.
 * Features a national color theme and elegant layout.
 */
export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={onClick}
            className="group relative bg-white rounded-2xl border overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col cursor-pointer"
        >
            {/* Top Banner (National Green) */}
            <div className="h-1 w-full bg-bd-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Thumbnail Image */}
            {recipe.image && (
                <div className="w-full h-48 md:h-56 overflow-hidden bg-earth-soft relative">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg text-bd-green flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                            <Maximize2 size={24} />
                        </div>
                    </div>
                </div>
            )}

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-bd-green/10 text-bd-green text-[10px] font-black rounded-lg uppercase tracking-wider">
                            Traditional
                        </span>
                    </div>
                    <div className="h-10 w-10 bg-bd-red/10 rounded-full flex items-center justify-center text-bd-red">
                        <Utensils size={18} />
                    </div>
                </div>

                <h3 className="text-2xl font-black text-foreground mb-3 leading-tight group-hover:text-bd-green transition-colors">
                    {recipe.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-6 flex-grow">
                    {recipe.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-auto pt-4 border-t">
                    <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-bd-red" />
                        <span>{recipe.prepTime || "30 MIN"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Users size={14} className="text-bd-green" />
                        <span>{recipe.serves || "4 PERSONS"}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
