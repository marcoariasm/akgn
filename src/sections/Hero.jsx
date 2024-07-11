import React from "react";
import data from "../data/content";

const Hero = () => {
  const { title, phrase, ctaUrl, ctaText, imageUrl } = data.hero;
  return (
    <section className="flex justify-center bg-gradient-akigreen"> 
      <div className="flex flex-col-reverse justify-center items-center md:flex-row lg:max-w-[80%]">
        <div className="flex flex-col space-y-10 text-left p-16 md:w-1/2 md:pr-16 lg:w-2/5">
          <span className="text-4xl md:text-xl font-extrabold leading-[36px] text-darkGreen-100">
            {title}
          </span>
          <span className="text-xl md:text-xxl text-black">
            {phrase}
          </span>
          <button className="w-auto text-white cursor-pointer font-semibold text-xl py-5 px-12 rounded-md mx-auto md:ml-0 shadow-xl hover:shadow-sm hover:translate-y-[1px] hover:bg-darkGreen-100 bg-darkGreen-80 border-none hover:text-white hover:scale-105">
            <a
              href={ctaUrl}
              rel="noreferrer"
              target="_blank"
              className="appearance-none text-white hover:text-white visited:text-white"
            >
              {ctaText}
            </a>
          </button>
        </div>
        <div className="md:w-1/2 lg:w-3/5">
          <img
            src={imageUrl}
            alt="recojo residuos medicos"
            className="flex w-auto h-full md:rounded-[25px] md:p-16 md:pl-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
