import { Link } from "react-router-dom";
import m2t1 from "../assets/images/modelo-2---temporada-1_optimized.png";
import m3t2 from "../assets/images/modelo-8---temporada-2_optimized.png";

const CardTienda = () => {
  return (
    <div className="container mx-auto ">
      <h3 className="text-center font-bold text-2xl text-gray-600 ">
        Productos destacados
      </h3>
      <div className="md:flex">
        <div className="bg-gray-50 m-5 rounded-md shadow-xl md:w-6/12">
          <div className='flex flex-col items-center'>
            <img className='rounded-3xl p-5' src={m2t1} alt="destacado 1" />
            <h4 className='font-black text-xl'>Historia al alcance de todos</h4>
            <h5 className='font-bold text-gray-600'>Temporada 1</h5>
            <p className='mb-2 text-gray-600'>Del feudalismo a la Guerra Fría</p>
          </div>
        </div>

        <div className="bg-gray-50 m-5 rounded-md shadow-xl md:w-6/12">
          <div className='flex flex-col items-center'>
            <img className="rounded-3xl p-5" src={m3t2} alt="destacado 2" />
            <h4 className='font-black text-xl'>Historia al alcance de todos</h4>
            <h5 className='font-bold text-gray-600'>Temporada 2</h5>
            <p className='mb-2 text-gray-600'>De la llegada del hombre a América a La crisis del sistema colonial</p>
          </div>
          </div>
        </div>
      <div className="flex justify-end">
        <a href='/tienda' className="botonIrALaTienda p-3 rounded-lg uppercase my-4 mr-10 hover:opacity-80 transition-all">
          Ir a la tienda
        </a>
      </div>
    </div>
  );
};

export default CardTienda;
