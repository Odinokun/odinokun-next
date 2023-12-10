import { LinkButton } from '@/common/components/LinkButton/LinkButton';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFound__title}>Page Not Found</h1>
      <LinkButton
        href="/"
        title="Back to home"
        btnColor="light"
      />
    </div>
  );
}