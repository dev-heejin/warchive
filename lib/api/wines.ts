import { supabase } from '@/lib/supabase/client';
import { Wine } from '@/types/wine';
import { WineCategory } from '@/types/wineCategory';

export const wineAPI = {
  async getAllWines(): Promise<Wine[]> {
    const { data, error } = await supabase.from('wines').select('*');

    if (error) {
      console.error('Error fetching all wines:', error);
      throw new Error('와인 목록을 불러오는데에 실패했습니다.');
    }

    return data || [];
  },
  // 카테고리별 와인 목록을 평점 순으로 가져오는 함수
  async getWines(filters?: { category?: WineCategory; search?: string }): Promise<Wine[]> {
    let query = supabase.from('wines').select('*');

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }

    if (filters?.search) {
      query = query.ilike('wine', `%${filters.search}%`);
    }

    const { data, error } = await query.order('rating_average', { ascending: false });

    if (error) {
      console.error('Error fetching wines:', error);
      throw new Error('와인 목록을 불러오는데 실패했습니다.');
    }
    return data || [];
  },
};
