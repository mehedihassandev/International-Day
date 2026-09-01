import { useQuery } from '@tanstack/react-query';
import { getFacts, GetFactsParams } from '@/services/factService';

export const FACT_QUERY_KEYS = {
  all: ['facts'] as const,
  list: (params: GetFactsParams) => [...FACT_QUERY_KEYS.all, 'list', params] as const,
};

/**
 * TanStack Query hook to fetch cultural facts list directly from API
 */
export function useFacts(params: GetFactsParams = {}) {
  return useQuery({
    queryKey: FACT_QUERY_KEYS.list(params),
    queryFn: () => getFacts(params),
  });
}

