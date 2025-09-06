'use client';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

import { LogoIconVer2 } from '@/app/_components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Header() {
  const [search, setSearch] = useState<string>('');

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = () => {
    //@TODO react-query search & router push to query page
  };

  return (
    <header className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="flex h-14 items-center justify-between px-2 sm:px-6">
        <LogoIconVer2 colorClass="text-rose-800" height={30} width={30} />
        <form className="flex w-full max-w-sm items-center gap-2">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeydown}
            type="text"
            value={search}
          />
          <Button onClick={handleSearch}>
            <SearchIcon />
          </Button>
        </form>
      </div>
    </header>
  );
}
