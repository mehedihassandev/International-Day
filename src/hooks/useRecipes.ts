import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getRecipes,
  getRecipeById,
  GetRecipesParams,
} from '@/services/recipeService';
import { Recipe } from '@/data/recipes';
import { CreateRecipeInput, UpdateRecipeInput } from '@/lib/validations/recipe';
import { getApiUrl } from '@/lib/api-url';

export const RECIPE_QUERY_KEYS = {
  all: ['recipes'] as const,
  lists: () => [...RECIPE_QUERY_KEYS.all, 'list'] as const,
  list: (params: GetRecipesParams) => [...RECIPE_QUERY_KEYS.lists(), params] as const,
  details: () => [...RECIPE_QUERY_KEYS.all, 'detail'] as const,
  detail: (id: string) => [...RECIPE_QUERY_KEYS.details(), id] as const,
};

/**
 * TanStack Query hook to fetch recipes list with filtering & search
 */
export function useRecipes(params: GetRecipesParams = {}) {
  return useQuery({
    queryKey: RECIPE_QUERY_KEYS.list(params),
    queryFn: () => getRecipes(params),
    placeholderData: (prev) => prev,
  });
}

/**
 * TanStack Query hook to fetch a single recipe by ID or slug
 */
export function useRecipe(id: string | null) {
  return useQuery({
    queryKey: RECIPE_QUERY_KEYS.detail(id || ''),
    queryFn: () => (id ? getRecipeById(id) : null),
    enabled: Boolean(id),
  });
}

/**
 * TanStack Query mutation to create a new Recipe
 */
export function useCreateRecipe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newRecipe: CreateRecipeInput) => {
      const url = getApiUrl('/api/recipes');
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipe),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to create recipe');
      }
      return data.data as Recipe;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RECIPE_QUERY_KEYS.all });
    },
  });
}

/**
 * TanStack Query mutation to update a Recipe
 */
export function useUpdateRecipe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateRecipeInput }) => {
      const url = getApiUrl(`/api/recipes/${encodeURIComponent(id)}`);
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to update recipe');
      }
      return resData.data as Recipe;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: RECIPE_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: RECIPE_QUERY_KEYS.detail(variables.id) });
    },
  });
}

/**
 * TanStack Query mutation to delete a Recipe
 */
export function useDeleteRecipe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const url = getApiUrl(`/api/recipes/${encodeURIComponent(id)}`);
      const res = await fetch(url, {
        method: 'DELETE',
      });
      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to delete recipe');
      }
      return resData;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RECIPE_QUERY_KEYS.all });
    },
  });
}
