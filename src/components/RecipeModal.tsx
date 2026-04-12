"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Users } from "lucide-react";
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
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-premium flex flex-col max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                        >
                            <X size={20} />
                        </button>

                        {/* Image Section */}
                        <div className="relative w-full h-64 bg-earth-light/20 overflow-hidden flex-shrink-0">
                            {recipe.image && (
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-8 flex flex-col overflow-y-auto">
                            <h2 className="text-3xl font-black text-foreground mb-4 leading-tight">
                                {recipe.title}
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                {recipe.description}
                            </p>

                            <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-bd-red" />
                                    <span>{recipe.prepTime || "30 MIN"}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users
                                        size={16}
                                        className="text-bd-green"
                                    />
                                    <span>{recipe.serves || "4 PERSONS"}</span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-bold text-bd-green mb-4">
                                        Ingredients
                                    </h4>
                                    <ul className="space-y-2">
                                        {recipe.ingredients.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2 text-foreground/80"
                                            >
                                                <span className="text-bd-red mt-1">
                                                    •
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-bd-green mb-4">
                                        Preparation
                                    </h4>
                                    <ol className="space-y-4">
                                        {recipe.instructions.map(
                                            (step, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex gap-3"
                                                >
                                                    <span className="flex-none w-6 h-6 rounded-full bg-bd-green text-white text-xs font-bold flex items-center justify-center mt-1">
                                                        {idx + 1}
                                                    </span>
                                                    <p className="text-foreground/80">
                                                        {step}
                                                    </p>
                                                </li>
                                            ),
                                        )}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
