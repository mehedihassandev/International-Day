"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Fact } from "@/data/facts";
import { cn } from "@/lib/utils";
import { Trophy, RefreshCw, Shuffle } from "lucide-react";
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

const MAX_WHEEL_ITEMS = 8; // Optimal slice count for 45° sectors with large, crisp typography & 60fps GPU performance

/**
 * Premium Spin Wheel component with GPU acceleration, stationary center medallion,
 * jewel LED perimeter lights, memoized geometry, and lag-free animation.
 */
export function SpinWheel({
    onResult,
    disabled,
    facts: passedFacts,
    loading,
}: SpinWheelProps) {
    const [isSpinning, setIsSpinning] = useState(false);
    const controls = useAnimation();

    // Use refs for cumulative rotation and spinning state to eliminate re-renders on spin initiation
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

    // Precalculate all geometry, trigonometry, and SVG paths with useMemo
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
            const fill = isEven ? "url(#grad-green)" : "url(#grad-red)";

            const emoji = CATEGORY_EMOJIS[fact.category] || "🇧🇩";
            const shortTitle =
                fact.title.length > 15
                    ? fact.title.substring(0, 13) + "..."
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

    // Outer perimeter LED indicator dots
    const ledLights = useMemo(() => {
        const totalLeds = 20;
        return Array.from({ length: totalLeds }).map((_, i) => {
            const angle = (i * 360) / totalLeds;
            const rad = (Math.PI * angle) / 180;
            const x = 50 + 47.5 * Math.cos(rad);
            const y = 50 + 47.5 * Math.sin(rad);
            return { id: i, x: `${x}%`, y: `${y}%`, delay: (i % 3) * 0.4 };
        });
    }, []);

    /**
     * Pure GPU-accelerated spin trigger
     */
    const spin = async () => {
        if (isSpinningRef.current || wheelFacts.length === 0) return;
        isSpinningRef.current = true;
        setIsSpinning(true);

        // Calculate random spin: 7-10 full rotations + random stopping angle
        const extraRotations = 7 + Math.floor(Math.random() * 4);
        const randomAngle = Math.floor(Math.random() * 360);
        const targetRotation =
            currentRotationRef.current + extraRotations * 360 + randomAngle;
        currentRotationRef.current = targetRotation;

        // Animate via Framer Motion with ease-out cubic curve
        await controls.start({
            rotate: targetRotation,
            transition: {
                duration: 5.2,
                ease: [0.15, 0.9, 0.2, 1], // Custom smooth decelerate curve
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
            onResult(winner);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center py-4 select-none">
            {/* Outer Glow Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[620px] md:h-[620px] rounded-full bg-gradient-to-tr from-bd-green/20 via-bd-gold/15 to-bd-red/20 blur-2xl pointer-events-none contain-paint" />

            {/* Wheel Container & Outer Golden/Emerald Bezel */}
            <div className="relative p-3 sm:p-5 md:p-6 rounded-full bg-gradient-to-br from-amber-200 via-emerald-800 to-amber-700 shadow-[0_20px_60px_rgba(0,0,0,0.35),0_0_30px_rgba(0,106,78,0.2)] border-4 border-amber-300/60 contain-paint">
                
                {/* Brass Rim Groove with Jewel LED Lights */}
                <div className="relative p-2 md:p-3 rounded-full bg-gradient-to-b from-neutral-900 via-emerald-950 to-neutral-950 border-2 border-amber-400/40 shadow-inner">
                    
                    {/* Perimeter LED Jewel Bulbs */}
                    {ledLights.map((led) => (
                        <div
                            key={led.id}
                            style={{
                                left: led.x,
                                top: led.y,
                                animationDelay: `${led.delay}s`,
                            }}
                            className={cn(
                                "absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full z-20 pointer-events-none transition-all duration-300",
                                isSpinning
                                    ? "bg-amber-300 shadow-[0_0_8px_#F59E0B] animate-pulse"
                                    : "bg-amber-100 shadow-[0_0_4px_rgba(255,255,255,0.8)] opacity-80"
                            )}
                        />
                    ))}

                    {/* Needle / Pointer (Stationary at Top, pure CSS GPU wobbling when spinning) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5 md:-translate-y-7 z-40 pointer-events-none">
                        <div
                            className={cn(
                                "flex flex-col items-center transform-gpu",
                                isSpinning && "animate-needle-tick"
                            )}
                        >
                            {/* Golden Needle Head */}
                            <div
                                className="w-7 h-11 sm:w-8 sm:h-12 md:w-11 md:h-16 bg-gradient-to-b from-amber-300 via-bd-red to-red-700 shadow-2xl filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                                style={{
                                    clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                                }}
                            />
                            {/* Ruby / Gold Center Pivot Pin */}
                            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-tr from-amber-400 to-amber-100 shadow-lg border-2 border-red-600 -mt-2.5 sm:-mt-3 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-bd-red shadow-inner animate-ping" />
                            </div>
                        </div>
                    </div>

                    {/* The Rotating Canvas (Isolated with GPU transform & will-change) */}
                    <motion.div
                        animate={controls}
                        className="relative w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden will-change-transform transform-gpu bg-neutral-900 shadow-2xl"
                    >
                        <svg
                            viewBox="0 0 100 100"
                            className="w-full h-full transform -rotate-90"
                            style={{ shapeRendering: "geometricPrecision" }}
                        >
                            <defs>
                                {/* High-vibrancy Bangladesh Green gradient */}
                                <linearGradient
                                    id="grad-green"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#006A4E" />
                                    <stop offset="60%" stopColor="#00523C" />
                                    <stop offset="100%" stopColor="#003B2B" />
                                </linearGradient>

                                {/* High-vibrancy Bangladesh Red gradient */}
                                <linearGradient
                                    id="grad-red"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#F42A41" />
                                    <stop offset="60%" stopColor="#CE1126" />
                                    <stop offset="100%" stopColor="#9E0C1C" />
                                </linearGradient>
                            </defs>

                            {/* Render Memoized Wheel Segments */}
                            {segments.map((seg) => (
                                <g key={seg.id}>
                                    <path
                                        d={seg.pathD}
                                        fill={seg.fill}
                                        stroke="#FFD700"
                                        strokeWidth="0.35"
                                        strokeOpacity="0.6"
                                    />

                                    {/* Segment Content: Emoji & Title */}
                                    <g
                                        transform={`rotate(${seg.rotationAngle}, 50, 50)`}
                                        className="pointer-events-none"
                                    >
                                        {/* Category Emoji */}
                                        <text
                                            x="92"
                                            y="50.7"
                                            fontSize="3.2"
                                            textAnchor="end"
                                            dominantBaseline="middle"
                                        >
                                            {seg.emoji}
                                        </text>

                                        {/* Segment Title */}
                                        <text
                                            x="85"
                                            y="50.8"
                                            fill="#FFFFFF"
                                            fontSize="2.9"
                                            fontWeight="900"
                                            letterSpacing="0.04em"
                                            textAnchor="end"
                                            dominantBaseline="middle"
                                            className="uppercase font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                                        >
                                            {seg.shortTitle}
                                        </text>
                                    </g>
                                </g>
                            ))}
                        </svg>
                    </motion.div>

                    {/* Stationary Center Medallion (Mounted over the wheel, does NOT spin) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                        {/* Outer Brass Ring */}
                        <div className="w-18 h-18 sm:w-22 sm:h-22 md:w-28 md:h-28 rounded-full p-1.5 bg-gradient-to-b from-amber-300 via-amber-600 to-amber-900 shadow-[0_8px_25px_rgba(0,0,0,0.5)] border border-amber-200/50 flex items-center justify-center">
                            {/* Inner Emerald & Gold Medallion */}
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-800 via-bd-green to-emerald-950 border-2 border-amber-300/80 shadow-inner flex flex-col items-center justify-center text-center">
                                {loading ? (
                                    <Loader size="sm" />
                                ) : (
                                    <>
                                        <span className="text-lg sm:text-xl md:text-2xl drop-shadow-md">
                                            ⭐
                                        </span>
                                        <span className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-amber-200 uppercase tracking-widest leading-none mt-0.5">
                                            SPIN
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Interactive Control Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 z-20">
                {/* Main Spin Action Button */}
                <button
                    onClick={spin}
                    disabled={isSpinning || disabled || loading || wheelFacts.length === 0}
                    className={cn(
                        "group relative px-8 sm:px-12 md:px-14 py-3.5 sm:py-4 rounded-2xl font-black text-base sm:text-lg md:text-xl tracking-[0.18em] uppercase transition-all duration-300 overflow-hidden transform-gpu",
                        isSpinning || disabled || loading || wheelFacts.length === 0
                            ? "bg-neutral-300 dark:bg-neutral-800 text-neutral-500 scale-95 cursor-not-allowed border border-neutral-400/30"
                            : "bg-gradient-to-r from-bd-red via-red-600 to-bd-red hover:from-red-600 hover:to-bd-red text-white hover:scale-105 active:scale-95 shadow-[0_12px_35px_rgba(206,17,38,0.45)] border-b-4 border-red-900 hover:border-b-6 hover:-translate-y-0.5 cursor-pointer"
                    )}
                >
                    <span className="relative z-10 flex items-center gap-3">
                        {loading ? (
                            <Loader size="sm" />
                        ) : isSpinning ? (
                            <RefreshCw className="animate-spin h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        ) : (
                            <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-amber-300 drop-shadow-md group-hover:rotate-12 transition-transform" />
                        )}
                        <span>
                            {loading
                                ? "Loading Data..."
                                : isSpinning
                                ? "Spinning..."
                                : "Spin The Wheel"}
                        </span>
                    </span>

                    {/* Subtle Button Shine Highlight */}
                    {!isSpinning && !loading && (
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                    )}
                </button>

                {/* Shuffle / Next Batch Button */}
                {passedFacts && passedFacts.length > MAX_WHEEL_ITEMS && (
                    <button
                        onClick={handleShuffle}
                        disabled={isSpinning || loading}
                        className={cn(
                            "flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md border",
                            isSpinning
                                ? "opacity-50 cursor-not-allowed bg-white/40 border-gray-300 text-gray-400"
                                : "bg-white/90 hover:bg-white text-bd-green hover:text-bd-red border-bd-green/20 hover:border-bd-red/40 hover:shadow-lg active:scale-95 cursor-pointer"
                        )}
                        title="Load next batch of treasures from database"
                    >
                        <Shuffle className="h-4 w-4" />
                        <span>Shuffle Treasures</span>
                    </button>
                )}
            </div>

            {/* Status & Active Pool Badge */}
            <div className="mt-5 flex items-center gap-2.5 text-xs font-semibold text-muted-foreground bg-white/80 dark:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-bd-green/15 shadow-sm">
                {loading ? (
                    <Loader size="sm" text="Connecting to Database..." />
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

