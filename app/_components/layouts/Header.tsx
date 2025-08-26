import { LogoIcon } from '@/app/_components/icons';

export default function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-screen-lg items-center justify-between px-4 sm:px-6">
        <LogoIcon height={40} width={40} />
      </div>
    </header>
  );
}
