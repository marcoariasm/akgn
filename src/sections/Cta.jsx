import React from "react";

const Cta = () => {
  return (
    <section className="flex justify-center bg-lightGreen-100">
      <div className="flex flex-row items-center md:mx-auto lg:max-w-[80%] py-16 md:space-x-16 px-16 ">
        <span className="text-center text-4xl font-bold text-darkGreen-100">
          ¿Listo para optimizar el manejo de tus residuos?
        </span>
        <br />
        <button className="text-white cursor-pointer font-semibold text-2xl py-6 px-8 rounded-md mx-auto md:mx-0 shadow-xl hover:shadow-sm hover:translate-y-[1px] hover:bg-darkGreen-100 bg-darkGreen-80 border-none w-auto">
          <a
            href="https://calendar.google.com/"
            className="text-3xl font-semibold text-white hover:text-white"
          >
            Reserva tu consulta gratis
          </a>
        </button>
      </div>
    </section>
  );
};

export default Cta;
