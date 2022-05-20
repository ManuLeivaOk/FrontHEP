import React from "react";
import CardShop from "./CardShop";
import Donaciones from "./Donaciones";

const Tienda = () => {
  return (
    <div className="container mx-auto my-20 flex flex-wrap justify-center">
      <h2 className="text-center font-black text-5xl tituloTienda p-6 mb-12">
        Bienvenido a nuestra tienda
      </h2>
      <div className="flex flex-wrap justify-center">
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
      </div>

      <Donaciones />
    </div>
  );
};

export default Tienda;
