"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Fact } from "@/data/facts";
import { cn } from "@/lib/utils";
import { Trophy, RefreshCw, Shuffle, Sparkles } from "lucide-react";
import { Loader } from "@/components/Loader";

interface SpinWheelProps {
    onResult: (fact: Fact) => void;
    disabled?: boolean;
    facts?: Fact[];
    loading?: boolean;
}

const CATEGORY_EMOJIS: Record<string, string> = {
    History: "🏛️",
    Culture: "🎭",
    Nature: "🌿",
    Art: "🎨",
    "GI Product": "🧵",
};

const MAX_WHEEL_ITEMS = 8; // Optimal slice count for 45° sectors

/**
 * Sleek, modern Spin Wheel component featuring precision SVG rendering,
 * interactive center hub, realistic physics deceleration, and clean aesthetic.
 */
export function SpinWheel({
    onResult,
    disabled,
    facts: passedFacts,
    loading,
}: SpinWheelProps) {
    const [isSpinning, setIsSpinning] = useState(false);
    const controls = useAnimation();

    // Cumulative rotation and spinning state refs to avoid intermediate re-renders
    const currentRotationRef = useRef(0);
    const isSpinningRef = useRef(false);

    // Active subset of facts shown on the wheel
    const [wheelFacts, setWheelFacts] = useState<Fact[]>([]);
    const [factPoolIndex, setFactPoolIndex] = useState(0);

    // Initialize or update wheel items when passedFacts arrive
    useEffect(() => {
        if (passedFacts && passedFacts.length > 0) {
            const initialBatch = passedFacts.slice(0, MAX_WHEEL_ITEMS);
            setWheelFacts(initialBatch);
        }
    }, [passedFacts]);

    // Shuffle / Cycle through the database pool of facts
    const handleShuffle = useCallback(() => {
        if (isSpinningRef.current || !passedFacts || passedFacts.length === 0) return;
        const nextIndex = (factPoolIndex + MAX_WHEEL_ITEMS) % passedFacts.length;
        setFactPoolIndex(nextIndex);

        let newBatch = passedFacts.slice(nextIndex, nextIndex + MAX_WHEEL_ITEMS);
        if (newBatch.length < MAX_WHEEL_ITEMS) {
            newBatch = [...newBatch, ...passedFacts.slice(0, MAX_WHEEL_ITEMS - newBatch.length)];
        }
        setWheelFacts(newBatch);
    }, [factPoolIndex, passedFacts]);

    // Precalculate geometry, trigonometry, and SVG paths
    const segments = useMemo(() => {
        if (!wheelFacts || wheelFacts.length === 0) return [];
        const count = wheelFacts.length;
        const angle = 360 / count;

        return wheelFacts.map((fact, i) => {
            const startAngle = i * angle;
            const endAngle = (i + 1) * angle;

            const radStart = (Math.PI * startAngle) / 180;
            const radEnd = (Math.PI * endAngle) / 180;

            const x1 = (50 + 50 * Math.cos(radStart)).toFixed(4);
            const y1 = (50 + 50 * Math.sin(radStart)).toFixed(4);
            const x2 = (50 + 50 * Math.cos(radEnd)).toFixed(4);
            const y2 = (50 + 50 * Math.sin(radEnd)).toFixed(4);

            const isEven = i % 2 === 0;
            const fill = isEven ? "url(#wheel-grad-green)" : "url(#wheel-grad-red)";

            const emoji = CATEGORY_EMOJIS[fact.category] || "🇧🇩";
            const shortTitle =
                fact.title.length > 14
                    ? fact.title.substring(0, 12).trim() + "..."
                    : fact.title;

            return {
                id: fact.id,
                fact,
                pathD: `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`,
                fill,
                rotationAngle: startAngle + angle / 2,
                emoji,
                shortTitle,
                isEven,
            };
        });
    }, [wheelFacts]);

    // Perimeter minimal tick markers
    const perimeterTicks = useMemo(() => {
        const totalTicks = 24;
        return Array.from({ length: totalTicks }).map((_, i) => {
            const angle = (i * 360) / totalTicks;
            const rad = (Math.PI * angle) / 180;
            const x = 50 + 47.8 * Math.cos(rad);
            const y = 50 + 47.8 * Math.sin(rad);
            const isMajor = i % 3 === 0;
            return { id: i, x: `${x}%`, y: `${y}%`, isMajor };
        });
    }, []);

    /**
     * Pure GPU-accelerated spin trigger
     */
    const spin = useCallback(async () => {
        if (isSpinningRef.current || disabled || loading || wheelFacts.length === 0) return;
        isSpinningRef.current = true;
        setIsSpinning(true);

        // Calculate random spin: 7-9 full rotations + random stopping angle
        const extraRotations = 7 + Math.floor(Math.random() * 3);
        const randomAngle = Math.floor(Math.random() * 360);
        const targetRotation =
            currentRotationRef.current + extraRotations * 360 + randomAngle;
        currentRotationRef.current = targetRotation;

        // Animate via Framer Motion with smooth ease-out cubic curve
        await controls.start({
            rotate: targetRotation,
            transition: {
                duration: 5.0,
                ease: [0.12, 0.92, 0.2, 1], // Smooth natural deceleration
            },
        });

        isSpinningRef.current = false;
        setIsSpinning(false);

        // Compute winning segment under top needle (0 deg in rotated SVG)
        const normalizedAngle = ((targetRotation % 360) + 360) % 360;
        const segmentCount = wheelFacts.length;
        const segmentAngle = 360 / segmentCount;

        // Needle is at top (0 deg). Segment under needle has angle = (360 - normalizedAngle) % 360
        const pointerAngle = (360 - normalizedAngle) % 360;
        const winningIndex = Math.floor(pointerAngle / segmentAngle) % segmentCount;
        const winner = wheelFacts[winningIndex];

        if (winner) {
            // Brief 400ms pause so the user sees the wheel land squarely under the needle
            setTimeout(() => {
                onResult(winner);
            }, 400);
        }
    }, [controls, disabled, loading, onResult, wheelFacts]);

    return (
        <div className="relative flex flex-col items-center justify-center py-2 select-none">
            {/* Subtle Clean Ambient Glow with Gentle Breathing */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[560px] md:h-[560px] rounded-full bg-gradient-to-tr from-bd-green/20 via-amber-500/15 to-bd-red/20 blur-3xl pointer-events-none contain-paint"
            />

            {/* Clean Modern Outer Frame & Bezel */}
            <div className="relative p-2.5 sm:p-3.5 md:p-4 rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-2xl border border-emerald-600/15 dark:border-emerald-500/20 shadow-[0_20px_50px_-12px_rgba(0,106,78,0.18),0_0_0_1px_rgba(0,0,0,0.04)] contain-paint">
                
                {/* Inner Track Ring */}
                <div className="relative p-1.5 sm:p-2 rounded-full bg-neutral-950 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] border border-amber-400/25">
                    
                    {/* Clean Perimeter Markers */}
                    {perimeterTicks.map((tick) => (
                        <div
                            key={tick.id}
                            style={{
                                left: tick.x,
                                top: tick.y,
                            }}
                            className={cn(
                                "absolute -translate-x-1/2 -translate-y-1/2 rounded-full z-20 pointer-events-none transition-colors duration-300",
                                tick.isMajor
                                    ? "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-300/90 shadow-[0_0_6px_rgba(251,191,36,0.8)]"
                                    : "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-200/40"
                            )}
                        />
                    ))}

                    {/* Sleek Precision Needle Pointer (Stationary at Top) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3.5 sm:-translate-y-4 md:-translate-y-5 z-40 pointer-events-none">
                        <div
                            className={cn(
                                "flex flex-col items-center transform-gpu",
                                isSpinning && "animate-needle-tick"
                            )}
                        >
                            {/* Pivot Top Ring */}
                            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 shadow-md border-2 border-neutral-900 flex items-center justify-center z-10">
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-bd-red shadow-inner" />
                            </div>

                            {/* Precision Arrow Head */}
                            <div className="w-5 h-8 sm:w-6 sm:h-10 md:w-7 md:h-12 -mt-2 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
                                <svg
                                    viewBox="0 0 24 40"
                                    fill="none"
                                    className="w-full h-full"
                                >
                                    <path
                                        d="M12 40L2 6C1 3 3 0 6 0H18C21 0 23 3 22 6L12 40Z"
                                        fill="url(#needle-grad)"
                                    />
                                    <path
                                        d="M12 40L12 0H18C21 0 23 3 22 6L12 40Z"
                                        fill="white"
                                        fillOpacity="0.15"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="needle-grad"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="100%"
                                        >
                                            <stop offset="0%" stopColor="#FDE68A" />
                                            <stop offset="45%" stopColor="#F59E0B" />
                                            <stop offset="100%" stopColor="#B45309" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Wheel Disc Stage */}
                    <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden shadow-inner">
                        
                        {/* High-Performance Framer Motion Animated Rotation Wheel */}
                        <motion.div
                            animate={controls}
                            style={{
                                width: "100%",
                                height: "100%",
                                transformOrigin: "50% 50%",
                            }}
                            className="transform-gpu"
                        >
                            <svg
                                viewBox="0 0 100 100"
                                className="w-full h-full transform-gpu"
                                style={{ transform: "rotate(-90deg)" }}
                            >
                                <defs>
                                    <linearGradient
                                        id="wheel-grad-green"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#007A5A" />
                                        <stop offset="100%" stopColor="#004D38" />
                                    </linearGradient>
                                    <linearGradient
                                        id="wheel-grad-red"
                                        x1="0%"
                                        y1="0%"
                                        x2="100%"
                                        y2="100%"
                                    >
                                        <stop offset="0%" stopColor="#E11D48" />
                                        <stop offset="100%" stopColor="#9F1239" />
                                    </linearGradient>
                                    <filter id="text-shadow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feDropShadow dx="0" dy="0.5" stdDeviation="0.4" floodColor="#000000" floodOpacity="0.8" />
                                    </filter>
                                </defs>

                                {/* Background Circle */}
                                <circle cx="50" cy="50" r="50" fill="#0f172a" />

                                {/* Render Wheel Slices */}
                                {segments.map((seg) => (
                                    <path
                                        key={seg.id}
                                        d={seg.pathD}
                                        fill={seg.fill}
                                        stroke="#ffffff"
                                        strokeWidth="0.5"
                                        strokeOpacity="0.25"
                                    />
                                ))}

                                {/* High-Contrast Sector Labels & Emojis */}
                                {segments.map((seg) => {
                                    const textRadius = 35;
                                    const rad = (Math.PI * seg.rotationAngle) / 180;
                                    const textX = 50 + textRadius * Math.cos(rad);
                                    const textY = 50 + textRadius * Math.sin(rad);

                                    return (
                                        <g
                                            key={`label-${seg.id}`}
                                            transform={`translate(${textX}, ${textY}) rotate(${seg.rotationAngle + 90})`}
                                            className="pointer-events-none select-none"
                                        >
                                            <text
                                                x="0"
                                                y="-4"
                                                textAnchor="middle"
                                                fontSize="3.8"
                                                className="select-none"
                                            >
                                                {seg.emoji}
                                            </text>
                                            <text
                                                x="0"
                                                y="1.5"
                                                textAnchor="middle"
                                                fill="#ffffff"
                                                fontSize="2.4"
                                                fontWeight="900"
                                                letterSpacing="0.04em"
                                                filter="url(#text-shadow)"
                                                className="uppercase select-none"
                                            >
                                                {seg.shortTitle}
                                            </text>
                                        </g>
                                    );
                                })}
                            </svg>
                        </motion.div>
                    </div>

                    {/* Central Medallion Button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
                        <motion.button
                            whileHover={isSpinning || disabled || loading || wheelFacts.length === 0 ? {} : { scale: 1.08 }}
                            whileTap={isSpinning || disabled || loading || wheelFacts.length === 0 ? {} : { scale: 0.94 }}
                            onClick={spin}
                            disabled={isSpinning || disabled || loading || wheelFacts.length === 0}
                            title="Click to spin"
                            className={cn(
                                "group relative w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 rounded-full p-1 bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 shadow-[0_6px_20px_rgba(0,0,0,0.45)] border border-amber-100/50 transition-all duration-300",
                                isSpinning || disabled || loading || wheelFacts.length === 0
                                    ? "cursor-not-allowed opacity-90 scale-95"
                                    : "cursor-pointer hover:shadow-[0_8px_25px_rgba(251,191,36,0.4)]"
                            )}
                        >
                            {/* Inner Disc */}
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-800 via-bd-green to-emerald-950 border-2 border-amber-300/70 shadow-inner flex flex-col items-center justify-center text-center transition-colors group-hover:from-emerald-700 group-hover:via-emerald-800">
                                {loading ? (
                                    <Loader size="sm" />
                                ) : isSpinning ? (
                                    <RefreshCw className="animate-spin h-5 w-5 sm:h-6 sm:w-6 text-amber-300" />
                                ) : (
                                    <>
                                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300 drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
                                        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-amber-200 uppercase tracking-widest leading-none mt-1">
                                            SPIN
                                        </span>
                                    </>
                                )}
                            </div>
                        </motion.button>
                    </div>

                </div>
            </div>

            {/* Clean Modern Interactive Controls */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center gap-3.5 z-20">
                {/* Main Spin Action Button with Shimmer */}
                <motion.button
                    whileHover={isSpinning || disabled || loading || wheelFacts.length === 0 ? {} : { scale: 1.04, y: -2 }}
                    whileTap={isSpinning || disabled || loading || wheelFacts.length === 0 ? {} : { scale: 0.96 }}
                    onClick={spin}
                    disabled={isSpinning || disabled || loading || wheelFacts.length === 0}
                    className={cn(
                        "group relative px-8 sm:px-11 md:px-13 py-3.5 sm:py-4 rounded-full font-black text-sm sm:text-base md:text-lg tracking-[0.14em] uppercase transition-all duration-300 overflow-hidden transform-gpu",
                        isSpinning || disabled || loading || wheelFacts.length === 0
                            ? "bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 scale-95 cursor-not-allowed border border-neutral-300 dark:border-neutral-700"
                            : "bg-gradient-to-r from-bd-red via-rose-600 to-bd-red text-white hover:brightness-110 shadow-[0_10px_25px_-5px_rgba(206,17,38,0.4)] hover:shadow-[0_14px_35px_-5px_rgba(206,17,38,0.55)] border-t border-white/20 cursor-pointer"
                    )}
                >
                    <span className="relative z-10 flex items-center gap-2.5">
                        {loading ? (
                            <Loader size="sm" />
                        ) : isSpinning ? (
                            <RefreshCw className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        ) : (
                            <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300 drop-shadow group-hover:rotate-12 transition-transform duration-300" />
                        )}
                        <span>
                            {loading
                                ? "Loading Data..."
                                : isSpinning
                                ? "Spinning..."
                                : "Spin The Wheel"}
                        </span>
                    </span>

                    {/* Button Light Sweep Effect */}
                    {!isSpinning && !loading && (
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                    )}
                </motion.button>

                {/* Shuffle / Next Batch Button */}
                {passedFacts && passedFacts.length > MAX_WHEEL_ITEMS && (
                    <motion.button
                        whileHover={isSpinning || loading ? {} : { scale: 1.04 }}
                        whileTap={isSpinning || loading ? {} : { scale: 0.96 }}
                        onClick={handleShuffle}
                        disabled={isSpinning || loading}
                        className={cn(
                            "flex items-center gap-2 px-5 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 backdrop-blur-md border",
                            isSpinning
                                ? "opacity-40 cursor-not-allowed bg-white/40 border-gray-200 text-gray-400"
                                : "bg-white/80 dark:bg-neutral-800/80 hover:bg-white dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-200 hover:text-bd-green border-gray-200/80 dark:border-neutral-700 shadow-sm hover:shadow-md cursor-pointer"
                        )}
                        title="Load next batch of treasures from database"
                    >
                        <Shuffle className="h-3.5 w-3.5" />
                        <span>Shuffle Items</span>
                    </motion.button>
                )}
            </div>

            {/* Status & Active Pool Badge */}
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-muted-foreground bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-bd-green/15 dark:border-bd-green/25 shadow-xs">
                {loading ? (
                    <Loader size="sm" text="Connecting..." />
                ) : (
                    <>
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bd-green opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-bd-green" />
                        </span>
                        <span>
                            {passedFacts && passedFacts.length > 0
                                ? `Displaying ${wheelFacts.length} of ${passedFacts.length} National Treasures`
                                : "Loading Bangladesh Cultural Treasures..."}
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

export default SpinWheel;
