import Link from 'next/link';
import Head from 'next/head';
import MainNavbar from './MainNavbar';

export default function Layout({ children, title = 'Muutos Digital' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav>
          <MainNavbar />
        </nav>
      </header>

      {children}

      <footer>{'I`m here to stay'}</footer>
    </div>
  );
}
