import React from "react";
import logo from "../assets/logo-color-small.png";
import "../App.css";

export const Navigation = (props) => {
  return (
    <>
      <nav className="sticky top-0 before:bg-white stripped-bg h-[90px]">
        <a className="navbar-brand page-scroll" href="#page-top">
          <img src={logo} alt="akigreen" />{" "}
        </a>{" "}
      </nav>

      <div class="flex flex-row lg:space-y-0 bg-green-lemon p-8 gap-8 items-center">
        <img
          src="img/residuos-medicos.png"
          alt="recojo residuos medicos"
          className="rounded-[25px]"
        />

        <div className="flex flex-col text-white">
          <p className="text-[50px] font-extrabold mb-8">AKIGREEN</p>
          <span className="text-2xl mb-16">
            Texto de prueba, texto de prueba, texto de prueba, texto de prueba,
            texto de prueba, texto de prueba, texto de prueba, texto de prueba,
            texto de prueba, texto de prueba.
          </span>
          <button class="w-[300px] rounded-full py-4 px-8 my-3 mx-auto text-2xl font-semibold bg-green-dark border-none text-white lg:ml-0 cursor-pointer">
            <a href="#" class="text-3xl font-semibold">
              Ver más
            </a>
          </button>
        </div>
      </div>

      <div class="flex flex-col lg:space-y-0 p-8 gap-8 text-green-dark">
        <div className="px-6">
          <p className="text-center text-[40px] font-semibold">
            SOBRE NOSOTROS
          </p>
          <hr className="bg-green-dark h-[1px] w-full" />
        </div>
        <div className="flex flex-row">
          <p className="text-[28px] font-semibold grid-cols-7 p-6 text-center">
            Somos una empresa con personal altamente capacitado y experimentado,
            donde ofrecemos un servicio eficiente y sostenible a nuestros
            clientes mientras protegemos la naturaleza, almacenamiento e
            industria. Nos comprometemos con la conservación ambiental y
            promovemos prácticas responsables en todas las operaciones.
          </p>
          <img
            src="img/desecho-residuos2.png"
            alt="desecho residuos"
            className="rounded-[30px] grid-cols-5 p-6"
          />
        </div>
      </div>

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

      <div className="flex flex-row bg-green-lemon p-12 gap-12 text-white">
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
            Nos encargamos de colocar sus manifiestos en la página decretada por
            el estado peruano llamado SIGERSOL.
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

      <div className="flex flex-row bg-green-light p-12 gap-20 text-green-dark justify-center pb-[300px]">
        <p className="text-center text-[28px] font-semibold mb-6 pr-[120px]">
          CONSULTORÍA AMBIENTAL
        </p>
        <p className="text-center text-[28px] font-semibold mb-6">
          ESTUDIO AMBIENTAL
        </p>
        {/* <hr className="bg-dark-green h-[1px] w-full" /> */}
      </div>

      <div className="flex flex-row bg-green-lemon p-12 text-white-justify-center">
        <div className="flex flex-col gap-12">
          hola
        </div>
        <img src="img/contacto.png" alt="contacto" />
      </div>
    </>
    // <nav id="menu" className="navbar navbar-default navbar-fixed-top stripped-bg">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <button
    //         type="button"
    //         className="navbar-toggle collapsed"
    //         data-toggle="collapse"
    //         data-target="#bs-example-navbar-collapse-1"
    //       >
    //         {" "}
    //         <span className="sr-only">Toggle navigation</span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //       </button>
    //       <a className="navbar-brand page-scroll" href="#page-top">
    //         <img src={logo} alt="akigreen" height="80px" width="auto"/>
    //       </a>{" "}
    //     </div>

    //     <div
    //       className="collapse navbar-collapse"
    //       id="bs-example-navbar-collapse-1"
    //     >
    //       {/* <ul className="nav navbar-nav navbar-right">
    //         <li>
    //           <a href="#features" className="page-scroll">
    //             Features
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#about" className="page-scroll">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#services" className="page-scroll">
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#portfolio" className="page-scroll">
    //             Gallery
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#testimonials" className="page-scroll">
    //             Testimonials
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#team" className="page-scroll">
    //             Team
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#contact" className="page-scroll">
    //             Contact
    //           </a>
    //         </li>
    //       </ul> */}
    //     </div>
    //   </div>
    // </nav>
  );
};
