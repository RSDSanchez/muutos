import '../styles/globals.css';
import '../styles/transitions.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';

import App from 'next/app';
import { appWithTranslation } from '../i18n';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async (appContext) => ({ ...(await App.getInitialProps(appContext)) });

export default appWithTranslation(MyApp);
