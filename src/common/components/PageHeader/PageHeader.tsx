import { FC } from 'react';
import styles from './page-header.module.scss';

interface IProps {
  title: string;
}

export const PageHeader: FC<IProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};