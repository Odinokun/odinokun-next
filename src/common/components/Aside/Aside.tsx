'use client';

import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AsideLogo } from '@/common/components/Aside/AsideLogo/AsideLogo';
import { AsideIcon } from '@/common/components/Aside/AsideIcon/AsideIcon';

import { ROUTES } from '@/routes/routes';
import styles from './aside.module.scss';
import { Burger } from '@/common/components/Burger/Burger';
import { useWindowSize } from '@/common/hooks/useWindowSize';

export const Aside: FC = () => {
  const pathname = usePathname();
  const { width } = useWindowSize();
  
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(prev => !prev);
  };
  useEffect(() => {
    setIsOpen(prev => !prev);
  }, []);
  
  return (
    <>
      {(width < 768) && <Burger
        callback={onClickHandler}
        isOpen={isOpen}
      />}
      <aside className={styles.aside}>
        <div className={`${styles.aside__inner} ${isOpen ? styles.aside__innerActive : ''}`}>
          <AsideLogo />
          <nav className={styles.aside__nav}>
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
                    isAvailable && <li
                      key={id}
                      className={styles.aside__item}
                      onClick={onClickHandler}
                    >
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
                    </li>
                  );
                },
              )
              }
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};