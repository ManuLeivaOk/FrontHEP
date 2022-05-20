import logoCafecito from "../assets/images/logoCafecitoApp.jpeg";
import logoPaypal from "../assets/images/logoPaypal.png";
import 'animate.css';

const Donaciones = () => {
  return (
    <>
      <div>
        <h2 className="text-center font-black text-5xl tituloTienda p-6 mt-12 animate__backInLeft">
          Podés ayudar a que el proyecto siga adelante
        </h2>
        <p className="text-gray-500 text-center">
          Breve explicacion de porque es muy importante el aporte de los oyentes
          para que el proyecto siga adelante. Con un pequeno aporte podes hacer
          al diferencia
        </p>
      </div>
      <div className="flex mt-10 justify-center">
        <a href="https://cafecito.app/historiaenpodcast" target="_blank">
          <img
            className="rounded-3xl w-28 h-28 mt-5 mr-10"
            src={logoCafecito}
            alt=""
          />
        </a>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=EW3GC3E2WJRB6"
          target="_blank"
        >
          <img className="rounded-3xl w-40" src={logoPaypal} alt="" />
        </a>
      </div>
    </>
  );
};

export default Donaciones;
