'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AsideLogo } from '@/common/components/Aside/AsideLogo/AsideLogo';
import { AsideIcon } from '@/common/components/Aside/AsideIcon/AsideIcon';

import { ROUTES } from '@/routes/routes';
import styles from './aside.module.scss';

export const Aside: FC = () => {
  const pathname = usePathname();
  
  return (
    <aside className={styles.aside}>
      <AsideLogo />
      <nav>
        <ul className={styles.aside__list}>
          {ROUTES.map(({
              id,
              path,
              label,
              isAvailable,
              icon: Icon,
              isDisabled,
            }) => {
              return (
                <>
                  {isAvailable && <li key={id} className={styles.aside__item}>
                    <Link
                      href={path}
                      className={`${styles.aside__link}
                      ${pathname === path ? styles.active : ''}
                      ${isDisabled ? styles.disabled : ''}
                      `}
                    >
                      {Icon && <AsideIcon icon={Icon} />}
                      {label}
                    </Link>
                  </li>}
                </>
              );
            },
          )
          }
        </ul>
      </nav>
    </aside>
  );
};