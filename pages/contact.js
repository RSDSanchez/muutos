import Layout from '../components/Layout';
import { withTranslation } from '../i18n';

const Contact = ({ t }) => {
  const title = 'Muutos Digital - Contacto';
  return (
    <Layout title={title}>
      <h1>Contacto</h1>
    </Layout>
  );
};

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Contact);
