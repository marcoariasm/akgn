import React from "react";
import data from "../data/content";

const Contact = () => {
  const { address, ctaText, ctaUrl, phone1, phone2, social } =
    data.contact;
  return (
    <section
      className="flex md:flex-col items-center bg-lemonGreen-100 !py-0"
      id="contact"
      style={{scrollMarginTop: 70}}
    >
      <div className="flex flex-col-reverse md:flex-row lg:max-w-[80%] mx-auto">
        <div className="flex flex-col gap-12 p-16 md:mt-0">
          <div className="flex flex-col gap-y-4 items-center mx-auto">
            <h2 className="text-darkGreen-100 font-bold text-4xl">
              CONTÁCTANOS
            </h2>
            <button className="text-white cursor-pointer font-semibold text-2xl py-6 px-8 rounded-md mx-auto md:mx-0 shadow-xl hover:shadow-sm hover:translate-y-[1px] hover:bg-darkGreen-100 bg-darkGreen-80 border-none w-[100%]">
              <a
                href={ctaUrl}
                className="text-3xl font-semibold text-white hover:text-white"
              >
                {ctaText}
              </a>
            </button>
          </div>

          <div className="flex flex-col mx-auto gap-y-8">
            <div className="flex flex-row gap-x-32">
              <div className="flex flex-col items-center">
                <span className="text-darkGreen-100 font-bold text-4xl mb-3">
                  Teléfonos
                </span>
                {/* <br /> */}
                <p className="text-white font-semibold text-2xl">
                  <a href={`tel:${phone1}`}>{phone1}</a>
                </p>
                <p className="text-white font-semibold text-2xl">
                  <a href={`tel:${phone1}`}>{phone2}</a>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-darkGreen-100 font-bold text-4xl mb-4">
                  Email
                </span>
                {/* <br /> */}
                <span className="text-white font-semibold text-2xl">
                  <a href={`mailto:info@akigreen.com`}>info@akigreen.com</a>
                  {/* {
                    emails.map((e)=> {return (`info@akigreen.com`)})
                  } */}
                </span>
                <br />
              </div>
            </div>
            <div className="text-center">
              <span className="text-darkGreen-100 font-bold text-4xl mb-6">
                Dirección
              </span>
              {/* <br /> */}
              {/* <br /> */}
              <p className="text-white font-semibold text-2xl mt-3">
                {address}
              </p>
              <br />
            </div>
            <div className="flex flex-row gap-x-32 py-4 mx-auto">
              {social.map((s) => {
                return (
                  <a key={s.id} href={s.link} target="_blank" rel="noreferrer">
                    <img src={s.iconUrl} alt="" className="w-20 h-auto hover:bg-lightGreen-100 rounded-full" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-16">
          <div className="map-section">
            <div className="gmap-frame">
              <iframe
                title="map"
                id="gmap_canvas"
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Avenida%20Ferrero%201280,%20la%20Molina+(Akigreen)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
