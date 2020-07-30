import { Jumbotron, Container } from 'reactstrap';

export default function Hero() {
  const title = 'Muutos Digital - Home';
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Muutos</h1>
        <p className="lead">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est
          non commodo luctus.
        </p>
      </Container>
    </Jumbotron>
  );
}
