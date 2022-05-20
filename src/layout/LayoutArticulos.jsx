import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Blog from "../components/Blog"

const Articulos = ( { arrayArticulos } ) => {
  return (
    <div>
      <Nav />
      <Blog arrayArticulos={arrayArticulos}/>
      <Footer />
    </div>
  );
};

export default Articulos;
