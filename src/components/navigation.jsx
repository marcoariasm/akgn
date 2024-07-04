import React, { useState, useEffect } from "react";
import logo from "../assets/logo-color-small.png";
import whatsappLogo from "../assets/icons/whatsapp.png";
import "./layout.css";
import Collapse from "./Collapse/Collapse";

export const Navigation = (props) => {
  const [scrollOn, setScrollOn] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollOn(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = (e) => {
    e.preventDefault();
    let menuBtn = document.getElementById("menu-btn");
    let menu = document.getElementById("menu");
    menuBtn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
  };

  return (
    <>
      {/* navigation */}
      <nav
        className={`shadow-md sticky top-0 z-30 ${
          scrollOn > 0 ? "bg-lightGreen-80 z-40" : "bg-white"
        }`}
        id="#top"
      >
        <div className="flex flex-row items-center justify-between mx-auto lg:max-w-[80%] h-[90px] md:h-[70px] px-8">
          {/*-- logo */}
          <a href="/">
            <img src={logo} alt="" />
          </a>

          {/* menu links */}
          <div className="lg:items-center space-x-5">
            <a href="/" className="text-darkGreen-100 font-extrabold text-3xl">
              Inicio
            </a>
            <a
              href="#about"
              className="text-darkGreen-100 font-extrabold text-3xl"
            >
              Quienes somos
            </a>
            <a
              href="#services"
              className="text-darkGreen-100 font-extrabold text-3xl"
            >
              Servicios
            </a>
            <a
              href="#faq"
              className="text-darkGreen-100 font-extrabold text-3xl"
            >
              Preguntas frecuentes
            </a>
            <a
              href="#contact"
              className="text-darkGreen-100 font-extrabold text-3xl"
            >
              Contacto
            </a>
            <a
              href="https://web.whatsapp.com"
              className="w-10 h-auto ml-20  hidden md:block"
            >
              <img src={whatsappLogo} alt="" />
            </a>
          </div>

          {/* hamburger menu button */}
          <div className="block lg:hidden mr-6" onClick={toggleMenu}>
            <button
              id="menu-btn"
              type="button"
              className={`hamburger block z-40 focus:outline-none border-none${
                scrollOn > 0 ? "bg-lightGreen-80 z-40" : "bg-white"
              }`}
            >
              <span className="hamburger-top bg-darkGreen-100"></span>
              <span className="hamburger-middle bg-darkGreen-100"></span>
              <span className="hamburger-bottom bg-darkGreen-100"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* menu responsive overlay */}
      <div className="relative">
        <div
          id="menu"
          className="absolute top-0 left-0 hidden flex-col self-end w-full h-svh text-3xl text-white animate-telon bg-lemonGreen-100 text-center z-40"
        >
          <a href="/" className="mx-auto h-24 text-4xl font-bold mt-12">
            Inicio
          </a>
          <a href="#about" className="mx-auto h-24 text-4xl font-normal">
            Quienes somos
          </a>
          <a href="#services" className="mx-auto h-24 text-4xl font-normal">
            Servicios
          </a>
          <a href="#faq" className="mx-auto h-24 text-4xl font-normal">
            Preguntas frecuentes
          </a>
          <a href="#contact" className="mx-auto h-24 text-4xl font-normal">
            Contacto
          </a>
          <a
            href="https://web.whatsapp.com"
            className="mx-auto pt-12 w-10 h-auto"
          >
            <img src={whatsappLogo} alt="" />
          </a>
        </div>
      </div>

      {/* hero */}
      <section className="flex justify-center bg-gradient-akigreen">
        <div className="flex flex-col-reverse justify-center items-center md:flex-row lg:max-w-[80%]">
          <div className="flex flex-col p-16 space-y-12 text-left md:w-1/2 md:pr-16 lg:w-2/5">
            <span className="text-4xl md:text-[25px] font-extrabold leading-[36px] text-darkGreen-100">
              Recolección inteligente, entorno saludable
            </span>
            <span className="text-2xl md:text-3xl text-black">
              Texto de prueba, texto de prueba, texto de prueba, texto de
              prueba, texto de prueba, texto de prueba, texto de prueba, texto
              de prueba, texto de prueba, texto de prueba.
            </span>
            <button className="w-auto text-white cursor-pointer font-semibold text-3xl py-6 px-16 rounded-md mx-auto md:ml-0 shadow-xl hover:shadow-sm hover:translate-y-[1px] hover:bg-darkGreen-100 bg-darkGreen-80 border-none hover:text-white">
              <a
                href="https://calendar.google.com/"
                rel="noreferrer"
                target="_blank"
              >
                Reserva tu consulta gratis
              </a>
            </button>
          </div>

          <div className="md:w-1/2 lg:w-3/5">
            <img
              src="img/doctor-removiendo-guantes.png"
              alt="recojo residuos medicos"
              className="flex w-auto h-full md:py-16 md:pr-16 "
            />
          </div>
        </div>
      </section>

      {/* quienes somos */}
      <section
        className="flex justify-center bg-darkGreen-100 !py-0"
        id="about"
      >
        <div className="flex flex-col justify-center mx-auto md:flex-row lg:max-w-[80%]">
          <div className="flex flex-col text-center md:text-left p-16 space-y-6 md:w-1/3">
            <span className="text-[115px] leading-[115px] font-extrabold text-lemonGreen-100">
              5<sup>+</sup>
            </span>
            <br />
            <span className="text-3xl font-bold uppercase text-white">
              años de experiencia con diferentes industrias y clientes
            </span>
          </div>

          <div className="md:w-2/3 p-16 pr-16">
            <span className="text-lemonGreen-100 text-2xl font-extrabold mb-4">
              ¿Qué hacemos?
            </span>
            <br />
            <span className="text-white text-[25px] font-bold mb-8">
              Gestión inteligente y manejo responsable de residuos
              biocontaminantes
            </span>
            <br />
            <hr className="w-32 bg-lemonGreen-100 h-1 my-8" />
            <span className="text-white text-3xl pt-8">
              Somos una empresa peruana dedicada a la gestión integral de
              residuos biocontaminantes, comprometida con la salud pública y la
              protección del medio ambiente. Ofrecemos servicios de recolección,
              transporte y tratamiento de residuos médicos peligrosos. Nuestro
              equipo de profesionales altamente capacitados utiliza tecnologías
              de vanguardia para garantizar la seguridad y el cumplimiento de
              las normativas vigentes. Creemos en la importancia de un manejo
              responsable de los residuos para un futuro más saludable y
              sostenible.
            </span>
          </div>
        </div>
      </section>

      {/* services */}
      <section
        className="flex justify-center bg-gradient-akigreen2 !py-0"
        id="services"
      >
        <div className="flex flex-col mx-auto lg:max-w-[80%]">
          <div className="flex flex-col-reverse md:flex-row items-center p-16">
            <div className="md:w-1/2 pr-16">
              <span className="text-darkGreen-100 text-2xl font-extrabold mb-4">
                ¿Qúe servicios brindamos?
              </span>
              <br />
              <hr className="w-32 bg-darkGreen-100 h-1 my-8" />
              <span className="text-black text-3xl font-bold mb-8 text-left">
                Nuestros servicios de manejo y recolección de residuos
                biocontaminantes están diseñados para garantizar la seguridad y
                el cumplimiento de las normativas sanitarias. Ofrecemos
                soluciones personalizadas para hospitales, clínicas,
                laboratorios y otros centros de salud. Nos encargamos de la
                recogida, transporte, tratamiento y disposición final de
                residuos médicos peligrosos, asegurando una gestión eficiente y
                sostenible.
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

          <div className="flex flex-col md:flex-row mx-auto gap-16 p-16">
            <div className="flex flex-col md:w-1/3 shadow-lg max-w-[460px] border-darkGreen-100 rounded-[25px] bg-white p-12">
              <img
                className="w-24 h-auto"
                src="img/residuos-toxicos.png"
                alt=""
              />
              <span className="text-3xl font-extrabold text-darkGreen-100 mt-8">
                Recojo de residuos biocontaminados
              </span>
              <br />
              <span className="text-xl text-black mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptas atque sapiente odio mollitia esse, ipsa sed cumque.
                Culpa est ullam.
              </span>
              <br />
              <img
                className="w-12 h-auto"
                src="img/flecha-derecha.png"
                alt=""
              />
            </div>
            <div className="flex flex-col md:w-1/3 shadow-lg max-w-[460px] border-darkGreen-100 rounded-[25px] bg-white p-12">
              <img
                className="w-24 h-auto"
                src="img/cono-de-trafico.png"
                alt=""
              />
              <span className="text-3xl font-extrabold text-darkGreen-100 mt-8">
                Estudio vial
              </span>
              <br />
              <span className="text-xl text-black mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptas atque sapiente odio mollitia esse, ipsa sed cumque.
                Culpa est ullam.
              </span>
              <br />
              <img
                className="w-12 h-auto"
                src="img/flecha-derecha.png"
                alt=""
              />
            </div>
            <div className="flex flex-col md:w-1/3 shadow-lg max-w-[460px] border-darkGreen-100 rounded-[25px] bg-white p-12">
              <img className="w-24 h-auto" src="img/conferencia.png" alt="" />
              <span className="text-3xl font-extrabold text-darkGreen-100 mt-8">
                Capacitaciones
              </span>
              <br />
              <span className="text-xl text-black mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptas atque sapiente odio mollitia esse, ipsa sed cumque.
                Culpa est ullam.
              </span>
              <br />
              <img
                className="w-12 h-auto"
                src="img/flecha-derecha.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* licenciados */}
      <section className="flex justify-center items-center relative bg-darkGreen-100">
        <div className="flex flex-col mx-auto lg:max-w-[80%] p-16 space-y-8">
          <span className="text-lemonGreen-100 text-2xl font-extrabold">
            ¿Cómo trabajamos?
          </span>
          <span className="text-white text-3xl font-bold mb-8">
            Estamos licenciados y contamos con permisos del ministerio de
            trabajo. texto ejemplo texto ejemplo texto ejemplo texto ejemplo
          </span>
          <hr className="w-32 bg-lemonGreen-100 h-1" />
          <div className="flex flex-col items-center md:flex-row mx-auto md:space-x-16 space-y-12 md:space-y-0">
            <img src="img/minam.png" alt="" className="w-[235px] h-auto" />
            <img
              src="img/MTC-logo.png"
              alt=""
              className="w-[180px] h-auto"
            />
            <img src="img/Mml-bn.png" alt="" className="w-[170px] h-auto" />
          </div>
        </div>
      </section>

      {/* call to action */}
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

      {/* clientes */}
      <section className="flex justify-center items-center bg-darkGreen-100">
        <div className="flex flex-col lg:max-w-[80%]">

          <div className="flex flex-col p-16">
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
          <div className="flex flex-row flex-wrap justify-center mx-auto space-x-12 px-16 pb-12">
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

      {/* preguntas frecuentes */}
      <section
        className="flex md:flex-col items-center bg-lightGreen-100 !py-0"
        id="faq"
      >
        <div className="flex flex-col md:flex-row lg:max-w-[80%] mx-auto gap-12">
          <div className="flex items-start md:pt-20 pt-0 mx-auto md:w-2/5 bg-inherit">
            <img
              src="img/doctores-tablet.jpg"
              alt=""
              className="w-full h-auto md:rounded-[40px] rounded-none p-16 pb-0"
            />
          </div>
          <div className="flex flex-col md:w-3/5 px-16 lg:pt-16">
            <span className="text-darkGreen-100 text-2xl font-extrabold">
              Preguntas frecuentes
            </span>
            <br />
            <span className="text-black text-3xl font-bold mb-4">
              Absolveremos todas tus dudas.
            </span>
            <br />
            <hr className="w-32 bg-darkGreen-100 h-1 mb-12 md:"/>
            <Collapse />
            <div className="md:mb-16">&nbsp;</div>
          </div>
        </div>
      </section>

      {/* contacto */}
      <section
        className="flex md:flex-col items-center bg-lemonGreen-100 !py-0"
        id="contact"
      >
        <div className="flex flex-col-reverse md:flex-row lg:max-w-[80%] mx-auto">
          <div className="flex flex-col md:w-3/5 gap-12 p-16 md:mt-0">
            <div className="flex flex-row gap-x-32 mx-auto">
              <a
                href="https://www.facebook.com/profile.php?id=61557510952384&locale=es_LA"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/facebook.png" alt="" className="w-20 h-auto" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src="img/gorjeo.png" alt="" className="w-20 h-auto" />
              </a>
              <a
                href="https://www.instagram.com/akigreen_peru/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/instagram.png" alt="" className="w-20 h-auto" />
              </a>
            </div>
            <div className="flex flex-col gap-y-8 items-center mx-auto">
              <h2 className="text-darkGreen-100 font-bold text-4xl pt-8">
                CONTÁCTANOS
              </h2>
              <button className="text-white cursor-pointer font-semibold text-2xl py-6 px-8 rounded-md mx-auto md:mx-0 shadow-xl hover:shadow-sm hover:translate-y-[1px] hover:bg-darkGreen-100 bg-darkGreen-80 border-none w-[100%]">
                <a
                  href="https://calendar.google.com/"
                  className="text-3xl font-semibold text-white hover:text-white"
                >
                  Reserva tu consulta gratis
                </a>
              </button>
            </div>
            <div className="flex flex-col mx-auto gap-y-16">
              <div className="flex flex-row gap-x-32">
                <div className="flex flex-col items-center">
                  <span className="text-darkGreen-100 font-bold text-4xl">
                    TELÉFONOS
                  </span>
                  <br />
                  <span className="text-black text-2xl">+51 972 424 771</span>
                  <br />
                  <span className="text-black text-2xl">+51 980 997 849</span>
                  <br />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-darkGreen-100 font-bold text-4xl">
                    Email
                  </span>
                  <br />
                  <span className="text-black text-2xl">
                    informes@akigreen.com
                  </span>
                  <br />
                </div>
              </div>
              <div className="text-center">
                <span className="text-darkGreen-100 font-bold text-4xl">
                  DIRECCIÓN
                </span>
                <br />
                <span className="text-black text-2xl">
                  Av. Raúl Ferrero 1280 - La Molina
                </span>
                <br />
              </div>
            </div>
          </div>
          <div className="md:w-2/5 rounded-[65px] p-16">
            {/* <gmp-map
              center="-12.090263366699219,-76.95098114013672"
              zoom="14"
              map-id="DEMO_MAP_ID"
            >
              <gmp-advanced-marker
                position="-12.090263366699219,-76.95098114013672"
                title="My location"
              ></gmp-advanced-marker>
            </gmp-map> */}
            <img
              src="https://place-hold.it/500x400/666"
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
      {/* footer */}
      <section className="bg-darkGreen-80 text-white flex justify-center">
        <div className="lg:max-w-[80%] text-center p-10">
          Akigreen &copy; 2024. Todos los derechos reservados.
          <br />
          Desarrollado por <b>Urbeweb</b>
        </div>
      </section>
      {/* scroll to top arrow */}
      {scrollOn > 0 && (
        <div className="flex justify-center items-center fixed rounded-full bottom-8 right-8 z-90 w-20 h-20">
          <a href="#top">
            <img
              src="img/punta-de-flecha-hacia-arriba.png"
              alt=""
              className="w-16 h-auto"
            />
          </a>
        </div>
      )}
    </>
  );
};
