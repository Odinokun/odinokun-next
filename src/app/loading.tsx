import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <h1 className={styles.loading__title}>Loading ...</h1>
    </div>
  );
}