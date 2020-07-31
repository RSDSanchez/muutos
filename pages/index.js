/* import styles from '../styles/Home.module.css'; */

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { withTranslation } from '../i18n';

const Home = ({ t }) => {
  const title = 'Muutos Digital - Home';
  return (
    <Layout title={title}>
      <Hero />
    </Layout>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Home);
