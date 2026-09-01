"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, Clock, Users, Maximize2 } from "lucide-react";
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
            whileHover={{ y: -5 }}
            onClick={onClick}
            className="group relative bg-white/90 backdrop-blur-xl border-2 border-bd-green/10 hover:border-bd-red/40 hover:bg-bd-red/5 hover:shadow-[0_10px_40px_-10px_rgba(244,42,65,0.15)] rounded-3xl overflow-hidden shadow-soft transition-all duration-500 flex flex-col cursor-pointer"
        >
            <div className="h-1.5 w-full bg-gradient-to-r from-bd-green via-bd-red to-bd-green" />

            <div className="w-full h-52 md:h-60 overflow-hidden bg-gray-200 dark:bg-gray-700 relative">
                <Image
                    src={imgSrc}
                    alt={recipe.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    onError={() => setImgSrc(fallbackSrc)}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-2xl text-bd-green flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                        <Maximize2 size={24} />
                    </div>
                </div>

                <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-bd-red text-white text-[10px] font-black rounded-lg shadow-lg uppercase tracking-widest backdrop-blur-md">
                        Top Choice
                    </span>
                    {recipe.images && recipe.images.length > 1 && (
                        <span className="px-2.5 py-1 bg-black/60 text-white text-[10px] font-bold rounded-lg shadow-lg backdrop-blur-md flex items-center gap-1 border border-white/20">
                            📸 {recipe.images.length}
                        </span>
                    )}
                </div>
            </div>

            <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-bd-green/5 text-bd-green text-[10px] font-black rounded-full uppercase tracking-widest border border-bd-green/10">
                        Authentic
                    </span>
                    <div className="h-9 w-9 bg-bd-red/5 rounded-xl flex items-center justify-center text-bd-red group-hover:bg-bd-red group-hover:text-white transition-colors duration-300">
                        <Utensils size={16} />
                    </div>
                </div>

                <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-3 leading-tight group-hover:text-bd-red transition-colors">
                    {recipe.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed mb-6 italic">
                    &ldquo;{recipe.description}&rdquo;
                </p>

                <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-bd-green" />
                            {recipe.ingredients.length} Ingredients
                        </span>
                        <span className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-bd-red" />
                            {recipe.instructions.length} Steps
                        </span>
                    </div>

                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-300 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-bd-red" />
                            <span>{recipe.prepTime || "30 MIN"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users size={14} className="text-bd-green" />
                            <span>{recipe.serves || "4 PERSONS"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
