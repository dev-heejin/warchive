import { ReactNode, Suspense } from 'react';

export default function LayoutWithPanel({
  children,
  panel,
}: {
  children: ReactNode;
  panel: ReactNode;
}) {
  return (
    <div className="grid h-dvh grid-rows-1 gap-4 lg:[&:has(.panel-open)]:grid-cols-2">
      <main className="min-w-0 overflow-y-auto">{children}</main>
      <Suspense fallback={null}>{panel}</Suspense>
    </div>
  );
}
