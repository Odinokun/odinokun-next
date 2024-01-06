import { PageHeader } from '@/common/components/PageHeader/PageHeader';
import { LinkButton } from '@/common/components/LinkButton/LinkButton';
import { EmailIcon, GithubIcon, LinkedInIcon } from '@/static/icons';
import { skillsArr } from '@/static/skills-array';
import { emailLink, githubLink, linkedinLink, portfolioLink } from '@/static/links';
import styles from './page.module.scss';

export default function CvPage() {
  return (
    <div className={'wrapper'}>
      <PageHeader title={'My CV'} />
      <article className={styles.cv}>
        <section className={styles.section}>
          <h1 className={styles.title}>Dima Hordiienko</h1>
          <h4 className={styles.subtitle}>front-end developer (React.js)</h4>
          <div className={styles.contacts}>
            <a
              href={emailLink}
              title={'E-mail'}
              className={styles.contact}
            >
              <EmailIcon />
            </a>
            <a
              href={linkedinLink}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
              title={'LinkedIn'}
              className={styles.contact}
            >
              <LinkedInIcon />
            </a>
            <a
              href={githubLink}
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
          <p>I have experience:</p>
          <ul>
            <li>of professional front end, web or mobile software development using JavaScript, HTML and CSS;</li>
            <li>of coding the websites and web applications layout based on the provided design mockup;</li>
            <li>of developing with libraries React.js, Next.js, Vue.js;</li>
            <li>of developing with animation libraries like GSAP and Three,js;</li>
          </ul>
          <p>I am an adaptable, innovative, reliable and responsible developer. Also I am a self-learner, problem solver and am not inclined to frequently change jobs.</p>
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
            <p className={styles.workDates}>Aug 2022 - Nov 2023</p>
            <a
              href={'https://www.metamenft.io'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >(https://metamenft.io)</a>
            <p>A platform that specializes in the creation and sale of NFT tokens, unique digital assets based on the
               blockchain</p>
            <a
              href={portfolioLink}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >
              More in my CV...
            </a>
          </section>
          
          <section className={styles.work}>
            <h4>EpicentrK</h4>
            <p className={styles.workDates}>Dec 2020 - July 2022</p>
            <a
              href={'https://epicentrk.ua'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >(https://epicentrk.ua)</a>
            <p>The biggest trade platform in Ukraine (like Canadian Tire): building materials, FMCG, and others. They
               own a network of big supermarkets and a big online store
            </p>
            <a
              href={portfolioLink}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >
              More in my CV...
            </a>
          </section>
          
          <section className={styles.work}>
            <h4>Krasnyk Studio</h4>
            <a
              href={'https://krasnykstudio.com.ua/en/home-eng/'}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >(https://krasnykstudio.com.ua)</a>
            <p className={styles.workDates}>Apr 2017 - Nov 2020</p>
            <p>A dynamic web design studio, crafting user-centric websites. Innovative, responsive designs tailored to
               elevate diverse digital experiences.</p>
            <a
              href={portfolioLink}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >
              More in my CV...
            </a>
          </section>
          
          <section className={styles.work}>
            <h4>MostOfDesign Studio</h4>
            <a
              href={'https://www.facebook.com/mostofdesign/'}
              target={'_blank'}
              rel={'https://facebook.com/mostofdesign'}
            >(https://epicentrk.ua)</a>
            <p className={styles.workDates}>Oct 2014 - Apr 2017</p>
            <p>Creative web design studio crafting captivating, user-centric websites. Innovative, responsive designs
               tailored to elevate digital experiences across diverse industries.</p>
            <a
              href={portfolioLink}
              target={'_blank'}
              rel={'noopener noreferrer nofollow'}
            >
              More in my CV...
            </a>
          </section>
        </section>
        
        <section className={styles.section}>
          <h2>Education</h2>
          <p>Kyiv University of Tourism, Economics and Law (Ukraine) - <strong>Bachelor`s degree</strong></p>
        </section>
        
        <section className={styles.section}>
          <h2>Additional coursesAdditional courses</h2>
          <p>React Developer Course (IT Incubator School)</p>
          <p>Complete JavaScript Course (Loftschool)</p>
          <p>Web Development for Advanced (Loftschool)</p>
        </section>
        
        <section className={styles.section}>
          <h2>Languages</h2>
          <p>Ukrainian, English, Russian, German</p>
          <div className={styles.buttonWrapper}>
            <LinkButton
              href={portfolioLink}
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