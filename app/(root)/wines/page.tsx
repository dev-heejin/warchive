import Link from 'next/link';

type wine = { id: number; name: string };
const wines: wine[] = [
  { id: 1, name: '샤또 마고' },
  { id: 2, name: '오퍼스 원' },
  { id: 3, name: '도멘 드 라 로마네 콩티' },
];
export default function WinesPage() {
  return (
    <div>
      <h1>와인 리스트 페이지 (/wines)</h1>
      <ul>
        {wines.map((wine) => (
          <li key={wine.id}>
            <Link href={`/wines/${wine.id}/new`}> {wine.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
