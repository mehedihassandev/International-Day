"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import { Fact } from "@/data/facts";

interface FactModalProps {
    fact: Fact | null;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Full-screen Fact Modal for revealing spin results.
 * Features multiple images, fullscreen image viewer, Bangladesh green/red theme, immersive layout, and smooth animations.
 */
export function FactModal({ fact, isOpen, onClose }: FactModalProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setSelectedImageIndex(0);
            setIsFullscreen(false);
        }
    }, [isOpen, fact]);

    if (!fact) return null;

    const images =
        fact.images && fact.images.length > 0
            ? fact.images
            : fact.image
              ? [fact.image]
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
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-11 h-11 flex items-center justify-center bg-bd-green/90 hover:bg-bd-red text-white rounded-full transition-all duration-300 shadow-lg group"
                        >
                            <X
                                size={20}
                                className="transition-transform duration-300 group-hover:rotate-90"
                            />
                        </button>

                        {/* Left: Image Section */}
                        <div className="relative w-full md:w-[40%] h-[35vh] md:h-full flex-shrink-0 bg-bd-green/5 flex flex-col">
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
                                            alt={fact.title}
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
                                                🇧🇩
                                            </span>
                                            <p className="text-lg font-black text-white/80 mt-4 uppercase tracking-[0.3em]">
                                                {fact.category}
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

                            {/* Green-Red gradient overlay at bottom / right */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bd-green/90 via-bd-green/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/10 pointer-events-none" />

                            {/* Category Badge on image */}
                            <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
                                <div className="px-5 py-2 bg-bd-red text-white text-xs font-black rounded-full shadow-lg uppercase tracking-[0.2em] border border-white/20">
                                    🏆 Discovery
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
                                    <span className="px-4 py-1.5 bg-bd-green/10 text-bd-green text-xs font-black rounded-full uppercase tracking-[0.2em] border border-bd-green/20">
                                        {fact.category}
                                    </span>
                                    <span className="text-bd-red/60 text-xs font-black uppercase tracking-[0.2em] border-l-2 border-bd-red/30 pl-3">
                                        বাংলাদেশ
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-[1.15]">
                                    {fact.title}
                                </h2>

                                {/* Description Quote */}
                                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg md:text-xl italic border-l-4 border-bd-green pl-5 py-2 font-medium bg-bd-green/5 rounded-r-xl">
                                    &ldquo;{fact.description}&rdquo;
                                </p>

                                {/* Details Body */}
                                <div className="flex-1 mb-8">
                                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base md:text-lg whitespace-pre-wrap">
                                        {fact.details}
                                    </p>
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
                                        alt={fact.title}
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
