import { Jumbotron, Container } from 'reactstrap';
import { withTranslation } from '../i18n';

const Hero = ({ t }) => {
  const title = 'Muutos Digital - Home';
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Muutos</h1>
        <p className="lead">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est
          non commodo luctus.
        </p>
        <p>{t('welcome')}</p>
      </Container>
    </Jumbotron>
  );
};

Hero.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Hero);
