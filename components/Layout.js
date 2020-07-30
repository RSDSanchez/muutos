import Link from 'next/link';
import Head from 'next/head';
import { Container } from 'reactstrap';
import MainNavbar from './MainNavbar';

import Loader from '../components/Loader';

import { PageTransition } from 'next-page-transitions';

export default function Layout({ children, title = 'Muutos Digital' }) {
  const TIMEOUT = 400;

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

      <PageTransition
        timeout={TIMEOUT}
        classNames="page-transition"
        loadingComponent={<Loader />}
        loadingDelay={500}
        loadingTimeout={{
          enter: TIMEOUT,
          exit: 0,
        }}
        loadingClassNames="loading-indicator"
      >
        {children}
      </PageTransition>

      <footer>{'I`m here to stay'}</footer>
    </div>
  );
}
