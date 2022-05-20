import Sarmiento from "../assets/images/Sarmiento.jpeg";

const CardSpotify = () => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl h-36 m-5 flex justify-around items-center imagenEpisodio p-2">
        <img src={Sarmiento} alt="episodio" className="p-2 rounded-3xl h-32" />
        <div className='w-1 h-24 bg-gray-400'></div>
        <p className="text-lg font-bold uppercase text-gray-500">
          Episodio 54: Sarmiento y las orgias
        </p>
        <button className="svgEpisodio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 svgEpisodioBoton p-1 hover:opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-xl h-36 m-5 flex justify-around items-center imagenEpisodio opacity-70 p-2">
        <img src={Sarmiento} alt="episodio" className="p-2 rounded-3xl h-32" />
        <div className='w-1 h-24 bg-gray-400'></div>
        <p className="text-lg font-bold uppercase text-gray-500">
          Episodio 54: Sarmiento y las orgias
        </p>
        <button className="svgEpisodio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 svgEpisodioBoton p-1 hover:opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-xl h-36 m-5 flex justify-around items-center imagenEpisodio opacity-50 p-2">
        <img src={Sarmiento} alt="episodio" className="p-2 rounded-3xl h-32" />
        <div className='w-1 h-24 bg-gray-400'></div>
        <p className="text-lg font-bold uppercase text-gray-500">
          Episodio 54: Sarmiento y las orgias
        </p>
        <button className="svgEpisodio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 svgEpisodioBoton p-1 hover:opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
      <div className='flex justify-end mt-2'><a href='https://open.spotify.com/show/4u1nTj7G2CaNT7pZCntXvr' target='_blank' className="botonIrAlBlog p-3 rounded-lg uppercase my-4 mr-10 hover:opacity-80 transition-all">Ver más</a></div>
    </div>
  );
};

export default CardSpotify;
