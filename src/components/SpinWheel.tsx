"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Fact } from "@/data/facts";
import { cn } from "@/lib/utils";
import { Trophy, RefreshCw } from "lucide-react";

interface SpinWheelProps {
    onResult: (fact: Fact) => void;
    disabled?: boolean;
    facts?: Fact[];
    loading?: boolean;
}

/**
 * Premium Spin Wheel component powered directly by MongoDB Atlas API.
 * Dynamically scales to support any number of facts from the database.
 */
export function SpinWheel({ onResult, disabled, facts: passedFacts, loading }: SpinWheelProps) {
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const controls = useAnimation();

    const [wheelFacts, setWheelFacts] = useState<Fact[]>(passedFacts || []);

    useEffect(() => {
        if (passedFacts && passedFacts.length > 0) {
            setWheelFacts([...passedFacts].sort(() => 0.5 - Math.random()));
        }
    }, [passedFacts]);

    /**
     * Triggers the physics-based spin animation.
     */
    const spin = async () => {
        if (isSpinning || wheelFacts.length === 0) return;
        setIsSpinning(true);

        // Calculate a random spin (at least 7 full rotations + random angle for drama)
        const extraRotations = 7 + Math.floor(Math.random() * 5);
        const randomAngle = Math.floor(Math.random() * 360);
        const totalRotation = rotation + extraRotations * 360 + randomAngle;
        setRotation(totalRotation);

        await controls.start({
            rotate: totalRotation,
            transition: {
                duration: 5,
                ease: [0.15, 0, 0.15, 1],
            },
        });

        setIsSpinning(false);

        // Determine the winning segment
        const normalizedAngle = totalRotation % 360;
        const segmentCount = wheelFacts.length;
        const segmentAngle = 360 / segmentCount;

        const winningIndex = Math.floor(
            ((360 - normalizedAngle + segmentAngle / 2) % 360) / segmentAngle,
        );

        onResult(wheelFacts[winningIndex]);
    };

    return (
        <div className="relative flex flex-col items-center justify-center py-12">
            {/* Decorative Bezel */}
            <div className="relative p-3 rounded-full bg-bd-green/5 shadow-inner border border-bd-green/10">
                {/* Needle / Pointer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-30">
                    <motion.div
                        animate={
                            isSpinning ? { rotate: [0, -15, 15, -15, 0] } : {}
                        }
                        transition={{ repeat: Infinity, duration: 0.15 }}
                        className="flex flex-col items-center"
                    >
                        {/* Pointer Body */}
                        <div
                            className="w-10 h-14 bg-bd-red clip-path-pointer shadow-xl"
                            style={{
                                clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                            }}
                        />
                        {/* Pointer Hub Pin */}
                        <div className="w-4 h-4 rounded-full bg-white shadow-md border-2 border-bd-red -mt-2" />
                    </motion.div>
                </div>

                {/* The Wheel */}
                <motion.div
                    animate={controls}
                    className="relative w-[380px] h-[380px] md:w-[580px] md:h-[580px] rounded-full overflow-hidden border-[6px] border-bd-green/30 shadow-[inset_0_0_60px_rgba(0,0,0,0.2),0_0_40px_rgba(0,106,78,0.15)] bg-neutral-900"
                >
                    <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full transform -rotate-90 scale-[1.01]"
                    >
                        <defs>
                            <linearGradient
                                id="segment-green"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#006A4E" />
                                <stop offset="100%" stopColor="#004d39" />
                            </linearGradient>
                            <linearGradient
                                id="segment-red"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#F42A41" />
                                <stop offset="100%" stopColor="#d12437" />
                            </linearGradient>
                        </defs>

                        {wheelFacts.map((fact, i) => {
                            const segmentCount = wheelFacts.length;
                            const angle = 360 / segmentCount;
                            const startAngle = i * angle;
                            const endAngle = (i + 1) * angle;
                            const x1 = (
                                50 +
                                50 * Math.cos((Math.PI * startAngle) / 180)
                            ).toFixed(4);
                            const y1 = (
                                50 +
                                50 * Math.sin((Math.PI * startAngle) / 180)
                            ).toFixed(4);
                            const x2 = (
                                50 +
                                50 * Math.cos((Math.PI * endAngle) / 180)
                            ).toFixed(4);
                            const y2 = (
                                50 +
                                50 * Math.sin((Math.PI * endAngle) / 180)
                            ).toFixed(4);

                            return (
                                <g
                                    key={fact.id}
                                    className="transition-opacity duration-300 hover:opacity-90"
                                >
                                    <path
                                        d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                                        fill={
                                            segmentCount % 2 !== 0 && i === segmentCount - 1
                                                ? "url(#segment-red)"
                                                : i % 2 === 0
                                                ? "url(#segment-green)"
                                                : "url(#segment-red)"
                                        }
                                        className="stroke-white/20"
                                        strokeWidth={segmentCount > 20 ? "0.1" : "0.3"}
                                    />
                                    {/* Text label with rotation */}
                                    <text
                                        x="95"
                                        y="50.8"
                                        fill="white"
                                        fontSize={segmentCount > 20 ? "2.0" : segmentCount > 15 ? "2.4" : "2.8"}
                                        fontWeight="800"
                                        transform={`rotate(${startAngle + angle / 2}, 50, 50)`}
                                        textAnchor="end"
                                        className="select-none pointer-events-none drop-shadow-md uppercase tracking-wider"
                                    >
                                        {fact.title.length > (segmentCount > 20 ? 12 : 15)
                                            ? fact.title.substring(0, segmentCount > 20 ? 10 : 13) +
                                              "..."
                                            : fact.title}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>

                    {/* Glass Hub (Centerpiece) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Outer Hub Ring */}
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl z-20">
                            {/* Inner Gold Hub */}
                            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-bd-gold via-yellow-300 to-bd-gold/80 shadow-[0_0_20px_rgba(255,215,0,0.5)] flex items-center justify-center border-2 border-white/50 animate-glow">
                                <div className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full opacity-40 blur-sm" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Control Button */}
            <div className="mt-16 group relative">
                <div className="absolute inset-0 bg-bd-red/30 blur-3xl rounded-full scale-150 group-hover:bg-bd-red/50 transition-colors duration-500" />

                <button
                    onClick={spin}
                    disabled={isSpinning || disabled || loading || wheelFacts.length === 0}
                    className={cn(
                        "relative px-12 py-4 rounded-2xl font-black text-xl tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden transform-gpu",
                        isSpinning || disabled || loading || wheelFacts.length === 0
                            ? "bg-neutral-200 text-neutral-400 scale-95 border-neutral-300"
                            : "bg-bd-red text-white hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(244,42,65,0.4)] border-b-8 border-[#b91c1c] hover:border-b-[12px] hover:-translate-y-1 cursor-pointer",
                    )}
                >
                    <span className="relative z-10 flex items-center gap-4">
                        {isSpinning || loading ? (
                            <RefreshCw className="animate-spin h-7 w-7" />
                        ) : (
                            <Trophy className="h-7 w-7" />
                        )}
                        {loading ? "LOADING FROM DB..." : isSpinning ? "SPINNING..." : "SPIN NOW"}
                    </span>

                    {/* Shimmer Effect */}
                    {!isSpinning && !loading && wheelFacts.length > 0 && (
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    )}

                    <div className="absolute top-1 left-1 w-2 h-2 bg-white/20 rounded-full" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-white/20 rounded-full" />
                </button>
            </div>

            {/* Help text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-muted-foreground font-medium flex items-center gap-2"
            >
                <span className="w-2 h-2 rounded-full bg-bd-green animate-pulse" />
                All {wheelFacts.length} national treasures loaded from database
            </motion.p>
        </div>
    );
}
