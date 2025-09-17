import { useQuery } from '@tanstack/react-query';

import { fetchWinesByCategory } from '@/lib/api/wines';
import { WineCategory } from '@/types/wineCategory';

export function useWineByCategory(category: WineCategory) {
  return useQuery({
    enabled: !!category,
    queryFn: () => fetchWinesByCategory(category),
    queryKey: ['wines', category],
    staleTime: 5 * 60 * 1000,
  });
}
