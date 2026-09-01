import { Recipe as RecipeType } from '@/data/recipes';
import { getApiUrl } from '@/lib/api-url';

export interface GetRecipesParams {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

export interface RecipesResponse {
  success: boolean;
  data: RecipeType[];
  count: number;
  total: number;
  page?: number;
  limit?: number;
}

/**
 * Recipe Service for fetching recipes from MongoDB Atlas API.
 * Automatically adapts between localhost:3000 in dev and production URL in prod.
 */
export async function getRecipes(params: GetRecipesParams = {}): Promise<RecipesResponse> {
  const query = new URLSearchParams();
  if (params.category && params.category !== 'All') query.set('category', params.category);
  if (params.search) query.set('search', params.search);
  if (params.page) query.set('page', params.page.toString());
  if (params.limit) query.set('limit', params.limit.toString());
  if (params.sort) query.set('sort', params.sort);

  const url = getApiUrl(`/api/recipes?${query.toString()}`);
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch recipes: HTTP ${res.status}`);
  }

  const data = await res.json();
  return {
    success: true,
    data: data.data || [],
    count: data.count || 0,
    total: data.total || 0,
    page: data.page,
    limit: data.limit,
  };
}

/**
 * Fetches a single recipe by id or slug from MongoDB Atlas API.
 */
export async function getRecipeById(id: string): Promise<RecipeType | null> {
  const url = getApiUrl(`/api/recipes/${encodeURIComponent(id)}`);
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch recipe ${id}: HTTP ${res.status}`);
  }

  const json = await res.json();
  return json.data || null;
}
