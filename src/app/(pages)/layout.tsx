import type { ReactNode } from 'react';
import { Aside } from '@/common/components/Aside/Aside';

export default function DashboardLayout(
  { children }: { children: ReactNode },
) {
  return (
    <div>
      <Aside />
      <h1>SHARED</h1>
      <div>{children}</div>
    </div>
  );
}