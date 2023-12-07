import { Metadata } from 'next';
import { LinkButton } from '@/common/components/LinkButton/LinkButton';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Odinokun',
  description: 'Odinokun`s personal website',
};

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.bg}>
        <svg viewBox="0 0 240 770">
          <polyline points="0,35 150,35 205,80 205,690 150,735 35,735 35,0" />
        </svg>
        <svg viewBox="0 0 240 770">
          <polyline points="35,63 35,770 35,500 205,460 205,705 205,0" />
        </svg>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Dima Hordiienko</h1>
        <h2 className={styles.subtitle}>front-end developer</h2>
        <div className={styles.buttonWrapper}>
          <LinkButton
            href="https://www.linkedin.com/in/dmitry-gordienko/"
            title="Download cv"
            btnColor="light"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
}
