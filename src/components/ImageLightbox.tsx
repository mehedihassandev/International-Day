"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    title: string;
    onClose: () => void;
    onSelectIndex: (index: number) => void;
    onPrev: () => void;
    onNext: () => void;
}

export function ImageLightbox({
    images,
    currentIndex,
    isOpen,
    title,
    onClose,
    onSelectIndex,
    onPrev,
    onNext,
}: ImageLightboxProps) {
    const currentImage = images[currentIndex] || "";
    const [imgSrc, setImgSrc] = useState(currentImage);

    useEffect(() => {
        setImgSrc(currentImage);
    }, [currentImage]);

    if (!isOpen || !currentImage) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-2xl"
                onClick={onClose}
            >
                {/* Top Control Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.25 }}
                    className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-50 flex items-center justify-between pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-white shadow-xl">
                        <span className="text-xs sm:text-sm font-black text-emerald-400 uppercase tracking-wider truncate max-w-[200px] sm:max-w-md">
                            {title}
                        </span>
                        {images.length > 1 && (
                            <span className="text-xs text-white/70 font-medium border-l border-white/20 pl-3">
                                {currentIndex + 1} / {images.length}
                            </span>
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 bg-white/10 hover:bg-bd-red text-white rounded-2xl backdrop-blur-md transition-colors shadow-xl flex items-center justify-center cursor-pointer border border-white/15"
                        onClick={onClose}
                        aria-label="Close Lightbox"
                    >
                        <X size={20} />
                    </motion.button>
                </motion.div>

                {/* Left/Right Navigation */}
                {images.length > 1 && (
                    <>
                        <motion.button
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.1, x: -3 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onPrev();
                            }}
                            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-black/60 hover:bg-bd-red text-white rounded-2xl backdrop-blur-md transition-colors shadow-xl flex items-center justify-center cursor-pointer border border-white/15"
                            aria-label="Previous Image"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.1, x: 3 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onNext();
                            }}
                            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-black/60 hover:bg-bd-red text-white rounded-2xl backdrop-blur-md transition-colors shadow-xl flex items-center justify-center cursor-pointer border border-white/15"
                            aria-label="Next Image"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </>
                )}

                {/* Main Full Image View with Cross-Fade */}
                <div
                    className="relative w-[92vw] h-[72vh] md:h-[78vh] flex items-center justify-center overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={imgSrc}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={imgSrc}
                                alt={title}
                                fill
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                                sizes="100vw"
                                quality={95}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Thumbnails Navigation */}
                {images.length > 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.25 }}
                        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 p-2 bg-black/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 max-w-[90vw] overflow-x-auto custom-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {images.map((img, idx) => (
                            <motion.button
                                key={idx}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onSelectIndex(idx)}
                                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden transition-all duration-200 relative flex-shrink-0 cursor-pointer border-2 ${
                                    idx === currentIndex
                                        ? "border-bd-red ring-2 ring-bd-red/40 scale-105 shadow-md"
                                        : "border-transparent opacity-50 hover:opacity-100"
                                }`}
                                aria-label={`View image ${idx + 1}`}
                            >
                                <Image
                                    src={img}
                                    alt={`${title} thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                />
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}

export default ImageLightbox;
