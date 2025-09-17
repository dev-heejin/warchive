import { WineCategory } from '@/types/wineCategory';

export interface Wine {
  category: WineCategory;
  id: string;
  location_nation: string;
  location_region: string;
  rating_average: number;
  rating_reviews: number;
  wine: string;
  winery: string;
}

export interface WineFilters {
  category?: WineCategory;
  search?: string;
  sortBy?: 'name' | 'rating';
  sortOrder?: 'asc' | 'desc';
}
