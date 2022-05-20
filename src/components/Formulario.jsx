

const Formulario = () => {

  return (
    <div className="bg-gray-50 px-5 py-3 w-full rounded-md shadow-md">
      <h2 className="text-gray-600 font-bold text-xl text-center">
        Dejanos tu mensaje
      </h2>
            <form className="mt-5" action="https://formsubmit.co/manuleivaok@gmail.com" method="POST">
              <div className="mb-4">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  placeholder="Nombre completo"
                />
              </div>
              <div className="mb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-100"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  as="textarea"
                  id="mensaje"
                  name="mensaje"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-100 h-40"
                  placeholder="Deja tu mensaje"
                />
              </div>
              <input
                type="submit"
                value="Enviar"
                className="mt-5 w-full text-white uppercase p-3 font-bold text-lg rounded-lg botonFormulario hover:opacity-50 cursor-pointer transition-all"
              />
            </form>
    </div>
  );
};

export default Formulario;
