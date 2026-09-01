"use client";

import React from "react";
import Link from "next/link";
import {
    Compass,
    Library,
    UtensilsCrossed,
    Sparkles,
    Heart,
    Globe2,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-bd-green-dark via-[#003828] to-[#00241a] text-white border-t border-emerald-800/40 overflow-hidden">
            {/* Subtle Ambient Background Accents */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-bd-red/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-bd-green/20 rounded-full blur-3xl pointer-events-none" />

            {/* Top Color Accent Line */}
            <div className="h-1 w-full bg-gradient-to-r from-bd-green via-bd-red to-bd-gold" />

            <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Brand & Mission */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 group"
                        >
                            <div className="relative h-10 w-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300 border border-white/20" />
                                <div className="relative h-5 w-5 bg-bd-red rounded-full shadow-[0_0_12px_rgba(206,17,38,0.7)]" />
                            </div>
                            <div>
                                <span className="text-lg font-black tracking-tight text-white block leading-tight">
                                    Bangladesh{" "}
                                    <span className="text-rose-400">
                                        Cultural
                                    </span>
                                </span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-300/80">
                                    Heritage • Nature • Culinary
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-emerald-100/75 leading-relaxed">
                            An immersive digital celebration of the rich
                            history, magnificent landscapes, and authentic
                            culinary heritage of Bangladesh.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs text-amber-300 font-medium">
                            <Sparkles size={13} className="text-amber-400" />
                            <span>
                                International Mother Language Day Tribute
                            </span>
                        </div>
                    </div>

                    {/* Quick Exploration */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300 mb-4 flex items-center gap-2">
                            <Globe2 size={14} /> Quick Exploration
                        </h4>
                        <ul className="space-y-2.5 text-sm font-medium text-emerald-100/80">
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all"
                                >
                                    <Compass
                                        size={15}
                                        className="text-emerald-400"
                                    />
                                    <span>Interactive Spin Wheel</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/heritage"
                                    className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all"
                                >
                                    <Library
                                        size={15}
                                        className="text-amber-400"
                                    />
                                    <span>Heritage & GI Archive</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/foods"
                                    className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all"
                                >
                                    <UtensilsCrossed
                                        size={15}
                                        className="text-bd-red"
                                    />
                                    <span>Authentic Bengali Kitchen</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Featured National Pillars */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300 mb-4">
                            Cultural Pillars
                        </h4>
                        <ul className="space-y-2 text-sm text-emerald-100/75">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-bd-red" />
                                <span>1952 Language Movement (UNESCO)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <span>Dhaka Muslin & Jamdani Saree</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                <span>Sundarbans Royal Bengal Tigers</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                                <span>Padma Hilsa & Royal Kacchi Biryani</span>
                            </li>
                        </ul>
                    </div>

                    {/* Cultural Tribute Card */}
                    <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 block mb-1">
                                Historic Tribute
                            </span>
                            <h5 className="font-bold text-white text-sm mb-2">
                                21st February (Ekushey)
                            </h5>
                            <p className="text-xs text-emerald-100/70 leading-relaxed">
                                Honoring the language martyrs who gave their
                                lives for mother tongue rights, inspiring the
                                world.
                            </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-200">
                            <span>আমার ভাইয়ের রক্তে রাঙানো</span>
                            <span>🇧🇩</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
                    <p>
                        © {new Date().getFullYear()} Bangladesh Cultural
                        Showcase. Crafted with pride.
                    </p>
                    <div className="flex items-center gap-1">
                        <span>Celebrating the rich heritage of Bangladesh</span>
                        <Heart
                            size={12}
                            className="text-bd-red fill-bd-red mx-1"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
