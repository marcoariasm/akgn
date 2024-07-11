import React from "react";
import data from "../data/content";

const About = () => {
  const { description, value, indicator, title } = data.about;
  return (
    <section className="flex justify-center bg-darkGreen-100 !py-0" id="about" style={{scrollMarginTop: 70}}>
      <div className="flex flex-col justify-center mx-auto md:flex-row lg:max-w-[80%]">
        <div className="flex flex-col text-center md:text-left px-16 py-24 space-y-6 md:w-1/3">
          <span className="text-[115px] leading-[115px] font-extrabold text-lemonGreen-100">
            {value}<sup>+</sup>
          </span>
          <br />
          <span className="text-2xl font-bold uppercase text-white">
            {indicator}
          </span>
        </div>

        <div className="md:w-2/3 px-16 py-24 pr-16">
          <span className="text-lemonGreen-100 text-lg font-extrabold mb-4">
            ¿Qué hacemos?
          </span>
          <br />
          <span className="text-white text-2xl font-bold mb-8">
            {title}
          </span>
          <br />
          <hr className="w-32 bg-lemonGreen-100 h-1 my-8" />
          <span className="text-white text-2xl pt-8">
            {description}
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
