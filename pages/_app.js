import '../styles/globals.css';
import '../styles/transitions.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
