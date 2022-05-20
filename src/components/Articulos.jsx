
import { Link } from "react-router-dom";
import Articulo from "./Articulo";

const Articulos = ( { arrayArticulos } ) => {

  let ultimosArticulos = arrayArticulos.slice(arrayArticulos.length-3)
  console.log(ultimosArticulos)

  return (
    <>
    <div className='container mx-auto md:flex'>
      
      {ultimosArticulos.map( articulo => (
        <Articulo
          key={articulo._id}
          articulo={articulo}
        />
      ))}

    
    
  
    </div>
    <div className='flex justify-end mt-5 hover:opacity-80'><a href='/blog' className="botonIrAlBlog p-3 rounded-lg uppercase my-4 mr-10 transition-all">Ver todos los artículos</a></div>
    </>
  );
};

export default Articulos;
