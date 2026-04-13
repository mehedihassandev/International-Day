"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SpinWheel } from "@/components/SpinWheel";
import { FactModal } from "@/components/FactModal";
import { Fact } from "@/data/facts";
import { Sparkles, History, Globe, Landmark } from "lucide-react";

/**
 * Home page for the Bangladesh Cultural Showcase.
 * Features the Interactive Spin Wheel as the primary experience.
 */
export default function Home() {
    const [selectedFact, setSelectedFact] = useState<Fact | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSpinResult = (fact: Fact) => {
        setSelectedFact(fact);
        // Reset before new discovery
        setIsModalOpen(false);

        // Slight delay before opening modal for "wow" effect
        setTimeout(() => {
            setSelectedFact(fact);
            setIsModalOpen(true);
        }, 500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-bd-green-soft via-white to-bd-red-soft overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Subtle Bangladesh flag-inspired background pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-bd-green/[0.03] via-transparent to-bd-red/[0.03]" />
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-bd-green/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-bd-red/8 rounded-full blur-[120px]" />
                {/* Central red circle reminiscent of BD flag */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bd-red/[0.04] rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 relative pt-8 pb-16">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    {/* Decorative BD flag colors line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                        className="h-1 w-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-bd-green via-bd-red to-bd-green"
                    />

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight"
                    >
                        Win a Piece of <br />
                        <span className="text-bd-green">Bangladesh</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Spin the wheel to explore breathtaking facts, GI
                        products, and historical landmarks starting from the
                        ancient era to modern wonders.
                    </motion.p>
                </div>

                {/* Spin Wheel Component */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                    className="relative z-10"
                >
                    <SpinWheel
                        onResult={handleSpinResult}
                        disabled={isModalOpen}
                    />
                </motion.div>

                {/* Feature Highlights */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            icon: History,
                            title: "Deep History",
                            desc: "From the language movement to ancient kingdoms.",
                        },
                        {
                            icon: Landmark,
                            title: "GI Products",
                            desc: "World famous Muslin, Jamdani, and more.",
                        },
                        {
                            icon: Globe,
                            title: "Nature",
                            desc: "The longest sea beach and largest mangroves.",
                        },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className={`flex flex-col items-center text-center p-8 bg-white/80 backdrop-blur-xl border-2 border-bd-green/10 hover:border-bd-red/40 hover:bg-bd-red/5 rounded-3xl group hover:shadow-[0_10px_40px_-10px_rgba(244,42,65,0.15)] transition-all hover:-translate-y-2 cursor-pointer`}
                        >
                            <div
                                className={`w-14 h-14 bg-bd-green/10 text-bd-green group-hover:bg-bd-red/10 group-hover:text-bd-red rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all`}
                            >
                                <feature.icon size={26} />
                            </div>
                            <h3 className="font-black text-lg mb-2 group-hover:text-bd-red transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-bd-red/80 transition-colors">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Gallery CTA */}
                <div className="mt-12 text-center flex items-center justify-center gap-4">
                    <Link href="/heritage">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-bd-green hover:bg-white border-2 border-transparent hover:border-bd-red text-white hover:text-bd-red rounded-xl font-black uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(0,106,78,0.3)] hover:shadow-[0_15px_40px_rgba(244,42,65,0.4)] transition-all cursor-pointer"
                        >
                            🏛️ Explore Heritage
                        </motion.div>
                    </Link>
                    <Link href="/foods">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-bd-red hover:bg-white border-2 border-transparent hover:border-bd-red text-white hover:text-bd-red rounded-xl font-black uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(244,42,65,0.3)] hover:shadow-[0_15px_40px_rgba(244,42,65,0.4)] transition-all cursor-pointer"
                        >
                            🍛 Bengali Kitchen
                        </motion.div>
                    </Link>
                </div>
            </div>

            {/* Result Modal */}
            <FactModal
                fact={selectedFact}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
