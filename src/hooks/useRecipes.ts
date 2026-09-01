import { useQuery } from '@tanstack/react-query';
import { getRecipes, GetRecipesParams } from '@/services/recipeService';

export const RECIPE_QUERY_KEYS = {
  all: ['recipes'] as const,
  list: (params: GetRecipesParams) => [...RECIPE_QUERY_KEYS.all, 'list', params] as const,
};

/**
 * TanStack Query hook to fetch recipes list directly from API
 */
export function useRecipes(params: GetRecipesParams = {}) {
  return useQuery({
    queryKey: RECIPE_QUERY_KEYS.list(params),
    queryFn: () => getRecipes(params),
  });
}

