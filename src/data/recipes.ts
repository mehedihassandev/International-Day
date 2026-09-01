import { initialRecipes } from '@/scripts/seed-data';

export interface Recipe {
    id: string;
    title: string;
    description: string;
    category?: string;
    ingredients: string[];
    instructions: string[];
    serves?: string;
    prepTime?: string;
    image: string;
    images?: string[];
    imagePrompt: string;
}

export const recipes: Recipe[] = initialRecipes;

