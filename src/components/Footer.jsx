import React from "react";
import logoHEP from "../assets/images/logo.jpeg";
import Formulario from "./Formulario";
import RedesFooter from "./RedesFooter";

const Footer = () => {
  return (
    <div className="shadow-inner mb-3">
      <div className="mx-auto container pt-16 px-4 mt-10 md:block hidden">
        <div className="flex">
          <div className="flex flex-col w-5/12 mr-8 justify-around">
            <div>
              <img src={logoHEP} alt="logoHEP" />
            </div>
            <RedesFooter />
            <p className="text-sm leading-none text-gray-800 mt-4 text-center">
              Copyright © 2022 Historia en podcast
            </p>
            <p className="text-sm leading-none text-gray-800 mt-4 text-center">
              Todos los derechos reservados
            </p>
          </div>
          <Formulario />
        </div>
      </div>

      <div className="mx-auto container pt-16 px-4 mt-10 md:hidden block">
        <div className="flex flex-col">
          <Formulario />
          <div className="flex flex-col md:w-5/12 w-9/12 mt-5 justify-around mx-auto">
            <div>
              <img src={logoHEP} alt="logoHEP" />
            </div>
              <RedesFooter />
              <p className="text-sm leading-none text-gray-800 mt-4 text-center">
                Copyright © 2022 Historia en podcast
              </p>
              <p className="text-sm leading-none text-gray-800 mt-4 text-center">
                Todos los derechos reservados
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
