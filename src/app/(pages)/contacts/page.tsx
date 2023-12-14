import styles from './page.module.scss';
import { CustomMap } from '@/app/(pages)/contacts/CustomMap/CustomMap';
import { PageHeader } from '@/common/components/PageHeader/PageHeader';
import { LinkButton } from '@/common/components/LinkButton/LinkButton';
import { EmailIcon, GithubIcon, LinkedInIcon } from '@/static/icons';
import { portfolioLink } from '@/static/links';

export default function ContactsPage() {
  return (
    <div className={styles.contacts}>
      <CustomMap />
      
      <div className={styles.contacts__block}>
        <PageHeader title={'Contacts'} />
        <div className={styles.contacts__row}>
          <a
            href={'mailto:odinokun@gmail.com'}
            title={'E-mail'}
            className={styles.contacts__link}
          >
            <EmailIcon />
          </a>
          <a
            href={'https://www.linkedin.com/in/dmitry-gordienko'}
            target={'_blank'}
            rel={'noopener noreferrer nofollow'}
            title={'LinkedIn'}
            className={styles.contacts__link}
          >
            <LinkedInIcon />
          </a>
          <a
            href={'https://github.com/Odinokun'}
            target={'_blank'}
            rel={'noopener noreferrer nofollow'}
            title={'Github'}
            className={styles.contacts__link}
          >
            <GithubIcon />
          </a>
        </div>
        <LinkButton
          href={portfolioLink}
          title={'Download CV'}
          btnColor={'dark'}
          target="_blank"
        />
      </div>
    </div>
  );
}