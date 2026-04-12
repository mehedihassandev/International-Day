'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Recipe } from '@/data/recipes';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  recipe: Recipe;
}

/**
 * Premium Recipe Card with interactive expansion.
 * Features a national color theme and elegant layout.
 */
export function RecipeCard({ recipe }: RecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "group relative bg-white rounded-2xl border overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 flex",
        isExpanded ? "flex-col md:flex-row md:col-span-full items-stretch" : "flex-col col-span-1"
      )}
    >
      {/* Left Column (Always Visible) */}
      <div className={cn("flex flex-col relative", isExpanded ? "md:w-1/2 lg:w-1/3" : "w-full")}>
        {/* Top Banner (National Green) */}
        <div className="h-1 w-full bg-bd-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Thumbnail Image */}
        {recipe.image && (
          <div className="w-full h-48 md:h-56 overflow-hidden bg-earth-soft">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        {/* Content Section */}
        <div className="p-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-bd-green/10 text-bd-green text-[10px] font-black rounded-lg uppercase tracking-wider">
                Traditional
              </span>
            </div>
            <div className="h-10 w-10 bg-bd-red/10 rounded-full flex items-center justify-center text-bd-red">
              <Utensils size={18} />
            </div>
          </div>

          <h3 className="text-2xl font-black text-foreground mb-3 leading-tight group-hover:text-bd-green transition-colors">
            {recipe.title}
          </h3>

          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-6">
            {recipe.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-bd-red" />
              <span>{recipe.prepTime || '30 MIN'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-bd-green" />
              <span>{recipe.serves || '4 PERSONS'}</span>
            </div>
          </div>
        </div>

        {/* Expand Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "w-full min-h-[44px] py-4 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
            isExpanded ? "bg-bd-green text-white md:bg-white md:text-bd-green md:hover:bg-bd-green/5 md:border-t" : "bg-white text-bd-green hover:bg-bd-green/5"
          )}
        >
          {isExpanded ? (
            <>
              <ChevronUp size={16} />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              View Full Recipe
            </>
          )}
        </button>
      </div>

      {/* Right Column (Expanded Details) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-muted/20 border-t md:border-t-0 md:border-l md:w-1/2 lg:w-2/3"
          >
            <div className="p-6 md:p-8 space-y-6 md:space-y-8 h-full flex flex-col justify-center">
              {/* Ingredients */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-bd-green mb-4">
                  <div className="h-2 w-2 rounded-full bg-bd-red" />
                  Ingredients
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {recipe.ingredients.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-bd-red mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-bd-green mb-4">
                  <div className="h-2 w-2 rounded-full bg-bd-red" />
                  Preparation
                </h4>
                <ol className="space-y-4">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="flex-none w-6 h-6 rounded-full bg-bd-green text-white text-[10px] font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
