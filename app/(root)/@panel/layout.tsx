'use client';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

export default function PanelSlot({ children }: { children: ReactNode }) {
  const seg = useSelectedLayoutSegment(); // 비활성 시 null
  const [open, setOpen] = useState(false); // 슬라이드 상태

  useEffect(() => {
    if (seg) {
      requestAnimationFrame(() => setOpen(true));
    }
  }, [seg]);

  if (!seg) return null;

  return (
    <section
      className={`panel-open basis-1/2 overflow-y-auto transition-transform duration-300 ease-out ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {children}
    </section>
  );
}
