import React from "react";
import Collapse from '../components/Collapse/Collapse';
import data from "../data/content";

const Faq = () => {
  const { title, items, imageUrl } = data.faq;
  return (
    <section
      className="flex md:flex-col items-center bg-darkGreen-100 !py-0"
      id="faq"
      style={{scrollMarginTop: 70}}
    >
      <div className="flex flex-col md:flex-row lg:max-w-[80%] mx-auto gap-12">
        <div className="flex items-start md:pt-20 pt-0 mx-auto md:w-2/5 bg-inherit">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-auto md:rounded-[40px] rounded-none p-16 pb-0"
          />
        </div>
        <div className="flex flex-col md:w-3/5 px-16 py-24 lg:pt-16">
          <span className="text-lemonGreen-100 text-2xl font-extrabold">
            Preguntas frecuentes
          </span>
          <br />
          <span className="text-white text-3xl font-bold mb-4">
            {title}
          </span>
          <br />
          <hr className="w-32 bg-lemonGreen-100 h-1 mb-12" />
          <Collapse items={items}/>
          <div className="md:mb-16">&nbsp;</div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
