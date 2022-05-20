import Actualizaciones from "./Actualizaciones"
import CardTienda from "./CardTienda"
import Noticias from "./Noticias"
import Articulos from "./Articulos"
import Donaciones from "./Donaciones"

const Section = ( { arrayArticulos } ) => {

  return (
    <div className='container mx-auto'>
        <div className='h-1 w-10/12 bg-gray-300 my-10 mx-auto'></div>

        <Donaciones/>
        <div className='h-1 w-10/12 bg-gray-300 my-10 mx-auto'></div>

        <h2 className='text-center font-black text-5xl tituloTienda p-6 mt-5'>Visitá nuestra tienda</h2>
        <CardTienda />
        <div className='h-1 w-10/12 bg-gray-300 my-10 mx-auto'></div>

        <h2 className='text-center font-black text-5xl tituloTienda p-6 mt-5'>Artículos destacados</h2>
        <Articulos 
          arrayArticulos={arrayArticulos} 
        />
        <div className='h-1 w-10/12 bg-gray-300 my-10 mx-auto'></div>

        <h2 className='text-center font-black text-5xl tituloTienda p-6 mt-5'>Podcast y Youtube</h2>
        <Actualizaciones/>
        <div className='h-1 w-10/12 bg-gray-300 my-10 mx-auto'></div>

        <h2 className='text-center font-black text-5xl tituloTienda p-6 mt-5'>Novedades destacadas</h2>
        <Noticias/>
             
    </div>
  )
}

export default Section