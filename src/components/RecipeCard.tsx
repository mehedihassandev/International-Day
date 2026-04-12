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
      className="group relative bg-white rounded-[2.5rem] border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
    >
      {/* Top Banner (National Green) */}
      <div className="h-2 w-full bg-bd-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content Section */}
      <div className="p-8">
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

      {/* Expanded Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-muted/20 border-t"
          >
            <div className="p-8 space-y-8">
              {/* Ingredients */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-bd-green mb-4">
                  <div className="h-2 w-2 rounded-full bg-bd-red" />
                  Ingredients
                </h4>
                <ul className="grid grid-cols-1 gap-2">
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

      {/* Expand Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-full py-5 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
          isExpanded ? "bg-bd-green text-white" : "bg-white text-bd-green hover:bg-bd-green/5"
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
    </motion.div>
  );
}
