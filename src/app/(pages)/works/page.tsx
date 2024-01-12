import { PageHeader } from '@/common/components/PageHeader/PageHeader';
import styles from './page.module.scss';
import { Work } from '@/common/components/Work/Work';
import { works } from '@/static/works';

export default function WorksPage () {
  return (
    <div className={'wrapper'}>
      <PageHeader title={'My last works'} />
      <div className={styles.works}>
        {
          works.map(w => <Work
            key={w.id}
            bgImg={w.bgImg}
            img={w.img}
            title={w.title}
            date={w.date}
            link={w.link}
            technologies={w.technologies}
          />)
        }
      </div>
    </div>
  );
}