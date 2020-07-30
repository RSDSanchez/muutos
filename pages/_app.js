import '../styles/globals.css';
import '../styles/transitions.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import Loader from '../components/Loader';

import { PageTransition } from 'next-page-transitions';

export default function MyApp({ Component, pageProps }) {
  const TIMEOUT = 400;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
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
          <Component {...pageProps} />
        </PageTransition>
      </Layout>
    </>
  );
}
