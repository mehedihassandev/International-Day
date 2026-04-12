import React from 'react';
import { RECIPES } from '@/lib/data';
import { ContentCard } from './content-card';

export function RecipesView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1">
      {RECIPES.map((recipe) => (
        <ContentCard
          key={recipe.id}
          id={recipe.id}
          type="recipe"
          emoji={recipe.emoji}
          title={recipe.title}
          description={recipe.description}
          details={[...recipe.ingredients, ...recipe.instructions]}
        />
      ))}
    </div>
  );
}