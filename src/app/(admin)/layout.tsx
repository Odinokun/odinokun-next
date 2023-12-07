import type { ReactNode } from 'react';

export default function DashboardLayout(
  { children }: { children: ReactNode },
) {
  return (
    <div>
      <h1>ODMIN Layout</h1>
      <div>{children}</div>
    </div>
  );
}