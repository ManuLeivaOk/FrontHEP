import Temp1 from '../assets/images/modelo-1---temporada-1_optimized.png'
const CardShop = () => {
  return (
    
      <div className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 mx-10">
        <img src={Temp1} className="h-40 mb-3 rounded-xl mx-auto" />
        <h3 className="mb-3 font-bold text-xl text-center">Historia al alcance de todos</h3>
        <h4 className='text-center lg text-gray-600'>Temporada 1</h4>
        <h5 className='text-center lg text-gray-600'>Formato digital</h5>
        <p className="text-center my-3">
          Precio: <span className="precioLibro font-bold">$950</span>
        </p>
        <input
          type="submit"
          className="botonItemTienda w-full p-2 text-white font-bold hover:opacity-50 cursor-pointer transition-all"
          value="Comprar"
        ></input>
      </div>
    
  );
};

export default CardShop;
