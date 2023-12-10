import { FC } from 'react';
import Image from 'next/image';
import { CalendarIcon } from '@/static/icons';
import styles from './work.module.scss';

interface IProps {
  img: string;
  title: string;
  date: string;
  link: string;
  technologies: string[];
}

export const Work: FC<IProps> = ({
  img,
  title,
  date,
  link,
  technologies,
}) => {
  return (
    <a
      href={link}
      target={'_blank'}
      rel={'noopener noreferrer nofollow'}
      className={styles.work}
    >
      <Image src={img} alt={title} width={500} height={500} />
      <div className={styles.work__info}>
        <div className={styles.work__hidden}>
        
        <div className={styles.work__technologies}>
          {technologies.map((t, index) => <span key={index}>{t}</span>)}
        </div>
        <div className={styles.work__date}>
          <CalendarIcon />
          {date}
        </div>
        </div>
        
        <h3 className={styles.work__title}>{title}</h3>
      </div>
    </a>
  );
};