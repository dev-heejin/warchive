import WineList from '@/app/_components/wines/WineList';

export default async function WinesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const params = await searchParams;

  return (
    <div>
      <h1>{params.category}</h1>
      <WineList />
    </div>
  );
}
