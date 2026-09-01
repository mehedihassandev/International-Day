'use client';

import React from 'react';
import { Recipe } from '@/data/recipes';
import { useRecipes } from '@/hooks/useRecipes';
import { ContentCard } from './content-card';

export function RecipesView() {
  const { data: recipesResponse } = useRecipes();
  const recipes = recipesResponse?.data || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1">
      {recipes.map((recipe: Recipe) => (
        <ContentCard
          key={recipe.id}
          id={recipe.id}
          type="recipe"
          emoji="🍛"
          title={recipe.title}
          description={recipe.description}
          details={[...recipe.ingredients, ...recipe.instructions]}
        />
      ))}
    </div>
  );
}