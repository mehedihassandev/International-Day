import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getFacts,
  getFactById,
  getRandomFacts,
  GetFactsParams,
} from '@/services/factService';
import { Fact } from '@/data/facts';
import { CreateFactInput, UpdateFactInput } from '@/lib/validations/fact';
import { getApiUrl } from '@/lib/api-url';

export const FACT_QUERY_KEYS = {
  all: ['facts'] as const,
  lists: () => [...FACT_QUERY_KEYS.all, 'list'] as const,
  list: (params: GetFactsParams) => [...FACT_QUERY_KEYS.lists(), params] as const,
  details: () => [...FACT_QUERY_KEYS.all, 'detail'] as const,
  detail: (id: string) => [...FACT_QUERY_KEYS.details(), id] as const,
  random: (count: number) => [...FACT_QUERY_KEYS.all, 'random', count] as const,
};

/**
 * TanStack Query hook to fetch cultural facts list with filtering & search
 */
export function useFacts(params: GetFactsParams = {}) {
  return useQuery({
    queryKey: FACT_QUERY_KEYS.list(params),
    queryFn: () => getFacts(params),
    placeholderData: (prev) => prev,
  });
}

/**
 * TanStack Query hook to fetch a single fact by ID or slug
 */
export function useFact(id: string | null) {
  return useQuery({
    queryKey: FACT_QUERY_KEYS.detail(id || ''),
    queryFn: () => (id ? getFactById(id) : null),
    enabled: Boolean(id),
  });
}

/**
 * TanStack Query hook to fetch random facts for the Spin Wheel
 */
export function useRandomFacts(count: number = 20) {
  return useQuery({
    queryKey: FACT_QUERY_KEYS.random(count),
    queryFn: () => getRandomFacts(count),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

/**
 * TanStack Query mutation to create a new Fact
 */
export function useCreateFact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newFact: CreateFactInput) => {
      const url = getApiUrl('/api/facts');
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFact),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to create fact');
      }
      return data.data as Fact;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FACT_QUERY_KEYS.all });
    },
  });
}

/**
 * TanStack Query mutation to update a Fact
 */
export function useUpdateFact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateFactInput }) => {
      const url = getApiUrl(`/api/facts/${encodeURIComponent(id)}`);
      const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to update fact');
      }
      return resData.data as Fact;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: FACT_QUERY_KEYS.all });
      queryClient.invalidateQueries({ queryKey: FACT_QUERY_KEYS.detail(variables.id) });
    },
  });
}

/**
 * TanStack Query mutation to delete a Fact
 */
export function useDeleteFact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const url = getApiUrl(`/api/facts/${encodeURIComponent(id)}`);
      const res = await fetch(url, {
        method: 'DELETE',
      });
      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to delete fact');
      }
      return resData;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FACT_QUERY_KEYS.all });
    },
  });
}
