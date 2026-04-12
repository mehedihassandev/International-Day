'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SpinWheel } from '@/components/SpinWheel';
import { FactModal } from '@/components/FactModal';
import { Fact } from '@/data/facts';
import { Sparkles, History, Globe, Landmark } from 'lucide-react';

/**
 * Home page for the Bangladesh Cultural Showcase.
 * Features the Interactive Spin Wheel as the primary experience.
 */
export default function Home() {
  const [selectedFact, setSelectedFact] = useState<Fact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpinResult = (fact: Fact) => {
    setSelectedFact(fact);
    // Slight delay before opening modal for "wow" effect
    // Reset before new discovery
    setIsModalOpen(false);
    
    // Slight delay before opening modal for "wow" effect
    setTimeout(() => {
      setSelectedFact(fact);
      setIsModalOpen(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-bd-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-bd-red/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative pt-12 pb-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-bd-green/10 text-bd-green rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles className="h-4 w-4 animate-glow" />
            Discover the Heritage
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight"
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
            Spin the wheel to explore breathtaking facts, GI products, and historical landmarks starting from the ancient era to modern wonders.
          </motion.p>
        </div>

        {/* Spin Wheel Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
          className="relative z-10"
        >
          <SpinWheel onResult={handleSpinResult} disabled={isModalOpen} />
        </motion.div>

        {/* Feature Highlights */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: History, title: 'Deep History', desc: 'From the language movement to ancient kingdoms.' },
            { icon: Landmark, title: 'GI Products', desc: 'World famous Muslin, Jamdani, and more.' },
            { icon: Globe, title: 'Nature', desc: 'The longest sea beach and largest mangroves.' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border group hover:border-bd-green/30 transition-colors"
            >
              <div className="w-12 h-12 bg-bd-green/5 text-bd-green rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <h3 className="font-black text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
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
