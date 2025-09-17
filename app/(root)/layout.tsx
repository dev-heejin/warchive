import { ReactNode, Suspense } from 'react';

export default function LayoutWithPanel({
  children,
  panel,
}: {
  children: ReactNode;
  panel: ReactNode;
}) {
  return (
    <div className="grid grid-rows-1 gap-4 lg:[&:has(.panel-open)]:grid-cols-2">
      <main className="min-w-0">{children}</main>
      <Suspense fallback={null}>{panel}</Suspense>
    </div>
  );
}
