import { FC } from 'react';
import styles from './aside-logo.module.scss';
import Link from 'next/link';

interface IProps {
}

export const AsideLogo: FC<IProps> = () => {
  return (
    <Link href={'/'} className={styles.logo}>
        <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M515 128V835V565L685 525V770V65" />
          <path d="M180 100H330L385 145V755L330 800H215V65" />
        </svg>
    </Link>
  );
};