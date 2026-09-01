import { Fact as FactType } from '@/data/facts';
import { getApiUrl } from '@/lib/api-url';

export interface GetFactsParams {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

export interface FactsResponse {
  success: boolean;
  data: FactType[];
  count: number;
  total: number;
  page?: number;
  limit?: number;
}

/**
 * Fact Service for fetching facts from MongoDB Atlas API.
 * Automatically adapts between localhost:3000 in dev and production URL in prod.
 */
export async function getFacts(params: GetFactsParams = {}): Promise<FactsResponse> {
  const query = new URLSearchParams();
  if (params.category && params.category !== 'All') query.set('category', params.category);
  if (params.search) query.set('search', params.search);
  if (params.page) query.set('page', params.page.toString());
  if (params.limit) query.set('limit', params.limit.toString());
  if (params.sort) query.set('sort', params.sort);

  const url = getApiUrl(`/api/facts?${query.toString()}`);
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch facts: HTTP ${res.status}`);
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
 * Fetches a single fact by id or slug from MongoDB Atlas API.
 */
export async function getFactById(id: string): Promise<FactType | null> {
  const url = getApiUrl(`/api/facts/${encodeURIComponent(id)}`);
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch fact ${id}: HTTP ${res.status}`);
  }

  const json = await res.json();
  return json.data || null;
}

/**
 * Fetches random facts for the Spin Wheel from MongoDB Atlas API.
 */
export async function getRandomFacts(count: number = 20): Promise<FactType[]> {
  const url = getApiUrl(`/api/facts/random?count=${count}`);
  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch random facts: HTTP ${res.status}`);
  }

  const json = await res.json();
  return json.data || [];
}
