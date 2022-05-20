import { Link } from "react-router-dom";

const Articulo = ({ articulo }) => {
  const { titulo, contenido, imagen, resumen, _id } = articulo;

  return (
    <div className="md:w-4/12 md:h-5/6">
      <div className="flex flex-col items-center mx-5 mt-6 shadow-xl bg-white rounded-md">
        <div className="">
          <img
            src={imagen.url}
            alt="imagenArticulo"
            className="h-56 p-3 rounded-3xl"
          />
        </div>
        <div className="p-5 h-[26rem]">
          <h4 className="font-black text-xl text-center mb-2">{titulo}</h4>
          <h5 className="mx-3 font-bold text-gray-600 text-lg mb-1">
            {resumen}
          </h5>
          <p className="text-gray-500 contenidoArticulos my-6">{contenido} </p>
          <Link
            to="/articulo/${_id}"
            className="text-gray-300 hover:opacity-70 uppercase botonDeArticulo p-3 rounded-lg"
          >
            Leer entrada
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
