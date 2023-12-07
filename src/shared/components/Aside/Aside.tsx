import { FC } from 'react';
import Link from 'next/link';

interface IProps {
}

export const Aside: FC<IProps> = () => {
  return (
    <aside>
      <Link href={'/'}>Site logo</Link>
      <nav>
        <ul>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/cv'}>Cv</Link></li>
          <li><Link href={'/works'}>Works</Link></li>
          <li><Link href={'/blog'}>Blog</Link></li>
          <li><Link href={'/contacts'}>Contacts</Link></li>
        </ul>
      </nav>
    </aside>
  );
};