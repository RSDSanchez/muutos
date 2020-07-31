import Layout from '../components/Layout';
import { withTranslation } from '../i18n';

const Services = ({ t }) => {
  const title = 'Muutos Digital - Services';
  return (
    <Layout title={title}>
      <h1>{t('Services')}</h1>
    </Layout>
  );
};

Services.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Services);
