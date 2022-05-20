import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Section from "../components/Section";

const Index = ( { arrayArticulos } ) => {
  return (
    <div>

      <Nav />

      <Header/>

      <Section arrayArticulos={arrayArticulos}/>

      <Footer />
    </div>
  );
};

export default Index;
