import styles from '../styles/Home.module.css';
import { Jumbotron, Container } from 'reactstrap';

import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  const title = 'Muutos Digital - Home';
  return (
    <Layout title={title}>
      <Hero />
    </Layout>
  );
}
