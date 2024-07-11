import React from "react";
import data from "../../data/content";

const Clients = () => {
  return (
    <section className="flex justify-center items-center bg-darkGreen-100">
      <div className="flex flex-col lg:max-w-[80%]">
        <div className="flex flex-col px-16 py-24">
          <span className="text-lemonGreen-100 text-2xl font-extrabold">
            ¿A quiénes hemos ayudado?
          </span>
          <br />
          <span className="text-white text-3xl font-bold mb-8">
            Nuestro compromiso con nuestros clientes es nuestra prioridad.
          </span>
          <br />
          <hr className="w-32 bg-lemonGreen-100 h-1" />
        </div>
        <div className="flex flex-row flex-wrap justify-center mx-auto space-x-12 px-16 pb-24">
          <img
            src="img/clients/logo-150x150.png"
            alt=""
            className="w-[150px] h-auto"
          />
          <img
            src="img/clients/clinicageo-150x150.png"
            alt=""
            className="w-[150px] h-auto"
          />
          <img
            src="img/clients/Bureau-Veritas-150x150.png"
            alt=""
            className="w-[150px] h-auto"
          />
          <img
            src="img/clients/el-salar-restaurante-150x150.png"
            alt=""
            className="w-[150px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
