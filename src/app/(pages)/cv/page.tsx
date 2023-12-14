import { PageHeader } from '@/common/components/PageHeader/PageHeader';
import { LinkButton } from '@/common/components/LinkButton/LinkButton';
import { skillsArr } from '@/static/skills-array';
import { EmailIcon, GithubIcon, LinkedInIcon } from '@/static/icons';
import styles from './page.module.scss';

export default function CvPage() {
  return (
    <div className={'wrapper'}>
      <PageHeader title={'My CV'} />
      <article className={styles.cv}>
        <section className={styles.section}>
          <h1 className={styles.title}>Dmytro Hordiienko</h1>
          <h4 className={styles.subtitle}>front-end developer (React.js)</h4>
          <div className={styles.contacts}>
            <a
              href={'mailto:odinokun@gmail.com'}
              title={'E-mail'}
              className={styles.contact}
            >
              <EmailIcon />
            </a>
            <a
              href={'https://www.linkedin.com/in/dmitry-gordienko'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
              title={'LinkedIn'}
              className={styles.contact}
            >
              <LinkedInIcon />
            </a>
            <a
              href={'https://github.com/Odinokun'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
              title={'Github'}
              className={styles.contact}
            >
              <GithubIcon />
            </a>
          </div>
          <div className={styles.location}><strong>Location:</strong> Ottawa, Ontario, Canada</div>
        </section>
        
        <section className={styles.section}>
          <h2>Summary</h2>
          <p>I have worked as a front-end developer for 9 years, since 2014.</p>
          <p>I have experience of working in large corporate teams and in small startups. However, despite my experience
             in both large corporate teams and small startups, I prefer long-term working relationships and am not
             inclined to frequently change jobs.</p>
          <p>My superpower is the ability to transform a design of any complexity into a correctly functioning
             website.</p>
          <p>I love the frontend because new technologies appear in it every day. The work of a front-end developer was
             very well described by Lewis Carroll
            <q>My dear, here we must run as fast as we can, just to stay in place.
               And if you wish to go anywhere you must run twice as fast as that</q>.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>Skills & Tools</h2>
          <ul className={styles.skills}>
            {skillsArr.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Experience</h2>
          
          <section className={styles.work}>
            <h4>Metame</h4>
            <p className={styles.workDates}>2022 - 2023</p>
            <a
              href={'https://www.metamenft.io'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >(https://metamenft.io)</a>
            <p>A platform that specializes in the creation and sale of NFT tokens, unique digital assets based on the
               blockchain</p>
            <a
              href={'/'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >
              More in my CV...
            </a>
          </section>
          <section className={styles.work}>
            <h4>EpicentrK</h4>
            <p className={styles.workDates}>2020 - 2022</p>
            <a
              href={'https://epicentrk.ua'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >(https://epicentrk.ua)</a>
            <p>The biggest trade platform in Ukraine (like Canadian Tire): building materials, FMCG, and others. They
               own a network of big supermarkets and a big online store
            </p>
            <a
              href={'/'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >
              More in my CV...
            </a>
          </section>
          <section className={styles.work}>
            <h4>Self employed</h4>
            <p className={styles.workDates}>2014 - 2020</p>
            <p>Created over 150 websites of different levels of complexity:</p>
            <ul>
              <li>landing pages</li>
              <li>email campaigns</li>
              <li>big corporate sites</li>
              <li>online stores</li>
            </ul>
            <p>I also provided technical support and optimization for existing websites.</p>
            <a
              href={'/'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >
              More in my CV...
            </a>
          </section>
        </section>
        
        <section className={styles.section}>
          <h2>Education</h2>
          <p>Kyiv University of Tourism, Economics and Law (Ukraine) - <strong>Bachelor`s degree</strong> in law</p>
        </section>
        
        <section className={styles.section}>
          <h2>Additional coursesAdditional courses</h2>
          <p>React Developer Course (IT Incubator School) - in progress</p>
          <p>Complete JavaScript Course (Loftschool)</p>
          <p>Web Development for Advanced (Loftschool)</p>
        </section>
        
        <section className={styles.section}>
          <h2>Languages</h2>
          <p>Ukrainian, English, Russian, German</p>
          <div className={styles.buttonWrapper}>
            <LinkButton
              href="https://www.linkedin.com/in/dmitry-gordienko/"
              title="Download cv"
              btnColor="dark"
              target="_blank"
            />
          </div>
        </section>
      
      </article>
    </div>
  );
}