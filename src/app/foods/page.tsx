"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { recipes, Recipe } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeModal } from "@/components/RecipeModal";
import { UtensilsCrossed, Flame, Leaf, Coffee } from "lucide-react";

/**
 * Bengali Kitchen page showcasing traditional preparations.
 * Features a grid of interactive RecipeCards that open a modal.
 */
export default function FoodsPage() {
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-bd-green-soft via-white to-bd-red-soft pb-16">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-bd-green to-bd-green-dark py-14 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 border-8 border-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center text-white"
                    >
                        <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                            <UtensilsCrossed size={32} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Traditional Kitchen
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl font-medium">
                            From the pungent Mustard Hilsa to the royal Kacchi
                            Biryani, discover the authentic flavors that define
                            the soul of Bangladesh.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Category Filters (Sticky) */}
                <div className="sticky top-20 z-40 flex flex-wrap justify-center gap-3 py-6 bg-white/80 backdrop-blur-xl mb-8 border-b border-bd-green/10">
                    {[
                        { label: "Popular Snacks", icon: Flame },
                        { label: "Royal Meals", icon: Coffee },
                        { label: "Sweet Treats", icon: Leaf },
                    ].map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="flex items-center justify-center gap-2 px-6 py-2 min-h-[44px] bg-white/90 rounded-2xl shadow-sm border-2 border-bd-green/15 font-black text-xs uppercase tracking-widest text-bd-green hover:text-bd-red hover:border-bd-red/40 hover:bg-bd-red/5 transition-all cursor-pointer"
                        >
                            <cat.icon size={16} className="text-bd-red" />
                            {cat.label}
                        </motion.div>
                    ))}
                </div>

                {/* Recipes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                            onClick={() => setSelectedRecipe(recipe)}
                        />
                    ))}
                </div>
            </div>

            <RecipeModal
                recipe={selectedRecipe}
                isOpen={selectedRecipe !== null}
                onClose={() => setSelectedRecipe(null)}
            />
        </div>
    );
}
