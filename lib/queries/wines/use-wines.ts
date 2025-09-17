import { useQuery } from '@tanstack/react-query';

import { wineAPI } from '@/lib/api/wines';
import { queryKeys } from '@/lib/queries/keys';
import { WineFilters } from '@/types/wine';

export function useWines(filters?: WineFilters) {
  return useQuery({
    queryFn: () => wineAPI.getWines(filters),
    queryKey: queryKeys.wines.list(filters),
    staleTime: 1000 * 60 * 5,
  });
}
