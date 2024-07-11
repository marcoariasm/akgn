import React from "react";
import data from "../data/content";

const Services = () => {
  const { title, items } = data.services;
  return (
    <section
      className="flex justify-center bg-gradient-akigreen2 !py-0"
      id="services"
      style={{scrollMarginTop: 70}}
    >
      <div className="flex flex-col mx-auto lg:max-w-[80%]">
        <div className="flex flex-col-reverse md:flex-row items-center px-16 py-24">
          <div className="md:w-1/2 pr-16">
            <span className="text-darkGreen-100 text-lg font-extrabold">
              ¿Qúe servicios brindamos?
            </span>
            <br />
            <hr className="w-32 bg-darkGreen-100 h-1 my-4" />
            <span className="text-black text-2xl font-bold mb-8 text-left mt-4">
              {title}
            </span>
            <br />
          </div>
          <div className="md:w-1/2 pt-16">
            <img
              src="img/desecho-residuos.png"
              alt=""
              className="flex h-auto w-full"
            />
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center md:flex-row mx-auto gap-16 px-16 py-24">
          {items.map(i => { return(
            <div 
              key={i.id}
              className="flex flex-col md:w-1/3 lg:w-1/4 shadow-lg max-w-[460px] min-w-[350px] border-darkGreen-100 rounded-[25px] bg-white p-12">
              <img
                className="w-24 h-auto"
                src={i.iconUrl}
                alt=""
              />
              <span className="text-3xl font-extrabold text-darkGreen-100 mt-8">
                {i.title}
              </span>
              <br />
              <span className="text-xl text-black mb-6">
                {i.description}
              </span>
              <br />
              {/* <img className="w-12 h-auto" src="img/flecha-derecha.png" alt="" /> */}
            </div>
          )})}
          {/* <div className="flex flex-col md:w-1/3 shadow-lg max-w-[460px] border-darkGreen-100 rounded-[25px] bg-white p-12">
            <img className="w-24 h-auto" src="img/cono-de-trafico.png" alt="" />
            <span className="text-3xl font-extrabold text-darkGreen-100 mt-8">
              Estudio vial
            </span>
            <br />
            <span className="text-xl text-black mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              voluptas atque sapiente odio mollitia esse, ipsa sed cumque. Culpa
              est ullam.
            </span>
            <br />
            <img className="w-12 h-auto" src="img/flecha-derecha.png" alt="" />
          </div>
          <div className="flex flex-col md:w-1/3 shadow-lg max-w-[460px] border-darkGreen-100 rounded-[25px] bg-white p-12">
            <img className="w-24 h-auto" src="img/conferencia.png" alt="" />
            <span className="text-3xl font-extrabold text-darkGreen-100 mt-8">
              Capacitaciones
            </span>
            <br />
            <span className="text-xl text-black mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              voluptas atque sapiente odio mollitia esse, ipsa sed cumque. Culpa
              est ullam.
            </span>
            <br />
            <img className="w-12 h-auto" src="img/flecha-derecha.png" alt="" /> 
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
