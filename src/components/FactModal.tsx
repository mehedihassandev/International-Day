"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronLeft, ChevronRight, Images, Sparkles, BookOpen } from "lucide-react";
import { Fact } from "@/data/facts";
import { ImageLightbox } from "@/components/ImageLightbox";

interface FactModalProps {
    fact: Fact | null;
    isOpen: boolean;
    onClose: () => void;
}

export function FactModal({ fact, isOpen, onClose }: FactModalProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const images =
        fact?.images && fact.images.length > 0
            ? fact.images
            : fact?.image
              ? [fact.image]
              : fact?.id
                ? [`/images/facts/${fact.id}.jpg`]
                : [];
    const currentImage = images[selectedImageIndex] || (fact?.id ? `/images/facts/${fact.id}.jpg` : "");

    const handlePrevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    }, [images.length]);

    const handleNextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, [images.length]);

    useEffect(() => {
        if (isOpen) {
            setSelectedImageIndex(0);
            setIsFullscreen(false);
        }
    }, [isOpen, fact]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrevImage();
            if (e.key === "ArrowRight") handleNextImage();
            if (e.key === "Escape") {
                if (isFullscreen) setIsFullscreen(false);
                else onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, isFullscreen, handlePrevImage, handleNextImage, onClose]);

    if (!fact) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden">
                    {/* Backdrop with Blur Fade */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
                    />

                    {/* Modal Dialog with Spring Physics */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 16 }}
                        transition={{ type: "spring", stiffness: 340, damping: 28 }}
                        className="relative w-full h-full md:h-[88vh] md:max-w-6xl bg-white dark:bg-slate-950 flex flex-col md:flex-row overflow-hidden shadow-2xl md:rounded-3xl border border-white/10"
                    >
                        {/* Top Gradient Accent Bar */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="h-1.5 w-full bg-gradient-to-r from-bd-green via-bd-red to-bd-gold flex-shrink-0 absolute top-0 left-0 right-0 z-30 origin-left"
                        />

                        {/* Animated Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            onClick={onClose}
                            aria-label="Close dialog"
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-40 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-bd-red text-white rounded-full transition-colors shadow-xl border border-white/20 cursor-pointer"
                        >
                            <X size={18} />
                        </motion.button>

                        {/* Image Left Column */}
                        <div className="relative w-full md:w-[48%] h-[40vh] md:h-full flex-shrink-0 bg-slate-900 flex flex-col overflow-hidden">
                            <AnimatePresence mode="wait">
                                {currentImage ? (
                                    <motion.div
                                        key={currentImage}
                                        className="relative flex-1 cursor-pointer group"
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => setIsFullscreen(true)}
                                    >
                                        <Image
                                            src={currentImage}
                                            alt={fact.title}
                                            fill
                                            priority
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                                            <div className="px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-white text-xs font-bold flex items-center gap-2 drop-shadow-lg border border-white/20">
                                                <Maximize2 size={15} /> Click to expand
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="flex-1 bg-gradient-to-br from-bd-green to-bd-green-dark flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <span className="text-8xl md:text-9xl">🇧🇩</span>
                                            <p className="text-lg font-black text-white/80 mt-4 uppercase tracking-[0.3em]">
                                                {fact.category}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>

                            {images.length > 1 && (
                                <>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handlePrevImage}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-bd-red text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-lg cursor-pointer border border-white/15"
                                        aria-label="Previous Image"
                                    >
                                        <ChevronLeft size={20} />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handleNextImage}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-bd-red text-white flex items-center justify-center backdrop-blur-md transition-colors shadow-lg cursor-pointer border border-white/15"
                                        aria-label="Next Image"
                                    >
                                        <ChevronRight size={20} />
                                    </motion.button>

                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-black rounded-full border border-white/20 shadow-md">
                                        <Images size={13} className="text-amber-400" />
                                        <span>{selectedImageIndex + 1} / {images.length}</span>
                                    </div>

                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-white/10 max-w-[90%] overflow-x-auto custom-scrollbar">
                                        {images.map((img, idx) => (
                                            <motion.button
                                                key={idx}
                                                whileHover={{ scale: 1.08 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedImageIndex(idx);
                                                }}
                                                className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer ${
                                                    idx === selectedImageIndex
                                                        ? "ring-2 ring-bd-red scale-105 shadow-md"
                                                        : "opacity-60 hover:opacity-100"
                                                }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Gallery ${idx + 1}`}
                                                    fill
                                                    className="object-cover w-full h-full"
                                                    sizes="48px"
                                                />
                                            </motion.button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Content Right Column with Staggered Elements */}
                        <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-slate-950">
                            <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col overflow-y-auto custom-scrollbar pt-8">
                                {/* Badges */}
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className="flex items-center gap-2.5 mb-3"
                                >
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/60 text-bd-green dark:text-emerald-300 text-[11px] font-black rounded-full uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/60">
                                        <Sparkles size={11} className="text-amber-500" />
                                        {fact.category}
                                    </span>
                                    <span className="text-bd-red text-xs font-bold uppercase tracking-widest pl-2 border-l border-slate-200 dark:border-slate-800">
                                        বাংলাদেশ
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.35 }}
                                    className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight"
                                >
                                    {fact.title}
                                </motion.h2>

                                {/* Description Quote */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98, y: 8 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.35 }}
                                    className="text-slate-700 dark:text-slate-200 mb-6 text-sm sm:text-base italic border-l-4 border-bd-green pl-4 py-2 font-medium bg-emerald-50/60 dark:bg-emerald-950/20 rounded-r-2xl"
                                >
                                    &ldquo;{fact.description}&rdquo;
                                </motion.div>

                                {/* Detailed Text */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25, duration: 0.35 }}
                                    className="space-y-4 mb-6"
                                >
                                    <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-bd-green dark:text-emerald-400 mb-2">
                                        <BookOpen size={14} /> Historical Significance
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-wrap font-normal">
                                        {fact.details}
                                    </p>
                                </motion.div>

                                {/* Gallery Strip */}
                                {images.length > 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.35 }}
                                        className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-xs font-black uppercase tracking-wider text-bd-green dark:text-emerald-400 flex items-center gap-2">
                                                <Images size={15} /> Photo Gallery ({images.length})
                                            </h4>
                                            <span className="text-[11px] text-slate-400">Click to expand</span>
                                        </div>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                                            {images.map((img, idx) => (
                                                <motion.button
                                                    key={idx}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => {
                                                        setSelectedImageIndex(idx);
                                                        setIsFullscreen(true);
                                                    }}
                                                    className={`group relative h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                                                        idx === selectedImageIndex
                                                            ? "border-bd-red ring-2 ring-bd-red/30 scale-[1.02]"
                                                            : "border-slate-200 dark:border-slate-800 hover:border-bd-green opacity-80 hover:opacity-100"
                                                    }`}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${fact.title} Gallery ${idx + 1}`}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        sizes="120px"
                                                    />
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    <ImageLightbox
                        images={images}
                        currentIndex={selectedImageIndex}
                        isOpen={isFullscreen}
                        title={fact.title}
                        onClose={() => setIsFullscreen(false)}
                        onSelectIndex={setSelectedImageIndex}
                        onPrev={handlePrevImage}
                        onNext={handleNextImage}
                    />
                </div>
            )}
        </AnimatePresence>
    );
}

export default FactModal;
