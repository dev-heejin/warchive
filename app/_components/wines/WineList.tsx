'use client';

import { useSearchParams } from 'next/navigation';

import { useWines } from '@/lib/queries/wines/use-wines';
import { WineCategory } from '@/types/wineCategory';

export default function WineList() {
  const searchParams = useSearchParams();
  const category = (searchParams.get('category') as WineCategory) || undefined;
  const search = searchParams.get('search') || undefined;

  const {
    data: wines,
    error,
    isLoading,
  } = useWines({
    category,
    search,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>WineList</h1>
      <div>와인 개수: {wines?.length || 0}</div>

      {wines?.map((wine) => (
        <div key={wine.id}>
          <h3>{wine.wine}</h3>
          <p>{wine.winery}</p>
        </div>
      ))}
    </div>
  );
}
