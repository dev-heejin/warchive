import { WineFilters } from '@/types/wine';

export const queryKeys = {
  wines: {
    all: ['wines'] as const,
    list: (filters?: WineFilters) => ['wines', 'list', filters] as const,
  },
};
