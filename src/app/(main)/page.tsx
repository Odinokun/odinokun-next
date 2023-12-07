import { Metadata } from 'next';
import styles from '../page.module.css'

export const metadata: Metadata = {
  title: 'Odinokun',
  description: 'Odinokun`s personal website',
}

export default function Home() {
  return (
    <main>
      <h2 className={styles.kaushan}>Kaushan HomePage</h2>
      <h2 className={styles.teko}>Teko HomePage</h2>
      <h2 className={styles.oswald}>Oswald HomePage</h2>
      <h2 className={styles.roboto}>Roboto HomePage</h2>
    </main>
  )
}
