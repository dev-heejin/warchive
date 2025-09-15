import { Logo } from '@/app/_components/common';
import { CategorySection, HeroSection } from '@/app/_components/home';

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center h-full min-h-[80vh] gap-8">
      <Logo />
      <HeroSection />
      <CategorySection />
    </main>
  );
}
