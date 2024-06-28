import React from "react";
import logo from "../assets/logo-color-small.png";
import "./layout.css";

export const Navigation = (props) => {
  return (
    <>
      {/* accesibility bar */}
      {/* <div
        class="flex flex-row justify-center md:justify-between items-center h-10 md:h-12 w-full bg-blue-100 dark:bg-black-100 md:pr-12 lg:px-[9%] 2xl:px-[14%]">
        <div class="">&nbsp;</div>
        <div class="flex flex-row space-2">
          <div
            class="relative toggle-container inline-block w-11 h-6 align-middle select-none outline-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle"
              class="toggle-checkbox absolute block w-3.5 h-3.5 m-1 border-none rounded-full bg-white appearance-none cursor-pointer"
              (click)="onToggleSwitch()" checked />
            <label for="toggle"
              class="toggle-label block overflow-hidden h-5 rounded-full bg-blue-100 dark:bg-black-100 border-white border-2 cursor-pointer"></label>
          </div>
          <label for="toggle" class="ml-3 text-base text-white" id="toggle-label" name="toggle-label">Dark mode</label>
        
          <div class="ml-6">
            <button
              class="rounded-l-2xl border-white w-12 h-6 text-white font-semibold bg-inherit mr-0 dark:bg-inherit outline-none cursor-pointer font-button">
              A+
            </button>
            <button
              class="rounded-r-2xl border-white w-12 h-6 text-white font-semibold bg-inherit -ml-[2px] dark:bg-inherit outline-none cursor-pointer font-button">
              A-
            </button>
          </div>
        </div>
      </div> */}

      {/* navigation */}
      <nav className="mx-auto shadow-md stripped-bg sticky top-0">
        <div className="container mx-auto flex flex-row items-center justify-between md:justify-around h-[70px] md:h-[90px]">
          {/*-- logo */}
          <a className="block" href="#">
            <img src={logo} alt="" />
          </a>
          {/* <a className="dark:hidden" href="/" ><img src="../assets/images/color (2).png" alt="" /></a> */}
          {/* <a className="dark:hidden" href="/" ><img src={logo} alt="" /></a> */}

          {/* menu links */}
          <div className="md:flex px-8 space-x-5 md:space-x-10">
            <a href="/form" className="text-green-dark font-extrabold text-2xl">
              Ingresa tu reclamo
            </a>
            <a
              href="/about"
              className="text-green-dark font-extrabold text-2xl"
            >
              Qué es Alóbanco
            </a>
            <a href="/faq" className="text-green-dark font-extrabold text-2xl">
              Preguntas frecuentes
            </a>
            <a href="/blog" className="text-green-dark font-extrabold text-2xl">
              Blog
            </a>
            <a
              href="{{linkWhatsApp}}"
              className="cursor-pointer"
              target="_blank"
            >
              <img
                className="dark:hidden"
                src="../assets/images/Vector.svg"
                alt="whatsapp"
                width="30px"
                height="30px"
              />
              <img
                className="hidden dark:block"
                src="../assets/images/whatsapp-icon-white.svg"
                alt="whatsapp"
                width="30px"
                height="30px"
              />
            </a>
          </div>

          {/* hamburger menu button */}
          <div className="md:hidden mr-3">
            {/* <button id="menu-btn" type="button" className="z-40 block hamburger md:hidden focus:outline-none bg-inherit border-none"
            (click)="toggleMenu($event)"> */}
            <button
              id="menu-btn"
              type="button"
              className="z-40 block hamburger md:hidden focus:outline-none bg-inherit border-none"
            >
              <span className="hamburger-top bg-blue-100 dark:bg-white"></span>
              <span className="hamburger-middle bg-blue-100 dark:bg-white"></span>
              <span className="hamburger-bottom bg-blue-100 dark:bg-white"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* menu responsive */}
      <div className="relative">
        <div
          id="menu"
          className="absolute top-0 left-0 hidden flex-col self-end w-full text-base text-white bg-blue-100 dark:bg-black-100 text-center z-40"
        >
          <div className="flex items-center justify-center w-full h-[3.5rem] bg-[#99d0ed] dark:bg-blue-100">
            <span className="text-blue-100 dark:text-white font-bold">
              Menú
            </span>
            {/* <button id="close-btn"
              className="absolute rounded-full bg-blue-100 dark:bg-white right-6 focus:outline-none border-none w-[30px] h-[30px]"
              (click)="toggleMenu($event)"> */}
            <button
              id="close-btn"
              className="absolute rounded-full bg-blue-100 dark:bg-white right-6 focus:outline-none border-none w-[30px] h-[30px]"
            >
              <img
                src="../../../../../assets/images/close-icon.svg"
                alt=""
                className="dark:hidden"
              />
              <img
                src="../../../../../assets/images/close-icon-white.svg"
                alt=""
                className="hidden dark:block dark:mx-auto"
              />
            </button>
          </div>
          <a
            href="/form"
            className="menu-item flex items-center justify-center h-14 text-base text-white font-normal"
          >
            Ingresa tu reclamo
          </a>
          <a
            href="/about"
            className="menu-item flex items-center justify-center h-14 text-base text-white font-normal"
          >
            Qué es Alóbanco
          </a>
          <a
            href="/faq"
            className="menu-item flex items-center justify-center h-14 text-base text-white font-normal"
          >
            Preguntas frecuentes
          </a>
          <a
            href="/blog"
            className="menu-item flex items-center justify-center h-14 text-base text-white font-normal"
          >
            Blog
          </a>
          <a
            href="#"
            className="menu-item last flex items-center justify-center h-14 mb-12"
          >
            <img
              src="../../../../../assets/images/whatsapp-icon-white.svg"
              alt=""
            />
          </a>
        </div>
      </div>

      {/* hero */}
      <div className="bg-green-lemon py-8">
        <div className="container flex md:flex-col items-center">
          -
          <div className="flex flex-col text-white">
            <p className="text-[50px] font-extrabold mb-8 text-center">
              AKIGREEN
            </p>
            <span className="text-2xl mb-16">
              Texto de prueba, texto de prueba, texto de prueba, texto de
              prueba, texto de prueba, texto de prueba, texto de prueba, texto
              de prueba, texto de prueba, texto de prueba.
            </span>
            <button className="w-[300px] rounded-full py-4 px-8 my-3 mx-auto text-2xl font-semibold bg-green-dark border-none text-white lg:ml-0 cursor-pointer">
              <a href="#" className="text-3xl font-semibold">
                Ver más
              </a>
            </button>
          </div>
          <img
            src="img/residuos-medicos.png"
            alt="recojo residuos medicos"
            className="w-full h-auto rounded-[25px]"
          />
        </div>
      </div>

      {/* about us */}
      <div className="bg-white py-8">
        <div className="container flex md:flex-col items-center">
          <img
            src="img/desecho-residuos2.png"
            alt="desecho residuos"
            className="rounded-[30px] grid-cols-5"
          />
          <div class="flex flex-col lg:space-y-0 p-8 gap-8 text-green-dark">
            <div className="px-6">
              <p className="text-center text-[40px] font-semibold">
                SOBRE NOSOTROS
              </p>
              <hr className="bg-green-dark h-[1px] w-full" />
            </div>
            <div className="flex flex-row">
              <p className="text-[28px] font-semibold grid-cols-7 p-6 text-center">
                Somos una empresa con personal altamente capacitado y
                experimentado, donde ofrecemos un servicio eficiente y
                sostenible a nuestros clientes mientras protegemos la
                naturaleza, almacenamiento e industria. Nos comprometemos con la
                conservación ambiental y promovemos prácticas responsables en
                todas las operaciones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="bg-green-light py-8">
        <div className="container flex md:flex-col items-center">
          <div className="flex flex-col bg-green-light text-green-dark p-12  gap-8">
            <div className="px-6">
              <p className="text-center text-[40px] font-semibold">
                NUESTROS SERVICIOS
              </p>
              <hr className="bg-green-dark h-[1px] w-full" />
            </div>
            <div className="flex flex-row gap-8">
              <div className="flex flex-col w-1/3 border-green-dark rounded-3xl border-[1px]">
                <img
                  className="rounded-3xl p-6"
                  src="img/residuos-hospitalarios.png"
                  alt="residuos hospitalarios"
                />
                <p className="text-4xl text-center font-bolder my-8">
                  RECOJO DE RESIDUOS SÓLIDOS HOSPITALARIOS
                </p>
              </div>
              <div className="flex flex-col w-1/3 border-green-dark rounded-3xl border-[1px]">
                <img
                  className="rounded-3xl p-6"
                  src="img/residuos-hospitalarios.png"
                  alt="residuos hospitalarios"
                />
                <p className="text-4xl text-center font-bolder my-8">
                  RECOJO DE RESIDUOS SÓLIDOS HOSPITALARIOS
                </p>
              </div>
              <div className="flex flex-col w-1/3 border-green-dark rounded-3xl border-[1px]">
                <img
                  className="rounded-3xl p-6"
                  src="img/residuos-hospitalarios.png"
                  alt="residuos hospitalarios"
                />
                <p className="text-4xl text-center font-bolder my-8">
                  RECOJO DE RESIDUOS SÓLIDOS HOSPITALARIOS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recojo residuos solidos */}
      <div className="bg-gradient-to-r from-green-lemon from-10% via-red-100 via-30% to-green-light to-90% py-8">
        <div className="container flex md:flex-col items-center">
          <img
            src="img/recojo-residuos.png"
            alt="recojo residuos"
            className="p-6"
          />
          <div className="flex flex-col relative">
            <p className="text-center text-[28px] font-semibold mb-6">
              RECOJO DE RESIDUOS SÓLIDOS HOSPITALARIOS
            </p>
            <hr className="bg-white h-[1px] w-full" />
            <p className="text-[28px] font-semibold p-6 text-center">
              Nos encargamos del recojo y procesamiento de los residuos sólidos
              que se desechan en el consultorio.
              <br />
              <br />
              Nos encargamos de colocar sus manifiestos en la página decretada
              por el estado peruano llamado SIGERSOL.
            </p>
            <img
              className="absolute right-0 bottom-0"
              src="img/minam.jpg"
              alt="logo ministerio del ambiente"
              width="150"
              height="auto"
            />
          </div>
        </div>
      </div>

      {/* consultoria ambiental */}
      <div className="bg-green-light py-8">
        <div className="container flex md:flex-col items-center">
          <p className="text-center text-[28px] font-semibold mb-6 pr-[120px]">
            CONSULTORÍA AMBIENTAL
          </p>
          <p className="text-center text-[28px] font-semibold mb-6">
            ESTUDIO AMBIENTAL
          </p>
        </div>
      </div>

      {/* contacto */}
      <div className="bg-green-lemon py-8">
        <div className="container flex md:flex-col items-center">
          <div className="flex flex-col w-1/2 gap-12">hola</div>
          <div className="w-1/2 border-3 border-green-dark">
            <img
              className="rounded-[65px] "
              src="img/contacto.png"
              alt="contacto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
