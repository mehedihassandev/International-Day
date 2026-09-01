"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Recipe } from "@/data/recipes";
import { useRecipes } from "@/hooks/useRecipes";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeModal } from "@/components/RecipeModal";
import { Loader } from "@/components/Loader";
import { UtensilsCrossed, Flame, Leaf, Coffee, Search, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

const FOOD_CATEGORIES = [
    { label: "All Delicacies", value: "All", icon: UtensilsCrossed },
    { label: "Popular Snacks", value: "Popular Snacks", icon: Flame },
    { label: "Royal Meals", value: "Royal Meals", icon: Coffee },
    { label: "Sweet Treats", value: "Sweet Treats", icon: Leaf },
] as const;

/**
 * Bengali Kitchen page powered by TanStack Query and MongoDB API.
 * The API is always the single source of truth.
 */
export default function FoodsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    const { data: recipesResponse, isLoading } = useRecipes({
        category: selectedCategory === "All" ? undefined : selectedCategory,
        search: searchQuery.trim() || undefined,
        limit: 100,
    });

    const recipes = useMemo(() => recipesResponse?.data || [], [recipesResponse?.data]);

    const handleClearSearch = () => {
        setSearchQuery("");
        setSelectedCategory("All");
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Unified Hero Header */}
            <div className="bg-gradient-to-r from-bd-green-dark via-[#004D38] to-[#002B1F] py-14 sm:py-18 relative overflow-hidden text-white border-b border-emerald-700/30">
                {/* Subtle Ambient Shapes */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-bd-red/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
                            <UtensilsCrossed size={14} className="text-amber-400" />
                            <span>Authentic Culinary Heritage</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight">
                            Bengali <span className="text-rose-400">Kitchen</span>
                        </h1>
                        <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal max-w-2xl">
                            From the royal aroma of Dhaka Kacchi Biryani to steamed Mustard Ilish
                            and timeless winter Pithas, savor the legendary gastronomy of Bangladesh.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8 sm:pt-10">
                {/* Search & Category Filter Controls */}
                <div className="max-w-4xl mx-auto mb-10 space-y-5">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search recipes by name, spices, ingredients, or dish type..."
                            className="w-full pl-11 pr-10 py-3.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 focus:border-bd-green dark:focus:border-emerald-500 focus:outline-none text-slate-900 dark:text-white font-medium text-sm shadow-soft transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                                aria-label="Clear search"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5">
                        {FOOD_CATEGORIES.map((cat) => {
                            const isActive = selectedCategory === cat.value;
                            const Icon = cat.icon;
                            return (
                                <motion.button
                                    key={cat.value}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(cat.value)}
                                    className={cn(
                                        "flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border select-none",
                                        isActive
                                            ? "bg-bd-red text-white border-bd-red shadow-md shadow-rose-950/20 scale-105"
                                            : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:border-bd-red/40 hover:text-bd-red"
                                    )}
                                >
                                    <Icon size={14} className={isActive ? "text-white" : "text-bd-red"} />
                                    <span>{cat.label}</span>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Results Counter */}
                    {!isLoading && recipes.length > 0 && (
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1 pt-1">
                            <span>
                                Showing <strong className="text-slate-900 dark:text-white">{recipes.length}</strong> {selectedCategory === "All" ? "authentic recipes" : `${selectedCategory}`}
                            </span>
                            {(searchQuery || selectedCategory !== "All") && (
                                <button
                                    onClick={handleClearSearch}
                                    className="text-bd-red hover:underline text-xs font-bold cursor-pointer"
                                >
                                    Reset Filters
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Recipes Grid */}
                {isLoading ? (
                    <div className="py-20 flex flex-col items-center justify-center">
                        <Loader size="lg" text="Preparing Bengali Kitchen Recipes..." fullHeight />
                    </div>
                ) : recipes.length === 0 ? (
                    <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto shadow-soft p-8">
                        <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-bd-red flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">No recipes found</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                            No dishes matched &ldquo;{searchQuery || selectedCategory}&rdquo;. Try another dish name or ingredient.
                        </p>
                        <button
                            onClick={handleClearSearch}
                            className="px-5 py-2.5 bg-bd-red hover:bg-bd-red-hover text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                        >
                            Reset Search
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

            {/* Recipe Modal */}
            <RecipeModal
                recipe={selectedRecipe}
                isOpen={selectedRecipe !== null}
                onClose={() => setSelectedRecipe(null)}
            />
        </div>
    );
}
