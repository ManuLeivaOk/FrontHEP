import { Link } from "react-router-dom";
import { formatearFecha } from "../helpers/Index";

const CardDelBlog = ({ articulo }) => {
  const { titulo, contenido, imagen, fecha, resumen, _id } = articulo;

  return (
    <div className="my-12">
      <div className="flex mb-4">
        <div className="mx-2 md:w-2/12 fechaNoticias text-center ">
          <p>{formatearFecha(fecha)}</p>
          <img
            src={imagen.url}
            alt=""
            className="rounded-3xl h-24 mx-auto mt-2"
          />
        </div>
        <div className="w-10/12">
          <h5 className="font-bold text-xl text-gray-600">{titulo}</h5>
          <h6 className="">{resumen}</h6>
          <p className="text-gray-400 my-3 contenidoCardsBlog">{contenido}</p>
        </div>
      </div>
      <div className='flex justify-end'>
        <Link
          to="/"
          className="text-gray-300 hover:opacity-70 uppercase botonDeArticulo p-3 rounded-lg mr-24"
        >
          Leer entrada
        </Link>
      </div>

      <div className="h-1 w-10/12 bg-gray-300 my-10 mx-auto"></div>
    </div>
  );
};

export default CardDelBlog;
