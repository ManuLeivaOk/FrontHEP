import YouTubeIcon from "../assets/images/YouTubeIcon.svg";
import Spotify from "../assets/images/Spotify.svg";
import CardSpotify from "./CardSpotify";
import CardYoutube from "./CardYoutube";

const Actualizaciones = () => {
  return (
    <div className="container mx-auto">
      <h4 className="text-center text-gray-600 font-bold text-2xl">
        Contenidos mas recientes
      </h4>
      <div className="md:flex my-10">
        <div className="md:w-6/12 text-center">
          <h5 className="text-gray-600 text-lg">
            Ultimos episodios en{" "}
            <img src={Spotify} alt="Youtube" className="w-36 inline-block" />
          </h5>
        </div>
        <div className="md:w-6/12 text-center md:block hidden">
          <h5 className="text-gray-600 text-lg">
            Videos más recientes en{" "}
            <img
              src={YouTubeIcon}
              alt="Youtube"
              className="w-32 inline-block"
            />
          </h5>
        </div>
      </div>
      <div className='md:flex'>
        <div  className='md:w-6/12 text-center'>
          <CardSpotify />
        </div>
        <div className="text-center md:hidden block my-10">
          <h5 className="text-gray-600 text-lg">
            Videos más recientes en{" "}
            <img
              src={YouTubeIcon}
              alt="Youtube"
              className="w-32 inline-block"
            />
          </h5>
        </div>
        <div className='md:w-6/12 text-center'>
          <CardYoutube />
        </div>
      </div>
    </div>
  );
};

export default Actualizaciones;
