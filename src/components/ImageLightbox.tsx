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
                className="fixed inset-0 z-[200] flex items-center justify-center bg-[#004d39]/90 backdrop-blur-2xl"
                onClick={onClose}
            >
                <button
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 bg-white/10 hover:bg-bd-red text-white rounded-full backdrop-blur-md transition-colors shadow-2xl cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                >
                    <X size={24} />
                </button>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onPrev();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/50 hover:bg-bd-red text-white rounded-full backdrop-blur-md transition-all shadow-2xl cursor-pointer"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 bg-black/50 hover:bg-bd-red text-white rounded-full backdrop-blur-md transition-all shadow-2xl cursor-pointer"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </>
                )}

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
                    className="relative w-[95vw] h-[85vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={imgSrc}
                        alt={title}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="100vw"
                        quality={90}
                    />
                </motion.div>

                {images.length > 1 && (
                    <div
                        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-black/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => onSelectIndex(idx)}
                                className={`w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden transition-all duration-300 relative cursor-pointer ${
                                    idx === currentIndex
                                        ? "ring-2 ring-bd-red scale-110 shadow-lg"
                                        : "opacity-50 hover:opacity-100"
                                }`}
                            >
                                <Image
                                    src={img}
                                    alt={`${title} thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
