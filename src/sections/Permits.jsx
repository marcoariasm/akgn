import React from "react";
import data from "../data/content";

const Permits = () => {
  const { title, permits } = data.how;
  return (
    <section className="flex justify-center items-center relative bg-darkGreen-100">
      <div className="flex flex-col mx-auto lg:max-w-[80%] px-16 py-24 space-y-8">
        <span className="text-lemonGreen-100 text-2xl font-extrabold">
          ¿Cómo trabajamos?
        </span>
        <span className="text-white text-3xl font-bold mb-8">{title}</span>
        <hr className="w-32 bg-lemonGreen-100 h-1" />
        <div className="flex flex-col items-center md:flex-row mx-auto md:space-x-16 space-y-12 md:space-y-0">
          {permits.map((p, index) => {
            return <img key={index} src={p.logoUrl} alt="" className="w-[180px] h-auto" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Permits;
