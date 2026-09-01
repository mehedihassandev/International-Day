"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Recipe } from "@/data/recipes";
import { useRecipes } from "@/hooks/useRecipes";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeModal } from "@/components/RecipeModal";
import { Skeleton } from "@/components/ui/skeleton";
import { UtensilsCrossed, Flame, Leaf, Coffee, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const FOOD_CATEGORIES = [
    { label: "All Items", value: "All", icon: UtensilsCrossed },
    { label: "Popular Snacks", value: "Popular Snacks", icon: Flame },
    { label: "Royal Meals", value: "Royal Meals", icon: Coffee },
    { label: "Sweet Treats", value: "Sweet Treats", icon: Leaf },
];

/**
 * Bengali Kitchen page powered by TanStack Query and MongoDB.
 * Features dynamic data fetching, category filtering, and search.
 */
export default function FoodsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    const { data: recipesResponse, isLoading } = useRecipes({
        category: selectedCategory === "All" ? undefined : selectedCategory,
        search: searchQuery.trim() || undefined,
        limit: 100,
    });

    const recipes = recipesResponse?.data || [];

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
                        <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md shadow-lg">
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
                {/* Search & Category Filter Controls (Sticky) */}
                <div className="sticky top-20 z-40 py-4 bg-white/85 backdrop-blur-xl border-b border-bd-green/10 mb-8 space-y-4">
                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search recipes by name, ingredient, or delicacy..."
                            className="w-full pl-11 pr-4 py-2.5 bg-white rounded-xl border-2 border-bd-green/20 focus:border-bd-red focus:outline-none text-sm font-medium shadow-sm transition-all"
                        />
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {FOOD_CATEGORIES.map((cat) => {
                            const isActive = selectedCategory === cat.value;
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.value}
                                    onClick={() => setSelectedCategory(cat.value)}
                                    className={cn(
                                        "flex items-center justify-center gap-2 px-6 py-2 min-h-[44px] rounded-2xl shadow-sm border-2 font-black text-xs uppercase tracking-widest transition-all cursor-pointer",
                                        isActive
                                            ? "bg-bd-red text-white border-bd-red shadow-md shadow-bd-red/20 scale-105"
                                            : "bg-white/90 text-bd-green border-bd-green/15 hover:text-bd-red hover:border-bd-red/40 hover:bg-bd-red/5"
                                    )}
                                >
                                    <Icon size={16} className={isActive ? "text-white" : "text-bd-red"} />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Recipes Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-white/80 rounded-2xl border border-bd-green/10 p-4 space-y-4 overflow-hidden"
                            >
                                <Skeleton className="w-full h-56 rounded-xl" />
                                <Skeleton className="w-3/4 h-6 rounded-md" />
                                <Skeleton className="w-full h-14 rounded-md" />
                                <div className="flex gap-2">
                                    <Skeleton className="w-20 h-6 rounded-md" />
                                    <Skeleton className="w-20 h-6 rounded-md" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : recipes.length === 0 ? (
                    <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl border border-bd-green/10 max-w-lg mx-auto">
                        <Sparkles className="h-12 w-12 text-bd-red mx-auto mb-4 animate-pulse" />
                        <h3 className="text-xl font-bold text-foreground mb-2">No recipes found</h3>
                        <p className="text-muted-foreground text-sm">
                            Try searching for another dish or changing your selected category.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {recipes.map((recipe) => (
                                <RecipeCard
                                    key={recipe.id}
                                    recipe={recipe}
                                    onClick={() => setSelectedRecipe(recipe)}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            <RecipeModal
                recipe={selectedRecipe}
                isOpen={selectedRecipe !== null}
                onClose={() => setSelectedRecipe(null)}
            />
        </div>
    );
}
