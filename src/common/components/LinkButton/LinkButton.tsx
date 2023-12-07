import { FC } from 'react';
import Link from 'next/link';
import styles from './link-button.module.scss';

interface IProps {
  href: string;
  title: string;
  btnColor: 'light' | 'dark';
  target?: string;
  rel?: string;
}

export const LinkButton: FC<IProps> = ({
  href,
  title,
  btnColor,
  target,
  rel,
}) => {
  return (
    <div
      className={`${styles.linkButtonWrapper}
      ${btnColor === 'light' ? styles.wrapperLight : styles.wrapperDark}`}
    >
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${styles.linkButton}
        ${btnColor === 'light' ? styles.buttonLight : styles.buttonDark}`}
      >
        {title}
      </Link>
    </div>
  );
};