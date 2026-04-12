'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { facts, Fact } from '@/data/facts';
import { FactModal } from '@/components/FactModal';
import { Library, Maximize2 } from 'lucide-react';

/**
 * Heritage Gallery page showcasing cultural facts.
 * Provides a dedicated archive for exploring all discoveries.
 */
export default function HeritagePage() {
  const [selectedFact, setSelectedFact] = useState<Fact | null>(null);

  return (
    <div className="min-h-screen bg-earth-soft pb-16">
      {/* Hero Header */}
      <div className="bg-bd-red py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 border-4 border-white/20 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-8 border-white/10 rounded-full -translate-x-1/2 translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center text-white"
          >
            <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
              <Library size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Heritage Gallery</h1>
            <p className="text-lg text-white/80 max-w-2xl font-medium">
              Explore the entire archive of incredible facts, historic events, magnificent nature, and GI products representing the soul of Bangladesh.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedFact(fact)}
              className="group cursor-pointer bg-white rounded-2xl border shadow-soft hover:shadow-premium transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 overflow-hidden bg-earth-light/20">
                {fact.image ? (
                  <img 
                    src={fact.image} 
                    alt={fact.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bd-gradient opacity-10" />
                )}
                
                {/* Expand overlay icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg text-bd-green flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-bd-red/10 text-bd-red text-[10px] font-black rounded-md uppercase">
                    {fact.category}
                  </span>
                </div>
                <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-bd-red transition-colors">
                  {fact.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {fact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reused Fact Modal */}
      <FactModal
        fact={selectedFact}
        isOpen={selectedFact !== null}
        onClose={() => setSelectedFact(null)}
      />
    </div>
  );
}
