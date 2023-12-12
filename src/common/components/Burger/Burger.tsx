'use client';

import { FC } from 'react';
import styles from './burger.module.scss';

interface IProps {
  callback: () => void;
  isOpen: boolean;
}

export const Burger: FC<IProps> = (props) => {
  const onClickHandler = () => props.callback();
  
  return (
    <div
      className={`${styles.burger} ${props.isOpen ? styles.burgerActive : ''}`}
      onClick={onClickHandler}
    >
      <div className={styles.burger__line}></div>
      <div className={styles.burger__line}></div>
      <div className={styles.burger__line}></div>
    </div>
  );
};