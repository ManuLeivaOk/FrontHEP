import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';

const Index = ({ arrayArticulos }) => {
  return (
    <>
      <Header />

      <Section arrayArticulos={arrayArticulos} />

      <Footer />
    </>
  );
};

export default Index;
