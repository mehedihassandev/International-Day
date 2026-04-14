"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Users, Maximize2 } from "lucide-react";
import { Recipe } from "@/data/recipes";

interface RecipeModalProps {
    recipe: Recipe | null;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Full-screen Recipe Modal with Bangladesh green/red theme.
 * Features multiple images, fullscreen image viewer, immersive slide-up animation and cultural aesthetics.
 */
export function RecipeModal({ recipe, isOpen, onClose }: RecipeModalProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setSelectedImageIndex(0);
            setIsFullscreen(false);
        }
    }, [isOpen, recipe]);

    if (!recipe) return null;

    const images =
        recipe.images && recipe.images.length > 0
            ? recipe.images
            : recipe.image
              ? [recipe.image]
              : [];
    const currentImage = images[selectedImageIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#004d39]/60 backdrop-blur-2xl"
                    />

                    {/* Centered Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{
                            duration: 0.45,
                            ease: [0.32, 0.72, 0, 1],
                        }}
                        className="relative w-full h-full md:h-[85vh] md:max-w-6xl bg-white dark:bg-gray-950 flex flex-col md:flex-row overflow-hidden shadow-2xl md:rounded-3xl"
                    >
                        {/* Top Green/Red Accent Bar (mobile) */}
                        <div className="md:hidden h-1.5 w-full bg-gradient-to-r from-bd-green via-bd-red to-bd-green flex-shrink-0" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-11 h-11 flex items-center justify-center bg-bd-red/90 hover:bg-bd-red text-white rounded-full transition-all duration-300 shadow-lg group"
                        >
                            <X
                                size={20}
                                className="transition-transform duration-300 group-hover:rotate-90"
                            />
                        </button>

                        {/* Left: Image Section */}
                        <div className="relative w-full md:w-5/12 h-[35vh] md:h-full bg-bd-green/5 flex-shrink-0 flex flex-col">
                            <AnimatePresence mode="wait">
                                {currentImage ? (
                                    <motion.div
                                        key={currentImage}
                                        className="relative flex-1 cursor-pointer group"
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => setIsFullscreen(true)}
                                    >
                                        <Image
                                            src={currentImage}
                                            alt={recipe.title}
                                            fill
                                            priority
                                            className="object-cover w-full h-full"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                            <Maximize2 className="text-white w-10 h-10 drop-shadow-lg" />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="flex-1 bg-gradient-to-br from-bd-green to-bd-green-dark flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <span className="text-8xl md:text-9xl">
                                                🍲
                                            </span>
                                            <p className="text-lg font-black text-white/80 mt-4 uppercase tracking-[0.3em]">
                                                Recipe
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>

                            {/* Thumbnails */}
                            {images.length > 1 && (
                                <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/10">
                                    {images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImageIndex(idx);
                                            }}
                                            className={`relative w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                                                idx === selectedImageIndex
                                                    ? "ring-2 ring-bd-red scale-110"
                                                    : "opacity-60 hover:opacity-100"
                                            }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                fill
                                                className="object-cover w-full h-full"
                                                sizes="64px"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Green overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bd-green/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/5 pointer-events-none" />

                            {/* Overlay Badge */}
                            <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3">
                                <div className="px-5 py-2 bg-bd-red text-white text-xs font-black rounded-full shadow-lg uppercase tracking-[0.2em] border border-white/20">
                                    🍛 Gourmet Select
                                </div>
                            </div>
                        </div>

                        {/* Right: Content Section */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            {/* Green accent line at the top (desktop) */}
                            <div className="hidden md:block h-1.5 w-full bg-gradient-to-r from-bd-green via-bd-red to-bd-green" />

                            <div className="flex-1 p-6 md:p-10 lg:p-14 flex flex-col overflow-y-auto custom-scrollbar">
                                {/* Header Tags */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-4 py-1.5 bg-bd-green/10 text-bd-green font-black rounded-full uppercase tracking-[0.2em] text-xs border border-bd-green/20">
                                        Traditional Recipe
                                    </span>
                                    <span className="text-bd-red/60 font-black uppercase tracking-[0.2em] border-l-2 border-bd-red/30 pl-3 text-xs">
                                        বাংলার রান্না
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-[1.15]">
                                    {recipe.title}
                                </h2>

                                {/* Description Quote */}
                                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg md:text-xl italic border-l-4 border-bd-red pl-5 py-2 font-medium bg-bd-red/5 rounded-r-xl">
                                    &ldquo;{recipe.description}&rdquo;
                                </p>

                                {/* Stats Strip */}
                                <div className="flex items-center gap-8 text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-10 py-4 border-y-2 border-bd-green/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-bd-red/10 flex items-center justify-center">
                                            <Clock
                                                size={16}
                                                className="text-bd-red"
                                            />
                                        </div>
                                        <span>
                                            {recipe.prepTime || "30 MIN"}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-bd-green/10 flex items-center justify-center">
                                            <Users
                                                size={16}
                                                className="text-bd-green"
                                            />
                                        </div>
                                        <span>
                                            {recipe.serves || "4 PERSONS"}
                                        </span>
                                    </div>
                                </div>

                                {/* Ingredients & Preparation */}
                                <div className="space-y-10">
                                    {/* Ingredients */}
                                    <div>
                                        <h4 className="flex items-center gap-3 text-sm font-black text-bd-green mb-5 uppercase tracking-[0.2em]">
                                            <span className="w-10 h-[3px] bg-bd-green rounded-full" />
                                            Ingredients
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            {recipe.ingredients.map(
                                                (item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{
                                                            opacity: 0,
                                                            x: -10,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            x: 0,
                                                        }}
                                                        transition={{
                                                            delay: idx * 0.04,
                                                        }}
                                                        className="flex items-start gap-3 group"
                                                    >
                                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-bd-green/30 group-hover:bg-bd-red group-hover:scale-125 transition-all" />
                                                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-tight">
                                                            {item}
                                                        </span>
                                                    </motion.div>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    {/* Preparation */}
                                    <div>
                                        <h4 className="flex items-center gap-3 text-sm font-black text-bd-red mb-5 uppercase tracking-[0.2em]">
                                            <span className="w-10 h-[3px] bg-bd-red rounded-full" />
                                            Preparation
                                        </h4>
                                        <div className="space-y-5">
                                            {recipe.instructions.map(
                                                (step, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{
                                                            opacity: 0,
                                                            y: 10,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            delay:
                                                                0.15 +
                                                                idx * 0.08,
                                                        }}
                                                        className="flex gap-4 group"
                                                    >
                                                        <span className="flex-none w-8 h-8 rounded-lg bg-bd-green text-white text-[11px] font-black flex items-center justify-center shadow-md group-hover:bg-bd-red transition-colors">
                                                            {(idx + 1)
                                                                .toString()
                                                                .padStart(
                                                                    2,
                                                                    "0",
                                                                )}
                                                        </span>
                                                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pt-1.5">
                                                            {step}
                                                        </p>
                                                    </motion.div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Fullscreen Image Modal */}
                    <AnimatePresence>
                        {isFullscreen && currentImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[200] flex items-center justify-center bg-[#004d39]/80 backdrop-blur-2xl"
                                onClick={() => setIsFullscreen(false)}
                            >
                                <button
                                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 bg-white/10 hover:bg-bd-red text-white rounded-full backdrop-blur-md transition-colors shadow-2xl"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsFullscreen(false);
                                    }}
                                >
                                    <X size={24} />
                                </button>

                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                    className="relative w-[95vw] h-[90vh]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={currentImage}
                                        alt={recipe.title}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        sizes="100vw"
                                        quality={90}
                                    />
                                </motion.div>

                                {/* Thumbnails in fullscreen mode */}
                                {images.length > 1 && (
                                    <div
                                        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/5"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() =>
                                                    setSelectedImageIndex(idx)
                                                }
                                                className={`w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                                                    idx === selectedImageIndex
                                                        ? "ring-2 ring-white scale-110 shadow-lg"
                                                        : "opacity-50 hover:opacity-100"
                                                }`}
                                            >
                                                <img
                                                    src={img}
                                                    alt="Thumb"
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </AnimatePresence>
    );
}
